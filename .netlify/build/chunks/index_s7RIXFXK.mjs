/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute } from './astro/server_DBI911CA.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_yWJf9fjF.mjs';
import { b as bgWave } from './curve_DJ27Za1p.mjs';
import { $ as $$Layout } from './Layout_D9vFQYE8.mjs';
import { $ as $$Icon } from './HeaderNavigator_Bg8jsp66.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import 'clsx';
/* empty css                         */
import { $ as $$MountainBG } from './MountainBG_Oxmgm5Hz.mjs';

const yeguadaHero = new Proxy({"src":"/_astro/YeguadaHero.BWNR_Qmx.png","width":1368,"height":768,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/assets/images/Yeguada/YeguadaHero.png";
							}
							
							return target[name];
						}
					});

const $$YeguadaHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-screen w-full flex items-center justify-center relative bg-blue-950"> ${renderComponent($$result, "Image", $$Image, { "src": yeguadaHero, "alt": "Yeguada Selecta", "class": "w-full h-full object-cover" })} <!-- onda en la parte inferior  --> <div class="absolute w-full bottom-0"> ${renderComponent($$result, "Image", $$Image, { "src": bgWave, "alt": "Wave", "class": "w-full object-cover -mb-1" })} </div> </div>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Yeguada/YeguadaHero.astro", void 0);

const $$AwardsSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center w-full py-12 "> <!-- Section Title --> <div class="text-center mb-8"> <h2 class="text-xl font-bold uppercase tracking-widest text-gray-800">
Quienes
</h2> <h1 class="text-4xl 2xl:text-6xl font-extrabold text-gray-900">
somos
</h1> </div> <!-- Description --> <div class="w-full max-w-3xl px-4 text-center mb-12"> <p class="text-gray-600 2xl:text-lg">
La Yeguada Selecta nació del profundo amor por los caballos y la admiración por su
      majestuosidad. Cada ejemplar refleja la dedicación y pasión con la que se cuida su linaje,
      en un entorno donde la elegancia y la fuerza de estos nobles animales se preservan con
      esmero. Aquí, tradición y respeto por la naturaleza se combinan para crear un legado
      único.
</p> </div> <!-- Image Section --> <div class="relative w-full  "> <img src="/src/assets/images/Yeguada/AwardsSection.png" alt="Yeguada" class="w-full h-auto  object-cover"> <!-- Awards Section --> <div class="lg:absolute bottom-0 bg-gradient-to-t from-gray-800 to-black  lg:bg-none  right-0 px-6 py-8 text-white text-center flex flex-col items-center"> <h2 class="text-2xl font-bold ">HEMOS SIDO GANADORES</h2> <p class="text-lg font-semibold mb-8">en el primer puesto</p> <div class="flex flex-wrap justify-center  gap-4 lg:space-x-6 mb-6"> <div class="flex flex-col items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "achieve", "class": "text-5xl md:text-7xl text-white" })} <p class="text-sm">
Escalomiño y David de Castro<br>
Ganadores del campeonato de Castilla la Mancha 2023<br>
con montura de 4 años.
</p> </div> <div class="flex flex-col items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "achieve", "class": "text-5xl md:text-7xl text-white" })} <p class="text-sm">
David de Castro y Teresa<br>
Ganadores en el nacional Equus Duri<br>
en la prueba de 5 años.
</p> </div> <div class="flex flex-col items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "achieve", "class": "text-5xl md:text-7xl text-white" })} <p class="text-sm">
David de Castro y Teresa<br>
Ganadores en la feria Ecuestre Balaguer<br>
en la prueba de 6 años.
</p> </div> </div> <!-- Other Awards --> <div class="w-full max-w-4xl border border-white  p-6 rounded-lg text-sm"> <h3 class="text-xl font-semibold mb-4">Otros premios</h3> <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300"> <div class="flex flex-col items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "AchieveMedall", "class": "text-5xl md:text-7xl text-white" })} <p>
Capitán y David de Castro <br> <span class="font-bold">2° clasificado en el campeonato de Castilla la Mancha 2023</span><br> en la prueba de 4 años.</p> </div> <div class="flex flex-col items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "AchieveMedall", "class": "text-5xl md:text-7xl text-white" })} <p>Lior X y David de Castro
<br> <span class="font-bold">3° clasificado en el campeonato de Castilla la Mancha 2023</span><br> en la prueba de 4 años.</p> </div> <div class="flex flex-col items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "AchieveMedall", "class": "text-5xl md:text-7xl text-white" })} <p>
Tommy y Franco Cortés
<br> <span class="font-bold">5° clasificado en el campeonato de Castilla la Mancha 2023</span><br> en la prueba de 4 años.</p> </div> <div class="flex flex-col items-center "> ${renderComponent($$result, "Icon", $$Icon, { "name": "AchieveMedall", "class": "text-5xl md:text-7xl text-white" })} <p>Escalomiño y David de Castro
<br> <span class="font-bold">14° posición en el campeonato de agosto 2023</span></p> </div> </div> </div> </div> </div> </div>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Yeguada/AwardsSection.astro", void 0);

const $$YeguadaServices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative flex flex-col items-center w-full py-12"> <!-- Image Section --> <div class="top-0 left-0 w-full h-full"> <img src="/src/assets/images/Yeguada/Caballos.png" alt="Caballos" class="w-full h-screen lg:h-auto object-cover"> </div> <div class="flex flex-col items-center justify-center w-full lg:w-1/2 lg:left-32 absolute top-0 lg:bottom-0 lg:left-0 "> <!-- Services Section Title --> <div class="text-left w-full max-w-5xl px-4 mb-8"> <h2 class="text-xl font-bold uppercase tracking-widest text-gray-800">
Nuestros
</h2> <h1 class="text-4xl 2xl:text-7xl font-extrabold text-gray-900">servicios</h1> </div> <!-- Services Description --> <div class="w-full px-4 text-left mb-12 "> <p class="text-gray-900 max-w-screen-sm xl:text-xl">
Nos comprometemos a brindar el mejor cuidado a cada caballo, asegurando
        su bienestar y desarrollo. Nuestro equipo utiliza métodos innovadores y
        respetuosos para promover la salud y el rendimiento óptimo.
</p> </div> <!-- Image and Services List --> <div class="flex flex-col md:flex-row items-center w-full max-w-5xl"> <!-- Services List --> <div class="md:w-1/2 w-full md:pl-4"> <ul class="space-y-4 text-gray-800"> <li class="flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check", "class": "w-10 h-10 mr-2" })} <p class="font-bold text-lg">Cría y doma de caballos.</p> </li> <li class="flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check", "class": "w-10 h-10 mr-2" })} <p class="font-bold text-lg">Competiciones.</p> </li> <li class="flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check", "class": "w-10 h-10 mr-2" })} <p class="font-bold text-lg">Venta de contenido genético.</p> </li> </ul> </div> </div> <!-- Call to Action Button --> <div class="w-full max-w-5xl px-4 mt-12"> <a target="_blank"${addAttribute(`https://wa.me/3112105031?text=Podr\xEDa tener mas informaci\xF3n sobre los servicios de la yeguada`, "href")} class="inline-flex text-2xl items-center px-12 py-2 bg-stone-950  text-white font-bold rounded-full shadow-md hover:bg-green-700 transition"> ${renderComponent($$result, "Icon", $$Icon, { "name": "WhatsApp", "class": "w-6 h-6" })}
Más información
</a> </div> </div> </div>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Yeguada/YeguadaServices.astro", void 0);

const mediaItems = [
  { type: "image", src: "src/assets/images/Yeguada/Multimedia/Caballos%201.jpg", id: 0 },
  { type: "image", src: "src/assets/images/Yeguada/Multimedia/Caballos%202.png", id: 1 },
  { type: "image", src: "src/assets/images/Yeguada/Multimedia/Caballos%203.jpg", id: 2 },
  { type: "image", src: "src/assets/images/Yeguada/Multimedia/Caballos%204.jpg", id: 3 },
  {
    type: "video",
    src: "src/assets/images/Yeguada/Multimedia/Yeguada.mp4",
    thumbnail: "src/assets/images/Yeguada/Multimedia/thmnl.png",
    id: 4
  },
  { type: "image", src: "src/assets/images/Yeguada/Multimedia/Caballos%206.png", id: 5 },
  { type: "image", src: "src/assets/images/Yeguada/Multimedia/Caballos%208.png", id: 6 },
  { type: "image", src: "src/assets/images/Yeguada/Multimedia/Caballos%207.png", id: 7 }
];
const Gallery = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(null);
  const openModal = (index) => {
    console.log(index);
    setCurrentMediaIndex(index);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setCurrentMediaIndex(null);
    document.body.style.overflow = "auto";
  };
  const changeMedia = (step) => {
    setCurrentMediaIndex((prevIndex) => {
      let newIndex = prevIndex + step;
      if (newIndex < 0) {
        newIndex = mediaItems.length - 1;
      } else if (newIndex >= mediaItems.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-4 p-5", children: [
    /* @__PURE__ */ jsxs("div", { class: "col-span-2 md:col-span-4 px-4 mb-8 flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsx("h2", { class: "text-xl  font-bold uppercase tracking-widest text-gray-800", children: "CONOCE NUESTRA" }),
      /* @__PURE__ */ jsx("h1", { class: "text-4xl 2xl:text-7xl font-extrabold text-gray-900", children: "Yeguada" })
    ] }),
    Array.from({ length: 4 }, (_, colIndex) => /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: mediaItems.filter((_2, index) => index % 4 === colIndex % 4).map((item, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "relative cursor-pointer overflow-hidden flex items-center justify-center",
        onClick: () => openModal(item.id),
        children: item.type === "video" ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: item.thumbnail,
              alt: "Video Thumbnail",
              className: "h-auto max-w-full rounded-lg object-cover object-center"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl text-yellow-500 hover:text-yellow-600", children: "▷" })
        ] }) : /* @__PURE__ */ jsx(
          "img",
          {
            src: item.src,
            alt: "Image",
            className: "h-full max-w-full rounded-lg object-cover object-center"
          }
        )
      },
      index
    )) }, colIndex)),
    currentMediaIndex !== null && /* @__PURE__ */ jsxs(
      "div",
      {
        id: "mediaModal",
        className: "fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50",
        children: [
          /* @__PURE__ */ jsx("div", { id: "modalContent", className: "max-w-4xl max-h-4xl flex justify-center items-center", children: mediaItems[currentMediaIndex].type === "video" ? /* @__PURE__ */ jsx(
            "video",
            {
              src: mediaItems[currentMediaIndex].src,
              controls: true,
              autoPlay: true,
              className: "max-w-full max-h-full object-contain"
            }
          ) : /* @__PURE__ */ jsx(
            "img",
            {
              src: mediaItems[currentMediaIndex].src,
              alt: "Modal Content",
              className: "max-w-full max-h-full object-contain"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "absolute top-5 right-5 text-4xl text-white cursor-pointer z-50",
              onClick: closeModal,
              children: "×"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "absolute top-1/2 left-5 transform -translate-y-1/2 text-5xl text-white cursor-pointer z-50",
              onClick: () => changeMedia(-1),
              children: "❮"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "absolute top-1/2 right-5 transform -translate-y-1/2 text-5xl text-white cursor-pointer z-50",
              onClick: () => changeMedia(1),
              children: "❯"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "absolute bottom-5 right-1/2 transform translate-x-1/2 text-2xl bg-white text-black px-4 py-1 rounded-full cursor-pointer z-50",
              onClick: closeModal,
              children: "Cerrar"
            }
          )
        ]
      }
    )
  ] });
};

const $$YeguadaContact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero-yeguada grid grid-cols-1 md:grid-cols-2 min-h-screen items-center text-white" data-astro-cid-kgzi5hts> <div class="w-full flex justify-center items-center" data-astro-cid-kgzi5hts> <div class="w-full max-w-screen-sm px-4 mb-8" data-astro-cid-kgzi5hts> <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10290.392291179893!2d-4.902105851030689!3d39.93351691431262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFinca%20Don%20Pablo%2C%204%20-%20Talavera%20La%20Nueva!5e0!3m2!1ses!2sco!4v1730942393098!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-kgzi5hts></iframe> </div> </div> <div data-astro-cid-kgzi5hts> <div class="text-left w-full max-w-5xl px-4 mb-8" data-astro-cid-kgzi5hts> <h2 class="text-xl font-bold uppercase tracking-widest " data-astro-cid-kgzi5hts>
NOS PUEDES
</h2> <h1 class="text-4xl 2xl:text-7xl font-extrabold " data-astro-cid-kgzi5hts>
contáctar
</h1> </div> <div class="w-full max-w-5xl px-4 mb-8" data-astro-cid-kgzi5hts> <p class="font-bold" data-astro-cid-kgzi5hts>Ubicación:</p> <p data-astro-cid-kgzi5hts>Finca Don Pablo, 4 - Talavera La Nueva</p> </div> <div class="w-full max-w-5xl px-4 mb-8" data-astro-cid-kgzi5hts> <p class="font-bold" data-astro-cid-kgzi5hts>Teléfono:</p> <p data-astro-cid-kgzi5hts>697 93 90 31</p> <p data-astro-cid-kgzi5hts>686 48 46 45</p> </div> </div> </section> `;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Yeguada/YeguadaContact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Yeguada Selecta" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "YeguadaHero", $$YeguadaHero, {})} ${renderComponent($$result2, "AwardsSection", $$AwardsSection, {})} ${renderComponent($$result2, "YeguadaServices", $$YeguadaServices, {})} ${renderComponent($$result2, "Gallery", Gallery, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Yeguada/Gallery.jsx", "client:component-export": "default" })} <div class="bg-stone-900"> ${renderComponent($$result2, "YeguadaContact", $$YeguadaContact, {})} </div> <div class="relative h-28 md:h-24 lg:h-16 xl:h-8 z-10"> ${renderComponent($$result2, "MountainBG", $$MountainBG, {})} </div> </main> ` })}`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/yeguada/index.astro", void 0);

const $$file = "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/yeguada/index.astro";
const $$url = "/yeguada";

export { $$Index as default, $$file as file, $$url as url };
