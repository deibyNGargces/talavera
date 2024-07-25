import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_DBI911CA.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_yWJf9fjF.mjs';
import { b as bgWave } from './curve_DJ27Za1p.mjs';

const $$WaveBottom = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="absolute w-full bottom-0"> ${renderComponent($$result, "Image", $$Image, { "src": bgWave, "alt": "Wave", "class": "w-[110%] object-cover -mb-0.5" })} </div>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Utilities/WaveBottom.astro", void 0);

export { $$WaveBottom as $ };
