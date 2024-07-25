/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, d as createAstro } from './astro/server_DBI911CA.mjs';
import 'kleur/colors';
import { $ as $$SlideComponent } from './SlideComponent_dQaBWU7h.mjs';
import { $ as $$Layout } from './Layout_2BjAbsVJ.mjs';
import { $ as $$Icon } from './HeaderNavigator_BM4-_LDo.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { P as ProductDescription } from './ProductDescription_Dyjo4t1P.mjs';
import { useState, useEffect } from 'react';
import { $ as $$MountainBG } from './MountainBG_Oxmgm5Hz.mjs';
/* empty css                             */

const Modal = ({ idProduct, token, onClose }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProduct(idProduct);
  }, [idProduct]);
  const getProduct = async (id2) => {
    const productData = await fetch(`https://api.chec.io/v1/products/${id2}`, {
      headers: {
        "X-Authorization": token
      }
    }).then((res) => res.json());
    setProduct(productData);
  };
  const { image, name, id, description } = product;
  const handleInformation = () => {
    const phoneNumber = "3112105031";
    const message = `*Me gustaria optener mas información*

 del producto: ${name}
}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}?media=${image.url}`;
    window.open(whatsappUrl, "_blank");
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white max-w-screen-xl w-full rounded-lg shadow-lg p-8 py-12 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-end p-2 absolute top-0 right-0", children: /* @__PURE__ */ jsx("button", { onClick: onClose, className: "text-3xl", children: "⨯" }) }),
    /* @__PURE__ */ jsxs("div", { class: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: image?.url,
          alt: name,
          height: 600,
          width: 900,
          class: "w-auto object-contain",
          id: "product-image"
        }
      ),
      /* @__PURE__ */ jsxs("div", { class: "flex flex-col justify-between gap-6 max-h-max", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              class: "text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900",
              id: "product-name",
              children: name
            }
          ),
          /* @__PURE__ */ jsx("div", { id: "product-description", children: /* @__PURE__ */ jsx(ProductDescription, { description, "client:load": true }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row justify-end gap-8 ", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              class: "border cursor-pointer  lg:max-w-max rounded-full px-8 py-2 text-2xl font-bold hover:bg-blue-900 bg-sky-500 text-white transition-all duration-300 ease-in-out",
              onClick: onClose,
              children: "Cerrar"
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleInformation,
              class: "border cursor-pointer gap-2 flex items-center lg:max-w-max rounded-full px-8 py-2 text-2xl font-bold bg-blue-900 hover:bg-sky-500 text-white transition-all duration-300 ease-in-out",
              children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 448 512",
                    className: "w-6 h-6 fill-current",
                    children: /* @__PURE__ */ jsx("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" })
                  }
                ),
                "Más información"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
};

const token = "sk_test_5788943db9c98f5c98fe2271872dac807b41c5f7e640d";
const ProductsSection = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [idProduct, setIdProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setLoading(true);
    getproducts(token);
  }, [category]);
  const getproducts = async (token2) => {
    const response = await fetch(
      `https://api.chec.io/v1/products?category_slug=${category}`,
      {
        method: "GET",
        headers: {
          "X-Authorization": token2
        }
      }
    );
    const data = await response.json();
    setProducts(data.data);
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
  return /* @__PURE__ */ jsxs("div", { className: "max-w-screen-xl p-2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  ", children: [
    loading ? /* @__PURE__ */ jsx("div", { className: "col-span-full h-full flex items-center justify-center  ", children: /* @__PURE__ */ jsx("p", { className: "text-2xl lg:text-4xl text-center", children: "Cargando productos..." }) }) : products?.length === 0 || !products ? /* @__PURE__ */ jsx("div", { className: "col-span-full h-full flex items-center justify-center ", children: /* @__PURE__ */ jsx("p", { className: "text-2xl lg:text-4xl text-center", children: "No hay productos dentro de esta categoria" }) }) : products.map((product) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "border flex flex-col justify-end items-center p-4",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: product.image?.url,
              alt: "Quesos",
              height: 600,
              width: 900,
              className: "h-auto w-60 object-cover"
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg text-center mb-2 font-bold", children: product.name }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleOpen(product.id),
                className: "border rounded-full px-8 py-1 text-sm font-bold hover:bg-sky-500 hover:text-white transition-all duration-300 ease-in-out",
                children: "Ver más"
              }
            )
          ] })
        ]
      },
      product.id
    )),
    showModal && /* @__PURE__ */ jsx(
      "div",
      {
        className: "h-screen flex items-center justify-center p-4",
        style: {
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "fixed",
          zIndex: 1e3,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        children: /* @__PURE__ */ jsx(Modal, { idProduct, token, onClose: handleClose })
      }
    )
  ] });
};

const $$Astro$1 = createAstro();
const $$ProductsComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductsComponent;
  const { product } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen bg-white pt-20 mb-20"> <div class="max-w-screen-xl mx-auto"> <div> <p class="text-2xl lg:text-4xl text-center">Disfruta cada uno de</p> <p class="text-4xl lg:text-6xl font-bold text-center">
nuestros productos
</p> </div> <div class="flex flex-wrap justify-center lg:gap-8 text-3xl md:text-5xl lg:text-7xl"> <a href="/products/quesos"${addAttribute(` flex flex-col items-center justify-center  hover:text-sky-500 transition-all duration-300 ease-in-out py-10 px-5
        ${product === "quesos" ? "text-sky-500" : "text-gray-300"}
        `, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "Queso" })} <span class="text-lg font-bold">Quesos</span> </a> <!-- Carnicos --> <a href="/products/carnicos"${addAttribute(` flex flex-col items-center justify-center  hover:text-sky-500 transition-all duration-300 ease-in-out py-10 px-5
        ${product === "carnicos" ? "text-sky-500" : "text-gray-300"}
        `, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "Carnico" })} <span class="text-lg font-bold">Cárnicos</span> </a> <!-- Arepas --> <a href="/products/arepas"${addAttribute(` flex flex-col items-center justify-center  hover:text-sky-500 transition-all duration-300 ease-in-out py-10 px-5
            ${product === "arepas" ? "text-sky-500" : "text-gray-300"}
            `, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "Arepa" })} <span class="text-lg font-bold">Arepas</span> </a> <!-- Tarrinas --> <a href="/products/tarrinas"${addAttribute(` flex flex-col items-center justify-center  hover:text-sky-500 transition-all duration-300 ease-in-out py-10 px-5
            ${product === "tarrinas" ? "text-sky-500" : "text-gray-300"}
            `, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "Tarrina" })} <span class="text-lg font-bold">Tarrinas</span> </a> <!-- Dulces --> <a href="/products/dulces"${addAttribute(` flex flex-col items-center justify-center  hover:text-sky-500 transition-all duration-300 ease-in-out py-10 px-5
            ${product === "dulces" ? "text-sky-500" : "text-gray-300"}
            `, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "Dulce" })} <span class="text-lg font-bold">Dulces</span> </a> </div> </div> ${renderComponent($$result, "ProductsSection", ProductsSection, { "category": product, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Products/ProductsSection", "client:component-export": "default" })} <div id="showModal"> <!-- <ModalComponent producto={product} /> --> </div> <!-- <Productos category={product} /> --> </section>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Products/ProductsComponent.astro", void 0);

const $$BottomBannerProducts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="h-screen bg-white banner-products flex flex-col md:justify-between relative" data-astro-cid-rafau4tr> <div class="w-full text-center md:mb-20 p-4" data-astro-cid-rafau4tr> <h2 class="text-3xl lg:text-5xl" data-astro-cid-rafau4tr>Los productos</h2> <h1 class="text-3xl lg:text-5xl font font-extrabold" data-astro-cid-rafau4tr>
indispensables para tu mesa
</h1> </div> <div class="max-w-screen-lg w-full md:h-[80vh] lg:h-[60vh] mx-auto gap-4 p-8 grid grid-cols-4 md:grid-cols-2 items-center justify-center" data-astro-cid-rafau4tr> <div class="flex md:justify-start" data-astro-cid-rafau4tr> <div class="flex flex-col items-center" data-astro-cid-rafau4tr> ${renderComponent($$result, "Icon", $$Icon, { "name": "Variedad", "class": "text-4xl md:text-7xl", "data-astro-cid-rafau4tr": true })} <p class="text-center min-w-max text-sm md:text-xl font-bold" data-astro-cid-rafau4tr>
Variedad de <br data-astro-cid-rafau4tr> productos
</p> </div> </div> <div class="flex flex-col md:items-end" data-astro-cid-rafau4tr> <div class="flex flex-col items-center" data-astro-cid-rafau4tr> ${renderComponent($$result, "Icon", $$Icon, { "name": "Frescura", "class": "text-4xl md:text-7xl", "data-astro-cid-rafau4tr": true })} <p class="text-center text-sm md:text-xl font-bold" data-astro-cid-rafau4tr>
Productos <br data-astro-cid-rafau4tr> frescos
</p> </div> </div> <div class="flex md:justify-start" data-astro-cid-rafau4tr> <div class="flex flex-col items-center" data-astro-cid-rafau4tr> ${renderComponent($$result, "Icon", $$Icon, { "name": "Calidad", "class": "text-4xl md:text-7xl", "data-astro-cid-rafau4tr": true })} <p class="text-center text-sm md:text-xl font-bold" data-astro-cid-rafau4tr>
Lideres en <br data-astro-cid-rafau4tr> calidad
</p> </div> </div> <div class="flex flex-col md:items-end justify-end md:justify-center h-full" data-astro-cid-rafau4tr> <div class="flex flex-col justify-end items-center" data-astro-cid-rafau4tr> ${renderComponent($$result, "Icon", $$Icon, { "name": "Sabor", "class": "text-xl md:text-3xl", "data-astro-cid-rafau4tr": true })} <p class="text-center text-sm md:text-xl font-bold" data-astro-cid-rafau4tr>
Autenticos <br data-astro-cid-rafau4tr> sabores
</p> </div> </div> </div> <div class="" data-astro-cid-rafau4tr> ${renderComponent($$result, "MountainBG", $$MountainBG, { "data-astro-cid-rafau4tr": true })} </div> </section> `;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Products/BottomBannerProducts.astro", void 0);

const $$Astro = createAstro();
function getStaticPaths() {
  return [
    { params: { product: "quesos" } },
    { params: { product: "carnicos" } },
    { params: { product: "arepas" } },
    { params: { product: "tarrinas" } },
    { params: { product: "dulces" } }
  ];
}
const $$product = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$product;
  const { product } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Productos Selectos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "SlideComponent", $$SlideComponent, {})} ${renderComponent($$result2, "ProductsComponent", $$ProductsComponent, { "product": product })} ${renderComponent($$result2, "BottomBannerProducts", $$BottomBannerProducts, {})} </main> ` })}`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/products/[product].astro", void 0);

const $$file = "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/products/[product].astro";
const $$url = "/products/[product]";

export { $$product as default, $$file as file, getStaticPaths, $$url as url };
