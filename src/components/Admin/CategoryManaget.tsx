import { useState, useEffect } from "react";

interface Category {
 id: number;
 nombre: string;
 descripcion: string;
}
import { BACKENDURL } from "@/api/api";

const APIURL = `${BACKENDURL}/category.php`;
const CategoryManagement: React.FC = () => {
 const [categories, setCategories] = useState<Category[]>([]);
 const [nombre, setNombre] = useState("");
 const [descripcion, setDescripcion] = useState("");
 const [error, setError] = useState<string | null>(null);

 const [isEditing, setIsEditing] = useState<boolean>(false);
 const [editingCategoryId, setEditingCategoryId] = useState<number | null>(
  null
 );

 useEffect(() => {
  fetchCategories();
 }, []);

 const fetchCategories = async () => {
  try {
   const response = await fetch(`${APIURL}?action=categories`);
   console.log(response);
   const data = await response.json();
   setCategories(data);
   console.log(data);
  } catch (err) {
   setError("Error al obtener las categorías");
  }
 };

 const handleCreateCategory = async () => {
  const fData = new FormData();
  fData.append("nombre", nombre);
  fData.append("descripcion", descripcion);
  fData.append("action", "create");
  try {
   const response = await fetch(`${APIURL}`, {
    method: "POST",
    body: fData,
   });
   if (response.ok) {
    console.log(response);
    fetchCategories();
    setNombre("");
    setDescripcion("");
   } else {
    setError("Error al crear la categoría");
   }
  } catch (err) {
   setError("Error al conectar con el servidor");
  }
 };

 const handleEditCategory = (category: Category) => {
  setIsEditing(true);
  setEditingCategoryId(category.id);
  setNombre(category.nombre);
  setDescripcion(category.descripcion);
 };

 const handleUpdateCategory = async () => {
  if (editingCategoryId === null) return;

  const fData = new FormData();
  fData.append("nombre", nombre);
  fData.append("descripcion", descripcion);
  fData.append("id", editingCategoryId.toString());
  fData.append("action", "update");
  try {
   const response = await fetch(`${APIURL}`, {
    method: "POST",
    body: fData,
   });

   if (response.ok) {
    console.log(response);
    fetchCategories();
    setNombre("");
    setDescripcion("");
    setIsEditing(false);
    setEditingCategoryId(null);
   } else {
    setError("Error al actualizar la categoría");
   }
  } catch (err) {
   setError("Error al conectar con el servidor");
  }
 };

 const handleDeleteCategory = async (id: number) => {
  const fData = new FormData();
  fData.append("id", id.toString());
  fData.append("action", "delete");
  try {
   const response = await fetch(`${APIURL}`, {
    method: "POST",
    body: fData,
   });

   if (response.ok) {
    console.log(response);
    fetchCategories();
   } else {
    setError("Error al eliminar la categoría");
   }
  } catch (err) {
   setError("Error al conectar con el servidor");
  }
 };

 return (
  <div>
   <h2 className="text-xl font-bold mb-4">Gestión de Categorías</h2>
   {error && <p className="text-red-500 mb-4">{error}</p>}
   <div className="mb-6">
    <input
     type="text"
     placeholder="Nombre"
     value={nombre}
     onChange={(e) => setNombre(e.target.value)}
     className="border p-2 mr-2"
    />
    <input
     type="text"
     placeholder="Descripción"
     value={descripcion}
     onChange={(e) => setDescripcion(e.target.value)}
     className="border p-2 mr-2"
    />
    {isEditing ? (
     <button
      onClick={handleUpdateCategory}
      className="bg-blue-500 text-white p-2 rounded"
     >
      Actualizar Categoría
     </button>
    ) : (
     <button
      onClick={handleCreateCategory}
      className="bg-green-500 text-white p-2 rounded"
     >
      Crear Categoría
     </button>
    )}
   </div>
   <table className="min-w-full bg-white">
    <thead>
     <tr>
      <th className="py-2">Nombre</th>
      <th className="py-2">Descripción</th>
      <th className="py-2">Acciones</th>
     </tr>
    </thead>
    <tbody>
     {categories.map((category) => (
      <tr key={category.id} className="border-b">
       <td className="py-2 px-4">{category.nombre}</td>
       <td className="py-2 px-4">{category.descripcion}</td>
       <td className="py-2 px-4">
        <button
         onClick={() => handleEditCategory(category)}
         className="bg-yellow-500 text-white p-1 rounded mr-2"
        >
         Editar
        </button>
        <button
         onClick={() => handleDeleteCategory(category.id)}
         className="bg-red-500 text-white p-1 rounded"
        >
         Eliminar
        </button>
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default CategoryManagement;
