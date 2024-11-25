import { BACKENDURL } from "@/api/api";
import React, { useEffect, useState } from "react";

const APIURL = `${BACKENDURL}/category.php`;

const ProductForm = ({
 nombre,
 setNombre,
 descripcion,
 setDescripcion,
 precio,
 setPrecio,
 cantidad,
 setCantidad,
 categoriaId,
 setCategoriaId,
 isEditing,
 handleCreateProduct,
 handleUpdateProduct,
 disponibilidad,
 setDisponibilidad,
 imagen,
 setImagen,
 setIsEditing,
}) => {
 const [categories, setCategories] = useState([]);
 const [imagePreview, setImagePreview] = useState("");
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
   console.error("Error al obtener las categorías");
  }
 };

 const handleClear = () => {
  setNombre("");
  setDescripcion("");
  setPrecio(0);
  setCantidad(0);
  setCategoriaId(1);
  setDisponibilidad(0);
  setImagen("");
  setImagePreview("");
  setIsEditing(false);
  // limpiar el input
  const fileInput = document.querySelector(
   "input[type='file']"
  ) as HTMLInputElement;
  if (fileInput) {
   fileInput.value = "";
  }
 };

 const handleAddImage = (e) => {
  const file = e.target.files[0];
  if (file) {
   const reader = new FileReader();
   reader.onloadend = () => {
    setImagen(file);
    setImagePreview(reader.result as string);
   };
   reader.readAsDataURL(file);
  }
 };

 return (
  <div className="mb-6">
   <div className="grid grid-cols-3">
    <div className="col-span-2 flex flex-col gap-2">
     <div className="flex items-center gap-2  ">
      <span className="text-sm font-semibold w-40">Nombre de Producto</span>
      <input
       type="text"
       placeholder="Nombre"
       value={nombre}
       onChange={(e) => setNombre(e.target.value)}
       className="border p-2 mr-2 rounded-md flex-1"
      />
     </div>
     <div className="flex items-center gap-2">
      <span className="text-sm font-semibold w-40">Descripción</span>
      <input
       type="text"
       placeholder="Descripción"
       value={descripcion}
       onChange={(e) => setDescripcion(e.target.value)}
       className="border p-2 mr-2 rounded-md flex-1"
      />
     </div>

     <div className="flex w-full justify-between flex-wrap gap-2 ">
      <div className="flex items-center gap-2">
       <span className="text-sm font-semibold w-40">Precio</span>
       <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(parseFloat(e.target.value))}
        className="border p-2 mr-2 rounded-md flex-1"
       />
      </div>
      <div className="flex items-center gap-2">
       <span className="text-sm font-semibold">Cantidad</span>
       <input
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => setCantidad(parseInt(e.target.value))}
        className="border p-2 mr-2 rounded-md "
       />
      </div>{" "}
     </div>
     <div className="flex w-full justify-between flex-wrap gap-2 ">
      <div className="flex items-center gap-2">
       <span className="text-sm font-semibold w-40">Categoría</span>
       <select
        value={categoriaId}
        onChange={(e) => setCategoriaId(parseInt(e.target.value))}
        className="border p-2 mr-2 rounded-md flex-1"
       >
        <option value="">Selecciona una categoría</option>
        {categories.map((category) => (
         <option key={category.id} value={category.id}>
          {category.nombre}
         </option>
        ))}
       </select>
      </div>
      <div className="flex items-center gap-2">
       <span className="text-sm font-semibold ">Disponibilidad</span>
       <select
        value={disponibilidad}
        onChange={(e) => setDisponibilidad(e.target.value)}
        className="border p-2 mr-2 rounded-md flex-1"
       >
        <option value="1">Disponible</option>
        <option value="0">No Disponible</option>
       </select>
      </div>
     </div>

     <div className="flex items-center gap-2">
      <span className="text-sm font-semibold w-40">Imagen</span>
      <input
       type="file"
       className="border p-2 mr-2 rounded-md flex-1"
       accept="image/*"
       onChange={handleAddImage}
      />
     </div>
    </div>
    {/* preview de imagen */}
    <div className="col-span-1 bg-slate-200 rounded-sm max-h-56">
     {imagePreview && (
      <img
       src={imagePreview}
       alt="preview"
       className="w-full h-full rounded-sm object-contain"
      />
     )}
    </div>
   </div>
   <div className="flex justify-end my-3">
    {/* cancelar edición */}
    <button className="bg-red-500 text-white p-2 rounded" onClick={handleClear}>
     Cancelar
    </button>

    {isEditing ? (
     <button
      onClick={handleUpdateProduct}
      className="bg-blue-500 text-white p-2 rounded"
     >
      Actualizar Producto
     </button>
    ) : (
     <button
      onClick={handleCreateProduct}
      className="bg-green-500 text-white p-2 rounded"
     >
      Crear Producto
     </button>
    )}
   </div>
  </div>
 );
};

export default ProductForm;
