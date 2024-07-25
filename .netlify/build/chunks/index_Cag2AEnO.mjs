/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_DBI911CA.mjs';
import 'kleur/colors';
import { m as menImage } from './men_D_xtsB-s.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_yWJf9fjF.mjs';
import { $ as $$WaveBottom } from './WaveBottom_CynizMNt.mjs';
/* empty css                         */
import { $ as $$Icon } from './HeaderNavigator_BM4-_LDo.mjs';
import { $ as $$MountainBG } from './MountainBG_Oxmgm5Hz.mjs';
import { $ as $$Layout } from './Layout_2BjAbsVJ.mjs';

const $$DistribuidorHeroBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-950 hero-distribuidor relative" data-astro-cid-owkgiq4q> <div class="grid grid-cols-1 md:grid-cols-2 h-screen items-center max-w-screen-xl mx-auto justify-center" data-astro-cid-owkgiq4q> <div data-astro-cid-owkgiq4q> <div class="w-full text-white relative p-4 left-fadeIn" data-astro-cid-owkgiq4q> <h2 class="text-left text-4xl lg:text-6xl font-bold" data-astro-cid-owkgiq4q>
Únete a <span class="font-normal block" data-astro-cid-owkgiq4q> nuestra familia</span>
de distribuidores
</h2> <p class="text-2xl mt-4" data-astro-cid-owkgiq4q>
Amplía tu catálogo con nuestros sabores únicos. Forma parte de nuestra
          red de distribuidores y brinda a tus clientes la experiencia de
          nuestra cocina en cada producto.
</p> </div> </div> <div data-astro-cid-owkgiq4q></div> </div> <div class="h-[40vh] md:h-[50vh] lg:h-[80vh] absolute bottom-0 right-0 lg:right-40 z-10" data-astro-cid-owkgiq4q> ${renderComponent($$result, "Image", $$Image, { "src": menImage, "alt": "Distribuidor", "class": "h-full w-auto object-cover", "data-astro-cid-owkgiq4q": true })} </div> ${renderComponent($$result, "WaveBottom", $$WaveBottom, { "data-astro-cid-owkgiq4q": true })} </section> `;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Distribuidor/DistribuidorHeroBanner.astro", void 0);

const $$VentajasComponent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative" data-astro-cid-zhcxlqqf> <div class="bg-white max-w-screen-xl mx-auto grid grid-cols-3 relative btn-section" data-astro-cid-zhcxlqqf> <div class="flex flex-col items-center justify-center md:justify-end p-16" data-astro-cid-zhcxlqqf> ${renderComponent($$result, "Icon", $$Icon, { "name": "book", "class": "text-5xl md:text-7xl text-white", "data-astro-cid-zhcxlqqf": true })} <p class="text-white text-center text-xs md:text-lg font-semibold mt-3" data-astro-cid-zhcxlqqf>
Expande tu catálogo <br data-astro-cid-zhcxlqqf>
de productos
</p> </div> <div class="flex flex-col items-center justify-center md:justify-end p-16" data-astro-cid-zhcxlqqf> ${renderComponent($$result, "Icon", $$Icon, { "name": "achieve", "class": "text-5xl md:text-7xl text-white", "data-astro-cid-zhcxlqqf": true })} <p class="text-white text-center text-sm md:text-lg font-semibold mt-3" data-astro-cid-zhcxlqqf>
Calidad y experiencia
<br data-astro-cid-zhcxlqqf>
garantizadas
</p> </div> <div class="flex flex-col items-center justify-center md:justify-end p-16" data-astro-cid-zhcxlqqf> ${renderComponent($$result, "Icon", $$Icon, { "name": "smile", "class": "text-xl md:text-4xl text-white", "data-astro-cid-zhcxlqqf": true })} <p class="text-white text-center text-sm md:text-lg font-semibold mt-3" data-astro-cid-zhcxlqqf>
Autenticos sabores<br data-astro-cid-zhcxlqqf>
latinoamericanos
</p> </div> </div> <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-24 px-4 py-16" data-astro-cid-zhcxlqqf> <a href="#" class="bg-blue-950 hover:bg-opacity-80 text-center text-white py-2 px-8 rounded-full font-bold mt-1.5 inline-block" data-astro-cid-zhcxlqqf>Descargar catalogo</a> <a href="#" class="bg-[#039DE1] hover:bg-opacity-80 text-white py-2 px-8 rounded-full font-bold mt-1.5 flex max-w-content items-center justify-center gap-2" data-astro-cid-zhcxlqqf> ${renderComponent($$result, "Icon", $$Icon, { "name": "WhatsApp", "class": "text-white text-3xl", "data-astro-cid-zhcxlqqf": true })}
Más información</a> </div> <div class="h-28" data-astro-cid-zhcxlqqf> ${renderComponent($$result, "MountainBG", $$MountainBG, { "data-astro-cid-zhcxlqqf": true })} </div> </section> `;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Distribuidor/VentajasComponent.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Distribuidor Selecto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "DistribuidorHeroBanner", $$DistribuidorHeroBanner, {})} ${renderComponent($$result2, "VentajasComponent", $$VentajasComponent, {})} </main> ` })}`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/distributors/index.astro", void 0);

const $$file = "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/distributors/index.astro";
const $$url = "/distributors";

export { $$Index as default, $$file as file, $$url as url };
