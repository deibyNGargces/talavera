/* empty css                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_DBI911CA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_D9vFQYE8.mjs';
import { c as cow } from './cow2_CFLj4ue1.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_yWJf9fjF.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="h-[60vh] flex items-center justify-center"> <div class="h-screen w-screen bg-gray-100 flex items-center"> <div class="container mx-auto flex flex-col md:flex-row items-center justify-center px-5 text-gray-700"> <div class="max-w-md"> <div class="text-5xl font-dark font-bold">404</div> <p class="text-2xl md:text-3xl font-light leading-normal">
Lo sentimos, no pudimos encontrar esta página.
</p> <p class="mb-8">
Pero no te preocupes, puedes encontrar muchos otros productos en
            nuestra página de inicio.
</p> <a href="/" class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">Volver al Home</a> </div> <div class="max-w-lg"> ${renderComponent($$result2, "Image", $$Image, { "src": cow, "alt": "Vaca" })} </div> </div> </div> </main> ` })}`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/404.astro", void 0);

const $$file = "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
