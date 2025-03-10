/* empty css                                    */
import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_I8LQRovA.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_z8WVvDuA.mjs';
import { $ as $$Icon } from '../../chunks/HeaderNavigator_vTbHyWmS.mjs';
import { P as ProductDescription } from '../../chunks/ProductDescription_Dyjo4t1P.mjs';
import { $ as $$Layout } from '../../chunks/Layout_E-KIyP3L.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ProductView = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductView;
  const { product } = Astro2.props;
  const { id: idProduct, name, description, image } = product;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 gap-6 md:grid-cols-2 pb-16"> ${renderComponent($$result, "Image", $$Image, { "src": image?.url, "alt": name, "height": 600, "width": 900, "class": "h-[50vh] max-h-[60vh] w-auto object-contain", "id": "product-image" })} <div class="flex flex-col gap-6"> <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900" id="product-name"> ${name} </h2> <div id="product-description"> ${renderComponent($$result, "ProductDescription", ProductDescription, { "description": description, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/deiby/Documents/devs/talavera/talavera-client/src/components/Products/ProductDescription", "client:component-export": "default" })} </div> <button id="share" class="border cursor-pointer gap-2 flex items-center max-w-max rounded-full px-8 py-2 text-2xl font-bold bg-blue-900 hover:bg-sky-500 text-white transition-all duration-300 ease-in-out"> ${renderComponent($$result, "Icon", $$Icon, { "name": "WhatsApp", "class": "text-4xl" })}
Más información
</button> </div> </div> `;
}, "C:/Users/deiby/Documents/devs/talavera/talavera-client/src/components/Products/ProductView.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
async function getStaticPaths() {
  return [
    { params: { category: "quesos", idProduct: void 0 } },
    { params: { category: "carnicos", idProduct: void 0 } },
    { params: { category: "arepas", idProduct: void 0 } },
    { params: { category: "tarrinas", idProduct: void 0 } },
    { params: { category: "dulces", idProduct: void 0 } }
  ];
}
const $$idProduct = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$idProduct;
  const { category, idProduct } = Astro2.params;
  const token = "sk_test_5788943db9c98f5c98fe2271872dac807b41c5f7e640d";
  const product = await fetch(`https://api.chec.io/v1/products/${idProduct}`, {
    headers: {
      "X-Authorization": token
    }
  }).then((res) => res.json());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "producto selecto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-20 md:pt-32 px-8 flex flex-col items-center justify-center"> <div class="max-w-screen-xl mx-auto w-full"> <button id="back" class="hover:text-gray-700 text-2xl hover:scale-105 transform transition-all duration-300 ease-in-out flex items-center mt-20 md:mt-0 gap-3"> <span class="">❮</span>
Volver</button> </div> <div class="w-full max-w-screen-xl mx-auto"> ${renderComponent($$result2, "ProductView", $$ProductView, { "product": product })} </div> </section> ` })} `;
}, "C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/product/[idProduct].astro", void 0);
const $$file = "C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/product/[idProduct].astro";
const $$url = "/product/[idProduct]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$idProduct,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
