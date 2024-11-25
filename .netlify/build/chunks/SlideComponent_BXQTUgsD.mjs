import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_DBI911CA.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_yWJf9fjF.mjs';
import { b as bgWave } from './curve_DJ27Za1p.mjs';
import { $ as $$Icon } from './HeaderNavigator_Bg8jsp66.mjs';
/* empty css                         */

const slide1 = new Proxy({"src":"/_astro/slide1.CXVnketf.jpg","width":1366,"height":768,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/assets/images/home/carrusel/slide1.jpg";
							}
							
							return target[name];
						}
					});

const slideMin1 = new Proxy({"src":"/_astro/minslide1.BtPYg3q7.png","width":413,"height":916,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/assets/images/home/carrusel/minslide1.png";
							}
							
							return target[name];
						}
					});

const $$SlideComponent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-screen w-full relative" data-astro-cid-offhdtxu> <div class="w-full h-screen carrusel" data-astro-cid-offhdtxu> <div class="atras absolute z-50 flex items-center left-5 md:left-20 h-screen" data-astro-cid-offhdtxu> <button id="atras" class="flex items-center justify-center bg-white rounded-full h-10 w-10 shadow-md" data-astro-cid-offhdtxu> <span class="font-bold transform scale-125" data-astro-cid-offhdtxu> ${renderComponent($$result, "Icon", $$Icon, { "name": "LeftArrow", "data-astro-cid-offhdtxu": true })} </span> </button> </div> <div class="imagenes" data-astro-cid-offhdtxu> <div id="img" class="w-full h-full" data-astro-cid-offhdtxu> ${renderComponent($$result, "Image", $$Image, { "src": slide1, "alt": "Talavera store", "class": "img hidden lg:block", "loading": "lazy", "data-astro-cid-offhdtxu": true })} ${renderComponent($$result, "Image", $$Image, { "src": slideMin1, "alt": "Talavera store", "class": "img lg:hidden", "loading": "lazy", "data-astro-cid-offhdtxu": true })} </div> </div> <div class="adelante absolute top-0 right-5 md:right-20 z-50 flex items-center h-screen" id="adelante" data-astro-cid-offhdtxu> <button id="adelante" class="flex items-center justify-center bg-white rounded-full h-10 w-10 shadow-md" data-astro-cid-offhdtxu> <span class="font-bold transform scale-125" data-astro-cid-offhdtxu> ${renderComponent($$result, "Icon", $$Icon, { "name": "RightArrow", "data-astro-cid-offhdtxu": true })} </span> </button> </div> </div> <!-- onda en la parte inferior  --> <div class="absolute w-full bottom-0" data-astro-cid-offhdtxu> ${renderComponent($$result, "Image", $$Image, { "src": bgWave, "alt": "Wave", "class": "w-full object-cover -mb-1", "data-astro-cid-offhdtxu": true })} </div> </div>  `;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Home/SlideComponent.astro", void 0);

export { $$SlideComponent as $ };
