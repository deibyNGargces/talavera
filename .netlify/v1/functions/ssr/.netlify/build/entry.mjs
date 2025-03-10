import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DUwUCvST.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/admin.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/distributors.astro.mjs');
const _page7 = () => import('./pages/instruction.astro.mjs');
const _page8 = () => import('./pages/posts/actualidad/post2.astro.mjs');
const _page9 = () => import('./pages/posts/actualidad.astro.mjs');
const _page10 = () => import('./pages/posts/recetas/atollado.astro.mjs');
const _page11 = () => import('./pages/posts/recetas.astro.mjs');
const _page12 = () => import('./pages/product/_idproduct_.astro.mjs');
const _page13 = () => import('./pages/products/_product_.astro.mjs');
const _page14 = () => import('./pages/yeguada.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about/index.astro", _page2],
    ["src/pages/admin/index.astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/contact/index.astro", _page5],
    ["src/pages/distributors/index.astro", _page6],
    ["src/pages/instruction.md", _page7],
    ["src/pages/posts/actualidad/post2.md", _page8],
    ["src/pages/posts/actualidad/index.md", _page9],
    ["src/pages/posts/recetas/atollado.md", _page10],
    ["src/pages/posts/recetas/index.md", _page11],
    ["src/pages/product/[idProduct].astro", _page12],
    ["src/pages/products/[product].astro", _page13],
    ["src/pages/yeguada/index.astro", _page14],
    ["src/pages/index.astro", _page15]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "78bfe169-8ef1-475e-97fb-0de90dcd49d9"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
