import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DO7mE69J.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/distributors.astro.mjs');
const _page6 = () => import('./pages/instruction.astro.mjs');
const _page7 = () => import('./pages/posts/actualidad/post2.astro.mjs');
const _page8 = () => import('./pages/posts/actualidad.astro.mjs');
const _page9 = () => import('./pages/posts/recetas/atollado.astro.mjs');
const _page10 = () => import('./pages/posts/recetas.astro.mjs');
const _page11 = () => import('./pages/product/_idproduct_.astro.mjs');
const _page12 = () => import('./pages/products/_product_.astro.mjs');
const _page13 = () => import('./pages/yeguada.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about/index.astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/contact/index.astro", _page4],
    ["src/pages/distributors/index.astro", _page5],
    ["src/pages/instruction.md", _page6],
    ["src/pages/posts/actualidad/post2.md", _page7],
    ["src/pages/posts/actualidad/index.md", _page8],
    ["src/pages/posts/recetas/atollado.md", _page9],
    ["src/pages/posts/recetas/index.md", _page10],
    ["src/pages/product/[idProduct].astro", _page11],
    ["src/pages/products/[product].astro", _page12],
    ["src/pages/yeguada/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "acee63d2-ad57-4bb3-9015-e9c6fcbecb7f"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
