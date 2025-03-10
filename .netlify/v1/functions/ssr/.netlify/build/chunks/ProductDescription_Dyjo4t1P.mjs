import { jsx } from 'react/jsx-runtime';
import { useEffect } from 'react';

const ProductDescription = ({ description = "" }) => {
  useEffect(() => {
    const textDescription = document.getElementById("textDescription");
    textDescription.innerHTML = description;
    textDescription.classList.add(
      "text-justify",
      "text-gray-700",
      "text-lg",
      "mt-4"
    );
  }, [description]);
  return /* @__PURE__ */ jsx("div", { id: "textDescription" });
};

export { ProductDescription as P };
