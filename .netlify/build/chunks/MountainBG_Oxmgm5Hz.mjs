import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as createAstro } from './astro/server_DBI911CA.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_yWJf9fjF.mjs';

const mountainGrey = new Proxy({"src":"/_astro/bg-mountain.C2NcdX3-.svg","width":1366,"height":919,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/public/images/bg-mountain.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$MountainBG = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MountainBG;
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-36 overflow-hidden absolute bottom-0"> ${renderComponent($$result, "Image", $$Image, { "src": mountainGrey, "alt": "Astro Logo", "class": "object-contain w-full" })} </div>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Utilities/MountainBG.astro", void 0);

export { $$MountainBG as $, mountainGrey as m };
