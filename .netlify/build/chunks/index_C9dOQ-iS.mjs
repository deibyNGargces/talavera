/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_DBI911CA.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './HeaderNavigator_BM4-_LDo.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_yWJf9fjF.mjs';
/* empty css                         */
import { jsx } from 'react/jsx-runtime';
import 'react';
import { $ as $$Layout } from './Layout_2BjAbsVJ.mjs';

const girlImage = new Proxy({"src":"/_astro/girl.DDz-CMEi.png","width":442,"height":515,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/public/images/contact/girl.png";
							}
							
							return target[name];
						}
					});

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center p-8"> <div class="min-h-min relative grid grid-cols-1 lg:grid-cols-2"> <div class="flex justify-center"> <div class="text-sky-500 bg-gray-200 h-full p-16 w-auto lg:w-1/2 rounded-2xl flex flex-col items-center justify-center gap-8 text-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "WhatsApp", "class": "text-6xl" })} <p class="font-bold">
¡Conéctate directamente con nosotros en WhatsApp para resolver tus
          consultas al instante!
</p> <button class="text-white z-30 bg-sky-500 hover:bg-blue-900 font-bold py-0.5 px-8 rounded-xl transition-all ease-in-out duration-300 mt-4">Hablar ahora</button> </div> </div> <div class="flex justify-center mt-8 lg:mt-0"> <div class="flex flex-col gap-8 w-full lg:w-1/2"> <h2 class="text-sky-500 text-4xl font-extrabold text-center">
¡Hablemos!
</h2> <form class="flex flex-col z-20"> <input type="text" placeholder="Nombre" class="bg-gray-200 p-2 rounded-xl mt-4"> <input type="number" placeholder="Telefono" class="bg-gray-200 p-2 rounded-xl mt-4"> <textarea placeholder="Mensaje" class="bg-gray-200 p-2 rounded-xl mt-4 h-32 resize-none"></textarea> <button class="text-white bg-sky-500 hover:bg-blue-900 font-bold py-0.5 px-8 rounded-xl transition-all ease-in-out duration-300 mt-4 w-32">Enviar</button> </form> </div> </div> <div class="hidden lg:flex w-full h-[60vh] 2xl:h-[50vh] justify-center items-center absolute -bottom-8 m-auto"> ${renderComponent($$result, "Image", $$Image, { "src": girlImage, "alt": "Wave", "class": "object-cover h-full w-auto z-10" })} </div> </div> </div>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Contact/ContactForm.astro", void 0);

const wave = new Proxy({"src":"/_astro/curvegrey.CFapj1Pd.svg","width":1367,"height":239,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/public/images/curvegrey.svg";
							}
							
							return target[name];
						}
					});

const $$HeroContact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-full hero-contact relative" data-astro-cid-z3etj7ob> <h2 class="text-3xl lg:text-5xl font-light tracking-widest" data-astro-cid-z3etj7ob>
¡TE ESCUCHAMOS!
</h2> <h1 class="text-5xl lg:text-7xl font-extrabold" data-astro-cid-z3etj7ob>Contactanos</h1> ${renderComponent($$result, "Image", $$Image, { "src": wave, "alt": "Wave", "class": "w-full absolute -bottom-1", "data-astro-cid-z3etj7ob": true })} </div> <div class="flex py-16 flex-col justify-center items-center contact-cards" data-astro-cid-z3etj7ob> <div class="flex flex-col p-4 gap-4 lg:flex-row max-w-screen-lg" data-astro-cid-z3etj7ob> <h2 class="text-6xl font-extrabold w-full text-blue-900" data-astro-cid-z3etj7ob>
Conéctate <br data-astro-cid-z3etj7ob> con nosotros
</h2> <p class="text-lg lg:text-2xl" data-astro-cid-z3etj7ob>
¡Estamos aquí para escucharte! Ponte en contacto con nuestro equipo para
      resolver cualquier duda, consulta o sugerencia que tengas. <br data-astro-cid-z3etj7ob> <span class="font-bold" data-astro-cid-z3etj7ob> ¡Esperamos conocerte pronto! </span> </p> </div> <div class="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 lg:px-0 py-8 lg:py-16" data-astro-cid-z3etj7ob> <div class="bg-blue-900 p-8 flex flex-col items-center justify-start text-white" data-astro-cid-z3etj7ob> ${renderComponent($$result, "Icon", $$Icon, { "name": "Email", "class": "text-6xl", "data-astro-cid-z3etj7ob": true })} <p class="font-bold" data-astro-cid-z3etj7ob>Correo</p> <a href="mailto:correo@talaveraselecta.com" data-astro-cid-z3etj7ob>correo@talaveraselecta.com</a> </div> <div class="bg-blue-900 p-8 flex flex-col items-center justify-start text-white" data-astro-cid-z3etj7ob> ${renderComponent($$result, "Icon", $$Icon, { "name": "Phone", "class": "text-6xl", "data-astro-cid-z3etj7ob": true })} <p class="font-bold" data-astro-cid-z3etj7ob>Teléfono</p> <a href="tel:641318605" data-astro-cid-z3etj7ob>641 31 86 05</a> <a href="tel:663798559" data-astro-cid-z3etj7ob>663 79 85 59</a> <a href="tel:686484645" data-astro-cid-z3etj7ob>686 48 46 45</a> </div> <div class="bg-blue-900 p-8 flex flex-col items-center justify-start text-white" data-astro-cid-z3etj7ob> ${renderComponent($$result, "Icon", $$Icon, { "name": "Locate", "class": "text-6xl", "data-astro-cid-z3etj7ob": true })} <p class="font-bold" data-astro-cid-z3etj7ob>Almacén</p> <p class="text-center" data-astro-cid-z3etj7ob>
Avenida Isaac Newton 7, Getafe – Madrid CP 28906
</p> </div> <div class="bg-blue-900 p-8 flex flex-col items-center justify-start text-white" data-astro-cid-z3etj7ob> ${renderComponent($$result, "Icon", $$Icon, { "name": "Locate", "class": "text-6xl", "data-astro-cid-z3etj7ob": true })} <p class="font-bold" data-astro-cid-z3etj7ob>Fábrica</p> <p class="text-center" data-astro-cid-z3etj7ob>
Calle Goicoechea 15, Plasencia. Cáceres CP 10600. Extremadura
</p> <a href="tel:622703872" class="flex gap-2" data-astro-cid-z3etj7ob> ${renderComponent($$result, "Icon", $$Icon, { "name": "Phone", "class": "text-xl", "data-astro-cid-z3etj7ob": true })} 622 70 38 72</a> </div> </div> </div> `;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Contact/HeroContact.astro", void 0);

const Maps = ({ urlMap }) => {
  return /* @__PURE__ */ jsx("div", { className: "border-8 border-white w-full", children: /* @__PURE__ */ jsx(
    "iframe",
    {
      src: urlMap,
      style: { border: 0 },
      allowfullscreen: "",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",
      loading: "lazy",
      className: "w-full h-56",
      referrerpolicy: "no-referrer-when-downgrade"
    }
  ) });
};

const $$Location = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center py-8 px-2 bg-sky-500 z-30 gap-8"> <div> <p class="text-center z-50 text-4xl text-white">
Puedes <span class="block font-bold">encontrarnos en...</span> </p> </div> <div class="max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6"> <div> ${renderComponent($$result, "Maps", Maps, { "urlMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.4282596331655!2d-3.6993470112131215!3d40.288449089861295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4221a858ee11e1%3A0x7f8b18a692d9ba3f!2sAv.%20Isaac%20Newton%2C%207%2C%2028906%20Getafe%2C%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sco!4v1718756253499!5m2!1ses-419!2sco" })} <div class="text-center text-white text-lg mt-3"> <p class="font-bold">Almacén</p> <p>Avenida Isaac Newton 7,</p> <p>Getafe – Madrid CP 28906</p> </div> </div> <div> ${renderComponent($$result, "Maps", Maps, { "urlMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.3168953971003!2d-6.124047959425686!3d40.00136854264932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3e176d83c47597%3A0x24cec5c5ed9b6e00!2sC.%20Goicoechea%2C%2015%2C%2010600%20Plasencia%2C%20C%C3%A1ceres%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sco!4v1718756349635!5m2!1ses-419!2sco" })} <div class="text-center text-white text-lg mt-3"> <p class="font-bold">Fábrica</p> <p>Calle Goicoechea 15, Plasencia.</p> <p>Cáceres CP 10600. Extremadura</p> </div> </div> </div> </div>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Contact/Location.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contactanos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative"> ${renderComponent($$result2, "HeroContact", $$HeroContact, {})} ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} ${renderComponent($$result2, "Location", $$Location, {})} </main> ` })}`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/contact/index.astro", void 0);

const $$file = "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/contact/index.astro";
const $$url = "/contact";

export { $$Index as default, $$file as file, $$url as url };
