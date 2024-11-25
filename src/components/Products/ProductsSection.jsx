import Modal from "@components/Utilities/Modal";
import { useEffect, useState } from "react";
const token = "sk_test_5788943db9c98f5c98fe2271872dac807b41c5f7e640d";
import vacavideo from "../../assets/images/ordeno.mp4";

import { BACKENDURL } from "@/api/api";
const APIURL = `${BACKENDURL}`;

const ProductsSection = ({ category }) => {
 const [products, setProducts] = useState([]);
 const [idProduct, setIdProduct] = useState(null);
 const [loading, setLoading] = useState(true);
 const [showModal, setShowModal] = useState(false);
 const [categoryId, setCategoryId] = useState(null);

 useEffect(() => {
  setLoading(true);
  getCategories();

  // getproducts(token);
 }, [category]);

 useEffect(() => {
  if (categoryId) {
   getproducts(token);
  }
 }, [categoryId]);

 const getCategories = async () => {
  let categorias;
  await fetch(`${APIURL}/category.php?action=categories`, {
   method: "GET",
   headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer tu_token_aqui",
   },
  })
   .then((response) => response.json())
   .then((data) => (categorias = data))
   .catch((error) => console.log("error", error));

  console.log(category, categorias);
  // buscar que el nombre de la categorias, coincida con el nombre de la categoria que se recibe por props pasando todo a minusculas
  const categoryFound = categorias.find(
   (cat) => cat.nombre.toLowerCase() === category.toLowerCase()
  );
  if (categoryFound) {
   setCategoryId(categoryFound.id);
   getproducts(token);
  }

  console.log(categoryFound);
 };

 const getproducts = async (token) => {
  setLoading(true);
  await fetch(
   `${APIURL}/index.php?action=products_by_category&categoria_id=${categoryId}`,
   {
    method: "GET",
    headers: {
     "Content-Type": "application/json",
     Authorization: "Bearer tu_token_aqui",
    },
   }
  )
   .then((response) => response.json())
   .then((data) => setProducts(data))
   .catch((error) => console.log("error", error));

  // const data = await response.json();
  // setProducts(data.data);
  setLoading(false);
 };

 const handleOpen = (id) => {
  setIdProduct(id);
  setShowModal(true);
 };
 const handleClose = () => {
  setShowModal(false);
  setIdProduct(null);
 };

 console.log(products);

 return (
  <div className="max-w-screen-xl p-2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  ">
   {loading ? (
    <div className="col-span-full h-full flex items-center justify-center  ">
     <video src={vacavideo} autoPlay loop muted className="w-20 h-20" />

     <p className="text-2xl lg:text-4xl text-center">Cargando productos...</p>
    </div>
   ) : products?.length === 0 || !products ? (
    <div className="col-span-full h-full flex items-center justify-center ">
     <p className="text-2xl lg:text-4xl text-center">
      No hay productos dentro de esta categoria
     </p>
    </div>
   ) : products.error ? (
    <div className="col-span-full h-full flex items-center justify-center ">
     <p className="text-2xl lg:text-4xl text-center">{products.message}</p>
    </div>
   ) : (
    products?.map((product) => (
     <div
      className="border flex flex-col justify-end items-center p-4"
      key={product.id}
     >
      <img
       src={product.imagen_url}
       alt="Quesos"
       height={600}
       width={900}
       className="h-auto w-60 object-cover"
      />
      <div>
       <p className="text-lg text-center mb-2 font-bold">{product.nombre}</p>
       <button
        onClick={() => handleOpen(product.id)}
        className="border rounded-full px-8 py-1 text-sm font-bold hover:bg-sky-500 hover:text-white transition-all duration-300 ease-in-out"
       >
        Ver más
       </button>
       {/* <a
                href={`/product/${product.id}`}
                className="border rounded-full px-8 py-1 text-sm font-bold hover:bg-sky-500 hover:text-white transition-all duration-300 ease-in-out"
              >
                Ver más
              </a> */}
      </div>
     </div>
    ))
   )}
   {showModal && (
    <div
     className="h-screen flex items-center justify-center p-4"
     style={{
      backgroundColor: "rgba(0,0,0,0.5)",
      position: "fixed",
      zIndex: 1000,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
     }}
    >
     <Modal idProduct={idProduct} token={token} onClose={handleClose} />
    </div>
   )}
  </div>
 );
};

export default ProductsSection;
