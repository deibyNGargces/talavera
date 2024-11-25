import { useState, useEffect } from "react";

interface Product {
 id: number;
 nombre: string;
 descripcion: string;
 precio: number;
 cantidad: number;
 disponibilidad: number;
 categoria_id: number;
}

interface ProductDetailProps {
 productId: number;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
 const [product, setProduct] = useState<Product | null>(null);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  fetchProductById(productId);
 }, [productId]);

 const fetchProductById = async (id: number) => {
  try {
   const response = await fetch(
    `http://localhost/phpcrud/public/index.php?action=product&id=${id}`
   );
   const data = await response.json();
   if (response.ok) {
    setProduct(data);
   } else {
    setError(data.message || "Error al obtener el producto");
   }
  } catch (err) {
   setError("Error al conectar con el servidor");
  }
 };

 if (error) {
  return <p className="text-red-500">{error}</p>;
 }

 if (!product) {
  return <p>Cargando...</p>;
 }

 return (
  <div className="bg-white p-6 rounded-lg shadow-md">
   <h2 className="text-2xl font-bold mb-4">Detalles del Producto</h2>
   <p>
    <strong>Nombre:</strong> {product.nombre}
   </p>
   <p>
    <strong>Descripción:</strong> {product.descripcion}
   </p>
   <p>
    <strong>Precio:</strong> ${product.precio}
   </p>
   <p>
    <strong>Cantidad:</strong> {product.cantidad}
   </p>
   <p>
    <strong>Disponibilidad:</strong>{" "}
    {product.disponibilidad ? "Disponible" : "No Disponible"}
   </p>
   <p>
    <strong>ID Categoría:</strong> {product.categoria_id}
   </p>
  </div>
 );
};

export default ProductDetail;
