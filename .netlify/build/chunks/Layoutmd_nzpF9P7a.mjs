import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, a as renderComponent, b as addAttribute, e as renderHead, f as renderSlot } from './astro/server_DBI911CA.mjs';
import 'kleur/colors';
import { a as $$HeaderNavigator, b as $$Footer, c as $$WspButton } from './HeaderNavigator_BM4-_LDo.mjs';
import 'clsx';
import { $ as $$WaveBottom } from './WaveBottom_CynizMNt.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_yWJf9fjF.mjs';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Title;
  const { title, title2, subtitle, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class=""> <h1 class="text-4xl font-bold text-center">${title}</h1> <h2 class="text-2xl font-bold text-center">${title2}</h2> <p class="text-center text-gray-300 mt-2">${subtitle} ${date}</p> <hr class="my-8"> </div>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Blog/Title.astro", void 0);

const $$Astro$1 = createAstro();
const $$HeroPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroPost;
  const { title, title2, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative h-screen"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": title, "width": 500, "height": 300, "loading": "lazy", "class": "w-screen h-screen object-cover filter brightness-75" })} <div class="absolute max-w-screen-sm top-0 bottom-0 my-auto h-full flex flex-col justify-center right-0 md:right-32 text-sky-200 px-4"> <h2 class="text-6xl font-bold">${title}</h2> <p id="description" class="my-2 text-2xl">${title2}</p> <a href="/blog" class="font-bold bg-blue-500 text-white max-w-max px-8 py-2 rounded-xl text-xl">Ver más</a> </div> ${renderComponent($$result, "WaveBottom", $$WaveBottom, {})} </div>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Blog/HeroPost.astro", void 0);

const $$Astro = createAstro();
const $$Layoutmd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layoutmd;
  const { title } = Astro2.props;
  const { frontmatter } = Astro2.props;
  return renderTemplate`<html lang="es-ES"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "HeaderNavigator", $$HeaderNavigator, {})} ${renderComponent($$result, "HeroPost", $$HeroPost, { "title": frontmatter.title, "title2": frontmatter.title2, "image": frontmatter.image })} <div class="pt-12 max-w-screen-xl mx-auto"> ${renderComponent($$result, "Title", $$Title, { "id": "post", "title": frontmatter.title, "title2": frontmatter.title2, "subtitle": frontmatter.category, "date": frontmatter.date })} <div class="px-4"> ${renderSlot($$result, $$slots["default"])} </div> </div> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "WspButton", $$WspButton, {})} </body></html>`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/layouts/Layoutmd.astro", void 0);

export { $$Layoutmd as $ };
