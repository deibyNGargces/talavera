import { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";
import ProductForm from "./ProductForm";
import { BACKENDURL } from "@/api/api";

const APIURL = `${BACKENDURL}/index.php`;

interface Product {
 id: number;
 nombre: string;
 descripcion: string;
 precio: number;
 cantidad: number;
 disponibilidad: number;
 categoria_id: number;
}

const ProductManagement: React.FC = () => {
 const [products, setProducts] = useState<Product[]>([]);
 const [nombre, setNombre] = useState("");
 const [descripcion, setDescripcion] = useState("");
 const [precio, setPrecio] = useState(0);
 const [cantidad, setCantidad] = useState(0);
 const [disponibilidad, setDisponibilidad] = useState(0);
 const [imagen, setImagen] = useState("");
 const [categoriaId, setCategoriaId] = useState(1);
 const [error, setError] = useState<string | null>(null);
 const [isEditing, setIsEditing] = useState<boolean>(false);
 const [editingProductId, setEditingProductId] = useState<number | null>(null);

 useEffect(() => {
  fetchProducts();
 }, []);

 const fetchProducts = async () => {
  try {
   const response = await fetch(`${APIURL}?action=products`);
   const data = await response.json();
   console.log(data);

   setProducts(data);
  } catch (err) {
   setError("Error al obtener los productos");
  }
 };

 console.log(products);

 const handleCreateProduct = async () => {
  const fData = new FormData();
  fData.append("nombre", nombre);
  fData.append("descripcion", descripcion);
  fData.append("precio", precio.toString());
  fData.append("cantidad", cantidad.toString());
  fData.append("disponibilidad", disponibilidad.toString());
  fData.append("categoria_id", categoriaId.toString());
  fData.append("imagen", imagen);
  fData.append("contexto", "1");
  try {
   const response = await fetch(`${APIURL}`, {
    method: "POST",
    body: fData,
   });
   if (response.ok) {
    fetchProducts();
    setNombre("");
    setDescripcion("");
    setPrecio(0);
    setCantidad(0);
    setCategoriaId(1);
   } else {
    setError("Error al crear el producto");
   }
  } catch (err) {
   setError("Error al conectar con el servidor");
  }
 };

 const handleEditProduct = (product: Product) => {
  setIsEditing(true);
  setEditingProductId(product.id);
  setNombre(product.nombre);
  setDescripcion(product.descripcion);
  setPrecio(product.precio);
  setCantidad(product.cantidad);
  setCategoriaId(product.categoria_id);
 };

 const handleUpdateProduct = async () => {
  if (editingProductId === null) return;

  const fData = new FormData();
  fData.append("nombre", nombre);
  fData.append("descripcion", descripcion);
  fData.append("precio", precio.toString());
  fData.append("cantidad", cantidad.toString());
  fData.append("disponibilidad", disponibilidad.toString());
  fData.append("categoria_id", categoriaId.toString());
  fData.append("imagen", imagen);
  fData.append("id", editingProductId.toString());
  fData.append("contexto", "2");
  try {
   const response = await fetch(`${APIURL}`, {
    method: "POST",
    body: fData,
   });
   if (response.ok) {
    fetchProducts();
    setNombre("");
    setDescripcion("");
    setImagen("");
    setPrecio(0);
    setCantidad(0);
    setCategoriaId(1);
    setIsEditing(false);
    setEditingProductId(null);
   } else {
    setError("Error al actualizar el producto");
   }
  } catch (err) {
   setError("Error al conectar con el servidor");
  }
 };

 const handleDeleteProduct = async (id: number) => {
  const fData = new FormData();
  fData.append("id", id.toString());
  fData.append("contexto", "3");
  try {
   const response = await fetch(`${APIURL}`, {
    method: "POST",
    body: fData,
   });
   if (response.ok) {
    fetchProducts();
   } else {
    setError("Error al eliminar el producto");
   }
  } catch (err) {
   setError("Error al conectar con el servidor");
  }
 };

 return (
  <div>
   <h2 className="text-xl font-bold mb-4">Gestión de Productos</h2>
   {error && <p className="text-red-500 mb-4">{error}</p>}
   <ProductForm
    nombre={nombre}
    setNombre={setNombre}
    descripcion={descripcion}
    setDescripcion={setDescripcion}
    precio={precio}
    setPrecio={setPrecio}
    cantidad={cantidad}
    setCantidad={setCantidad}
    categoriaId={categoriaId}
    setCategoriaId={setCategoriaId}
    handleCreateProduct={handleCreateProduct}
    handleUpdateProduct={handleUpdateProduct}
    isEditing={isEditing}
    disponibilidad={disponibilidad}
    setDisponibilidad={setDisponibilidad}
    imagen={imagen}
    setImagen={setImagen}
    setIsEditing={setIsEditing}
   />
   <table className="min-w-full bg-white">
    <thead>
     <tr>
      <th className="py-2">Nombre</th>
      <th className="py-2">Descripción</th>
      <th className="py-2">Precio</th>
      <th className="py-2">Cantidad</th>
      <th className="py-2">Acciones</th>
     </tr>
    </thead>
    <tbody>
     {products.map((product) => (
      <tr key={product.id} className="border-b">
       <td className="py-2 px-4">{product.nombre}</td>
       <td className="py-2 px-4">{product.descripcion}</td>
       <td className="py-2 px-4">{product.precio}</td>
       <td className="py-2 px-4">{product.cantidad}</td>
       <td className="py-2 px-4">
        <button
         onClick={() => handleEditProduct(product)}
         className="bg-yellow-500 text-white p-1 rounded mr-2"
        >
         Editar
        </button>
        <button
         onClick={() => handleDeleteProduct(product.id)}
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

export default ProductManagement;
