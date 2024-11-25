/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, d as createAstro } from './astro/server_DBI911CA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_D9vFQYE8.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_yWJf9fjF.mjs';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$BlogPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPreview;
  const { post, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-[400px]" data-astro-cid-6dsss42m> ${renderComponent($$result, "Image", $$Image, { "src": post.image, "alt": post.title, "width": 500, "height": 300, "loading": "lazy", "class": "w-full h-60 md:h-40 lg:h-60 object-cover shadow-md rounded-md", "data-astro-cid-6dsss42m": true })} <p class="text-gray-400 uppercase" data-astro-cid-6dsss42m>${post.category} - ${post.date}</p> <h2 class="text-xl font-bold mt-4" data-astro-cid-6dsss42m>${post.title}</h2> <p id="description" class="my-2" data-astro-cid-6dsss42m>${post.desc}</p> <a${addAttribute(`${url}`, "href")} class="text-blue-500 text-xl" data-astro-cid-6dsss42m>Leer más...</a> </div>  <!-- definir un maxiomo de 100 caracteres para mostrar en el descripcion del post --> `;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/components/Blog/BlogPreview.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let allPost = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/actualidad/index.md": () => import('./index_CwbTEj8E.mjs'),"../posts/actualidad/post2.md": () => import('./post2_CnDZW4rL.mjs'),"../posts/recetas/atollado.md": () => import('./atollado_LXjSZY8O.mjs'),"../posts/recetas/index.md": () => import('./index_D25AA-v0.mjs')}), () => "../posts/**/*.md");
  allPost = allPost.sort(
    (a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Yeguada Selecta" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pt-32 max-w-screen-xl mx-auto min-h-screen"> <!-- <Title
      title="Blog"
      title2="de la Yeguada Selecta"
      subtitle="Noticias y novedades"
    /> --> <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4"> <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4"> ${allPost.map((post) => renderTemplate`${renderComponent($$result2, "BlogPreview", $$BlogPreview, { "post": post.frontmatter, "url": post.url })}`)} </div> <div class="bg-gray-200">filtro de categroias</div> </div> </main> ` })}`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
