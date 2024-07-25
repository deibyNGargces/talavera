/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, d as createAstro } from './astro/server_DBI911CA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_2BjAbsVJ.mjs';
import { $ as $$SlideComponent } from './SlideComponent_dQaBWU7h.mjs';
import { $ as $$MountainBG } from './MountainBG_Oxmgm5Hz.mjs';
/* empty css                         */
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_yWJf9fjF.mjs';
import { q as queso, c as carnes, b as arepa, d as dulces, $ as $$MountainBGWhite, a as $$Marcas, e as $$DistribuidorCompnent } from './DistribuidorCompnent_TllPeQ9k.mjs';
import { b as bgWave } from './curve_DJ27Za1p.mjs';
import { $ as $$Icon } from './HeaderNavigator_BM4-_LDo.mjs';

const $$SaborComponent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen overflow-x-hidden cow-bg flex items-center justify-center lg:justify-end relative" data-astro-cid-byckxjb6> <div class="p-4 right-fadeIn lg:w-1/2 lg:pl-12 2xl:pl-20 lg:pr-16 flex flex-col gap-5" data-astro-cid-byckxjb6> <h1 class="text-blue-900 text-4xl lg:text-6xl font-bold" data-astro-cid-byckxjb6>
Descubre <br data-astro-cid-byckxjb6>nuestro sabor
</h1> <p class="text-2xl max-w-screen-sm" data-astro-cid-byckxjb6>
Desde nuestros comienzos, nos dedicamos a ofrecerte una experiencia única,
      donde cada producto te invita a descubrir nuevos sabores y sumergirte en
      la autenticidad de la tradición.
</p> <a href="/contact" class="text-white bg-blue-900 hover:bg-blue-950 px-12 py-2 text-center md:w-44 rounded-full font-bold" data-astro-cid-byckxjb6>Conócenos</a> </div> ${renderComponent($$result, "MountainBG", $$MountainBG, { "data-astro-cid-byckxjb6": true })} </section> `;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Home/SaborComponent.astro", void 0);

const tarrina = new Proxy({"src":"/_astro/tarrina.6-draSX0.png","width":222,"height":217,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/assets/images/home/products/tarrina.png";
							}
							
							return target[name];
						}
					});

const $$HomeProducts = createComponent(($$result, $$props, $$slots) => {
  const prodcutsArray = [
    {
      image: queso,
      title: "Quesos",
      path: "/products/quesos"
    },
    {
      image: carnes,
      title: "Carnicos",
      path: "/products/carnicos"
    },
    {
      image: arepa,
      title: "Arepas",
      path: "/products/arepas"
    },
    {
      image: tarrina,
      title: "Tarrinas",
      path: "/products/tarrinas"
    },
    {
      image: dulces,
      title: "Dulces",
      path: "/products/dulces"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 lg:py-24 bg-[#f0f0f0] relative"> <div class="autoShow flex flex-col items-center justify-center mb-3"> <h2 class="text-2xl">Utilizamos lo mejor del campo</h2> <h3 class="text-4xl lg:text-6xl font-bold">en nuestros productos</h3> </div> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-36 max-w-screen-xl mx-auto"> ${prodcutsArray.map((product, index) => renderTemplate`<div class="flex items-center justify-center autoShow"> <div class="group group-hover:shadow h-96 group-hover:border w-64 group-hover:rounded-2xl relative overflow-hidden transition-all duration-300 ease-in-out"> <div> ${renderComponent($$result, "Image", $$Image, { "src": product.image, "alt": "Arepa", "class": "w-full max-h-full object-cover absolute z-10 p-5 bottom-[30%]" })} <div class="p-4 bg-white absolute w-full h-1/2 group-hover:h-full group-hover:bg-blue-900 transition-all duration-300 ease-in-out rounded-2xl bottom-0 flex flex-col justify-end items-center pb-12"> <h3 class="text-2xl font-bold group-hover:text-white"> ${product.title} </h3> <a${addAttribute(`${product.path}`, "href")} class="border py-1 px-6 text-sm mt-2 rounded-full group-hover:border-white group-hover:text-white">
Ver más
</a> </div> </div> </div> </div>`)} </div> ${renderComponent($$result, "MountainBGWhite", $$MountainBGWhite, {})} </section>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Home/HomeProducts.astro", void 0);

const $$MarcasComponent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto p-8"> <div class="flex flex-col gap-10 lg:flex-row items-center text-center xl:text-left justify-around max-w-screen-xl mx-auto overflow-x-hidden"> <div class="mb-6"> <h2 class="text-2xl font-semibold">Disfruta de nuestras</h2> <h1 class="text-4xl lg:text-6xl font-bold">marcas</h1> </div> ${renderComponent($$result, "Marcas", $$Marcas, {})} </div> <div class="flavor"></div> </section>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Home/MarcasComponent.astro", void 0);

const foodImage = new Proxy({"src":"/_astro/food.DWLH5TBX.png","width":724,"height":633,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/assets/images/home/food.png";
							}
							
							return target[name];
						}
					});

const $$FoodComponent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="min-h-96 overflow-y-hidden w-full relative bg-[#c2d751] flex items-center"> <div class="absolute w-full top-0"> ${renderComponent($$result, "Image", $$Image, { "src": bgWave, "alt": "Wave", "class": "transform rotate-180 w-full object-cover -mt-1" })} </div> <div class="absolute w-screen z-10 lg:w-1/2 right-0 flex flex-col items-center"> <div class="max-w-screen-sm flex flex-col items-center justify-center"> <h1 class="text-4xl md:text-5xl font-bold text-center text-white">
Sabor & Tradición
</h1> <p class="text-center md:text-xl text-white">
Sumérgete en un viaje lleno de sabores con <br> nuestras recetas.
</p> <a href="#" class="bg-green-950 hover:bg-opacity-45 py-1 max-w-max px-3 rounded-full text-white text-sm font-bold mt-4 inline-block bg-opacity-50">¡Ver todas las recetas!</a> </div> </div> <div class="container"> <div class="col-lg-6"> <div class="relative -left-1/2 lg:left-0 z-0 -bottom-20 lg:bottom-0"> ${renderComponent($$result, "Image", $$Image, { "src": foodImage, "alt": "Food Image " })} </div> </div> </div> <div class="absolute w-full bottom-0"> ${renderComponent($$result, "Image", $$Image, { "src": bgWave, "alt": "Wave", "class": "w-full object-cover -mb-1" })} </div> </section>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Home/FoodComponent.astro", void 0);

const $$Astro$1 = createAstro();
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { title, topic, color, image, linkTo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="h-full text-center w-64 flex flex-col gap-2 justify-center items-center p-8"> <!-- Imagen redonda con un placeholder ocupando la mitad de la tarjeta vertical --> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "Blog Image ", "width": "200", "height": "200", "class": "rounded-full h-36 w-36 mx-auto object-cover" })} <p class="text-sm text-slate-400 font font-semibold">${topic}</p> <p class="text-lg font-bold">${title}</p> <a${addAttribute(linkTo, "href")}${addAttribute(`py-1.5 px-8 w-36 rounded-full text-white text-sm hover:shadow-lg hover:font-bold hover:scale-105 transition-transform duration-300 ease-in-out`, "class")}${addAttribute(`background-color: ${color} ;`, "style")}>Ver más...
</a> </div>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Home/PostCard.astro", void 0);

const $$Astro = createAstro();
const $$BlogHome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogHome;
  let allPost = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/posts/actualidad/index.md": () => import('./index_DUU_gCo9.mjs'),"../../pages/posts/actualidad/post2.md": () => import('./post2_Cv3l2akI.mjs'),"../../pages/posts/recetas/atollado.md": () => import('./atollado_Is36rawe.mjs'),"../../pages/posts/recetas/index.md": () => import('./index_CqSYUaWV.mjs')}), () => "../../pages/posts/**/*.md");
  allPost = allPost.sort(
    (a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf()
  );
  return renderTemplate`${maybeRenderHead()}<section class="bg-white flex flex-col items-center gap-8"> <div class="text-center max-w-screen-lg autoShow"> <h1 class="text-4xl md:text-5xl font-bold text-center">Nuestro Blog</h1> <p class="text-center md:text-xl px-4">
Descubre el sabor y la autenticidad de nuestra cocina a través de nuestro
      blog, donde compartimos recetas, historias culinarias y más.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="w-full h-full flex items-center justify-center left-fadeIn"> ${renderComponent($$result, "PostCard", $$PostCard, { "title": allPost[0].frontmatter.title, "topic": allPost[0].frontmatter.category, "color": "#FFC62B", "image": allPost[0].frontmatter.image, "linkTo": allPost[0].url })} </div> <div class="w-full h-full flex items-center justify-center smborder-x-2 autoShow"> ${renderComponent($$result, "PostCard", $$PostCard, { "title": allPost[1].frontmatter.title, "topic": allPost[1].frontmatter.category, "color": "#272967", "image": allPost[1].frontmatter.image, "linkTo": allPost[1].url })} </div> <div class="w-full h-full flex items-center justify-center right-fadeIn"> ${renderComponent($$result, "PostCard", $$PostCard, { "title": allPost[2].frontmatter.title, "topic": allPost[2].frontmatter.category, "color": "#C00018", "image": allPost[2].frontmatter.image, "linkTo": allPost[2].url })} </div> </div> </section>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Home/BlogHome.astro", void 0);

const coche = new Proxy({"src":"/_astro/Coche.hFjpeYFx.png","width":665,"height":305,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/assets/images/home/Coche.png";
							}
							
							return target[name];
						}
					});

const $$VanComponent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#599DDF] pt-16"> <div class="grid grid-cols-1 md:grid-cols-2 w-full h-full"> <div class="left-fadeIn order-2 md:order-1 text-center md:text-left text-white flex flex-col justify-center items-center md:items-start px-4 lg:px-24 h-full"> <h2 class="text-center md:text-left text-3xl font-bold">
¿Necesitas un lugar seguro para tu coche?
</h2> <p class="text-2xl my-5">
Contamos con plazas de garaje disponibles en Avenida Isaac Newton 7,
        Getafe – Madrid CP 28906
</p> <a href="#" class="bg-sky-600 max-w-max flex py-2 px-8 rounded-full font-bold mt-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "WhatsApp", "class": "w-6 h-6" })}
Alquila tu plaza ahora</a> </div> <div class="right-fadeIn order-1 md:order-2 w-full flex items-center justify-end fadeIn"> ${renderComponent($$result, "Image", $$Image, { "src": coche, "alt": "Coche", "class": "h-auto w-full object-cover" })} </div> </div> <div class="h-40 relative"> ${renderComponent($$result, "MountainBG", $$MountainBG, {})} </div> </div>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Home/VanComponent.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Talavera store" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "SlideComponent", $$SlideComponent, {})} ${renderComponent($$result2, "SaborComponent", $$SaborComponent, {})} ${renderComponent($$result2, "HomeProducts", $$HomeProducts, {})} ${renderComponent($$result2, "MarcasComponent", $$MarcasComponent, {})} ${renderComponent($$result2, "FoodComponent", $$FoodComponent, {})} ${renderComponent($$result2, "BlogHome", $$BlogHome, {})} ${renderComponent($$result2, "DistribuidorCompnent", $$DistribuidorCompnent, {})} ${renderComponent($$result2, "VanComponent", $$VanComponent, {})} </main> ` })}`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/index.astro", void 0);

const $$file = "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
