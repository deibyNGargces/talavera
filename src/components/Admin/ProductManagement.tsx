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
  const [disponibilidad, setDisponibilidad] = useState(1);
  const [imagen, setImagen] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
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
      if (!response.ok) throw new Error("Error al obtener los productos");
      const data = await response.json();
  
      // Asegúrate de que los campos numéricos sean números
      const formattedProducts = data.map((product: any) => ({
        ...product,
        precio: parseFloat(product.precio), // Convierte precio a número
        cantidad: parseInt(product.cantidad, 10), // Convierte cantidad a número
        disponibilidad: parseInt(product.disponibilidad, 10), // Convierte disponibilidad a número
        categoria_id: parseInt(product.categoria_id, 10), // Convierte categoría a número
        imagen:`${BACKENDURL}/uploads/${product.imagen}`
      }));
      setProducts(formattedProducts);
    } catch (err) {
      setError("Error al obtener los productos");
    }
  };


  const validateFields = (): string | null => {
    if (!nombre.trim()) return "El campo 'Nombre' es obligatorio.";
    if (!descripcion.trim()) return "El campo 'Descripción' es obligatorio.";
    if (precio <= 0) return "El campo 'Precio' debe ser mayor que cero.";
    if (cantidad < 0) return "El campo 'Cantidad' no puede ser negativo.";
    if (!imagen && !isEditing) return "Debe seleccionar una imagen.";
    return null;
  };

  const handleCreateProduct = async () => {
    const validationError = validateFields();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    const fData = new FormData();
    fData.append("nombre", nombre);
    fData.append("descripcion", descripcion);
    fData.append("precio", precio.toString());
    fData.append("cantidad", cantidad.toString());
    fData.append("disponibilidad", disponibilidad.toString());
    fData.append("categoria_id", categoriaId.toString());
    fData.append("imagen", imagen as File);
    fData.append("contexto", "1");

    try {
      const response = await fetch(`${APIURL}`, {
        method: "POST",
        body: fData,
      });
      if (response.ok) {
        fetchProducts();
        resetForm();
      } else {
        setError("Error al crear el producto.");
      }
    } catch (err) {
      setError("Error al conectar con el servidor.");
    }
    setIsLoading(false);
  };

  const handleUpdateProduct = async () => {
    if (editingProductId === null) return;

    const validationError = validateFields();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    const fData = new FormData();
    fData.append("nombre", nombre);
    fData.append("descripcion", descripcion);
    fData.append("precio", precio.toString());
    fData.append("cantidad", cantidad.toString());
    fData.append("disponibilidad", disponibilidad.toString());
    fData.append("categoria_id", categoriaId.toString());
    if (imagen) fData.append("imagen", imagen);
    fData.append("id", editingProductId.toString());
    fData.append("contexto", "2");

    try {
      const response = await fetch(`${APIURL}`, {
        method: "POST",
        body: fData,
      });
      if (response.ok) {
        fetchProducts();
        resetForm();
        setIsEditing(false);
        setEditingProductId(null);
      } else {
        setError("Error al actualizar el producto.");
      }
    } catch (err) {
      setError("Error al conectar con el servidor.");
    }
    setIsLoading(false);
  };

  const handleEditProduct = (product: Product) => {
    setIsEditing(true);
    setEditingProductId(product.id);
    setNombre(product.nombre);
    setDescripcion(product.descripcion);
    setPrecio(product.precio);
    setCantidad(product.cantidad);
    setCategoriaId(product.categoria_id);
    setDisponibilidad(product.disponibilidad);
  };

  const handleDeleteProduct = async (id: number) => {
    setIsLoading(true);
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
        setError("Error al eliminar el producto.");
      }
    } catch (err) {
      setError("Error al conectar con el servidor.");
    }
    setIsLoading(false);
  };

  const resetForm = () => {
    setNombre("");
    setDescripcion("");
    setPrecio(0);
    setCantidad(0);
    setCategoriaId(1);
    setDisponibilidad(1);
    setImagen(null);
    setError(null);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute top-0 h-screen flex items-center justify-center w-full bg-gray-400 bg-opacity-50 z-50">
          <p className="text-4xl font-semibold text-white">Cargando...</p>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-6 text-center">Gestión de Productos</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
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
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mt-6">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Nombre</th>
            <th className="py-3 px-6 text-left">Descripción</th>
            <th className="py-3 px-6 text-left">Precio</th>
            <th className="py-3 px-6 text-left">Cantidad</th>
            <th className="py-3 px-6 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="py-4 px-6">{product.nombre}</td>
                <td className="py-4 px-6">{product.descripcion}</td>
                <td className="py-4 px-6">${product.precio.toFixed(2)}</td>
                <td className="py-4 px-6">{product.cantidad}</td>
                <td className="py-4 px-6 text-center">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600 transition duration-300"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4">
                No hay productos disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;