import { useEffect } from "react";

const ProductDescription = ({ description = "" }) => {
  useEffect(() => {
    const textDescription = document.getElementById("textDescription");
    textDescription.innerHTML = description;
    //agregar clases de estilos
    textDescription.classList.add(
      "text-justify",
      "text-gray-700",
      "text-lg",
      "mt-4"
    );
  }, [description]);

  return <div id="textDescription"></div>;
};

export default ProductDescription;
