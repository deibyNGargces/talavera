import { c as createComponent, b as createAstro, d as addAttribute, e as renderHead, r as renderComponent, f as renderSlot, a as renderTemplate } from './astro/server_I8LQRovA.mjs';
import 'kleur/colors';
import { a as $$HeaderNavigator, b as $$Footer, c as $$WspButton } from './HeaderNavigator_vTbHyWmS.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es-ES"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "HeaderNavigator", $$HeaderNavigator, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "WspButton", $$WspButton, {})} </body></html>`;
}, "C:/Users/deiby/Documents/devs/talavera/talavera-client/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
