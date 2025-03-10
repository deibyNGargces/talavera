import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_I8LQRovA.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/deiby/Documents/devs/talavera/talavera-client/","adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":true,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"admin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin","isIndex":true,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/index.astro","pathname":"/admin","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":true,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/index.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"distributors/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/distributors","isIndex":true,"type":"page","pattern":"^\\/distributors\\/?$","segments":[[{"content":"distributors","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/distributors/index.astro","pathname":"/distributors","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"instruction/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/instruction","isIndex":false,"type":"page","pattern":"^\\/instruction\\/?$","segments":[[{"content":"instruction","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/instruction.md","pathname":"/instruction","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"posts/actualidad/post2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/actualidad/post2","isIndex":false,"type":"page","pattern":"^\\/posts\\/actualidad\\/post2\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"actualidad","dynamic":false,"spread":false}],[{"content":"post2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/actualidad/post2.md","pathname":"/posts/actualidad/post2","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"posts/actualidad/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/actualidad","isIndex":true,"type":"page","pattern":"^\\/posts\\/actualidad\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"actualidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/actualidad/index.md","pathname":"/posts/actualidad","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"posts/recetas/atollado/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/recetas/atollado","isIndex":false,"type":"page","pattern":"^\\/posts\\/recetas\\/atollado\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"recetas","dynamic":false,"spread":false}],[{"content":"atollado","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/recetas/atollado.md","pathname":"/posts/recetas/atollado","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"posts/recetas/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/recetas","isIndex":true,"type":"page","pattern":"^\\/posts\\/recetas\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"recetas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/recetas/index.md","pathname":"/posts/recetas","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"yeguada/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/yeguada","isIndex":true,"type":"page","pattern":"^\\/yeguada\\/?$","segments":[[{"content":"yeguada","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/yeguada/index.astro","pathname":"/yeguada","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DcI7XWgF.js"}],"styles":[{"type":"external","src":"/_astro/index.DHLzBBpi.css"},{"type":"inline","content":":root{margin:0;padding:0;box-sizing:border-box}.autoShow{animation:autoShowAnimation;animation-timeline:view(80% auto);-webkit-animation-timeline:view(80% auto)}@keyframes autoShowAnimation{0%{opacity:0;transform:translateY(20%) scale(.3)}to{opacity:1;transform:translateY(0) scale(1)}}.right-fadeIn{animation:rightFadeIn 1s ease-in-out;animation-timeline:view(70% auto);-webkit-animation-timeline:view(70% auto)}@keyframes rightFadeIn{0%{opacity:0;transform:translate(20%)}to{opacity:1;transform:translate(0)}}.left-fadeIn{animation:leftFadeIn 1s ease-in-out;animation-timeline:view(70% auto);-webkit-animation-timeline:view(70% auto)}@keyframes leftFadeIn{0%{opacity:0;transform:translate(-20%)}to{opacity:1;transform:translate(0)}}\n@import\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\";.powered[data-astro-cid-sz7xmlte]{font-size:1rem;color:#d3d1d1;font-style:oblique}.footer-style[data-astro-cid-sz7xmlte]{background-size:cover;background-position:top center;background-repeat:no-repeat}[data-astro-cid-co4mimy6]{margin:0;padding:0;box-sizing:border-box;font-family:Roboto,sans-serif}header[data-astro-cid-co4mimy6]{position:fixed;width:100%;min-height:66px;background-color:#c8c8c88c;padding:0 100px;display:flex;justify-content:space-between;align-items:center;z-index:1000}header[data-astro-cid-co4mimy6].scrolled{background-color:#c8c8c8}header[data-astro-cid-co4mimy6] .logo[data-astro-cid-co4mimy6]{color:#fff;text-decoration:none;font-size:30px;font-weight:700;padding:10px 20px}header[data-astro-cid-co4mimy6] ul[data-astro-cid-co4mimy6]{position:relative}header[data-astro-cid-co4mimy6] ul[data-astro-cid-co4mimy6] li[data-astro-cid-co4mimy6]{list-style:none;float:left;position:relative}header[data-astro-cid-co4mimy6] ul[data-astro-cid-co4mimy6] li[data-astro-cid-co4mimy6] a[data-astro-cid-co4mimy6]{color:#fff;font-size:1.1em;padding:20px 25px;text-decoration:none;display:flex;justify-content:space-between;transition:.5s;border-bottom:6px solid rgba(255,0,0,0)}header[data-astro-cid-co4mimy6] ul[data-astro-cid-co4mimy6] li[data-astro-cid-co4mimy6] a[data-astro-cid-co4mimy6]:hover{border-bottom:6px solid #fff}header[data-astro-cid-co4mimy6] ul[data-astro-cid-co4mimy6] li[data-astro-cid-co4mimy6] ul[data-astro-cid-co4mimy6]{position:absolute;left:0;background-color:#c8c8c880;min-width:200px;display:none}header[data-astro-cid-co4mimy6] ul[data-astro-cid-co4mimy6] li[data-astro-cid-co4mimy6]:hover ul[data-astro-cid-co4mimy6]{display:block}header[data-astro-cid-co4mimy6] ul[data-astro-cid-co4mimy6] li[data-astro-cid-co4mimy6] ul[data-astro-cid-co4mimy6] li[data-astro-cid-co4mimy6]{width:100%;float:none;border:1px solid rgba(255,255,255,.1)}header[data-astro-cid-co4mimy6] ul[data-astro-cid-co4mimy6] li[data-astro-cid-co4mimy6] a[data-astro-cid-co4mimy6].active{background-color:red}@media (max-width: 1400px){header[data-astro-cid-co4mimy6]{padding:10px 20px}header[data-astro-cid-co4mimy6] nav[data-astro-cid-co4mimy6]{position:absolute;width:100%;top:120px;left:0;background-color:#c8c8c8;height:0;overflow:hidden;transition:all 1s ease-in-out;opacity:0}header[data-astro-cid-co4mimy6].active nav[data-astro-cid-co4mimy6]{height:-moz-max-content;height:max-content;transition:all .5s ease-in-out;opacity:1}header[data-astro-cid-co4mimy6] nav[data-astro-cid-co4mimy6] ul[data-astro-cid-co4mimy6] li[data-astro-cid-co4mimy6]{width:100%}header[data-astro-cid-co4mimy6] nav[data-astro-cid-co4mimy6] ul[data-astro-cid-co4mimy6] li[data-astro-cid-co4mimy6] ul[data-astro-cid-co4mimy6]{position:relative;width:100%;left:0}.menuToggle[data-astro-cid-co4mimy6]{width:40px;height:50px;color:#fff;text-align:center;justify-content:center;font-size:30px;cursor:pointer;display:flex}.menuToggle[data-astro-cid-co4mimy6]:before{content:\"☰\"}header[data-astro-cid-co4mimy6].active .menuToggle[data-astro-cid-co4mimy6]:before{content:\"✕\"}}\n"}],"routeData":{"route":"/product/[idproduct]","isIndex":false,"type":"page","pattern":"^\\/product\\/([^/]+?)\\/?$","segments":[[{"content":"product","dynamic":false,"spread":false}],[{"content":"idProduct","dynamic":true,"spread":false}]],"params":["idProduct"],"component":"src/pages/product/[idProduct].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/about/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/admin/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/contact/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/distributors/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/product/[idProduct].astro",{"propagation":"none","containsHead":true}],["C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/products/[product].astro",{"propagation":"none","containsHead":true}],["C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/yeguada/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/posts/actualidad/index.md",{"propagation":"none","containsHead":true}],["C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/posts/actualidad/post2.md",{"propagation":"none","containsHead":true}],["C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/posts/recetas/atollado.md",{"propagation":"none","containsHead":true}],["C:/Users/deiby/Documents/devs/talavera/talavera-client/src/pages/posts/recetas/index.md",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about/index@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/admin/index@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contact/index@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/distributors/index@_@astro":"pages/distributors.astro.mjs","\u0000@astro-page:src/pages/instruction@_@md":"pages/instruction.astro.mjs","\u0000@astro-page:src/pages/posts/actualidad/post2@_@md":"pages/posts/actualidad/post2.astro.mjs","\u0000@astro-page:src/pages/posts/actualidad/index@_@md":"pages/posts/actualidad.astro.mjs","\u0000@astro-page:src/pages/posts/recetas/atollado@_@md":"pages/posts/recetas/atollado.astro.mjs","\u0000@astro-page:src/pages/posts/recetas/index@_@md":"pages/posts/recetas.astro.mjs","\u0000@astro-page:src/pages/product/[idProduct]@_@astro":"pages/product/_idproduct_.astro.mjs","\u0000@astro-page:src/pages/products/[product]@_@astro":"pages/products/_product_.astro.mjs","\u0000@astro-page:src/pages/yeguada/index@_@astro":"pages/yeguada.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DUwUCvST.mjs","/astro/hoisted.js?q=2":"_astro/hoisted.-sUv5K5S.js","/astro/hoisted.js?q=3":"_astro/hoisted.Bg6vqqzV.js","/astro/hoisted.js?q=0":"_astro/hoisted.DcI7XWgF.js","C:/Users/deiby/Documents/devs/talavera/talavera-client/src/components/Products/ProductsSection":"_astro/ProductsSection.CsvF5BMu.js","@/components/Admin/AdminMain":"_astro/AdminMain.WIb34DAi.js","@astrojs/react/client.js":"_astro/client.C4rGbYxV.js","C:/Users/deiby/Documents/devs/talavera/talavera-client/src/components/Products/ProductDescription":"_astro/ProductDescription.DzVEk-jb.js","/astro/hoisted.js?q=1":"_astro/hoisted.2blQmT9l.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/cow2.BBiV3FCG.png","/_astro/Caballos1.fYY-wtbo.jpg","/_astro/Caballos3.bohRErw6.jpg","/_astro/Caballos4.COWWuN3E.jpg","/_astro/thmnl.BzxtxibN.png","/_astro/bannerblog.e7Uh_7ln.png","/_astro/logoPFWhite.C2_JQwas.svg","/_astro/logoBlue.5NJtDadG.svg","/_astro/contactanosherobg.CWs70bB8.png","/_astro/banner-products.rcviqaOx.png","/_astro/bg-mountain.C2NcdX3-.svg","/_astro/whiteLogo.lZrTlcXB.svg","/_astro/arepa.Ca0jnKap.png","/_astro/heroDistribuidor.BDDPsd-1.png","/_astro/queso.Ca_cHnwb.png","/_astro/dulces.DR3reBWf.png","/_astro/carnes.BGv8tLH3.png","/_astro/icon1.eee_LPY1.svg","/_astro/icon2.pyjSK5p8.svg","/_astro/icon3.CREwf_C3.svg","/_astro/men.W4Avm7hF.png","/_astro/cow.BkqILb9P.png","/_astro/girl.DDz-CMEi.png","/_astro/f1.DU5wZnSr.jpg","/_astro/f2.9XFKc6S4.jpg","/_astro/herocontact.kavZwlXW.png","/_astro/f3.DGzKyKG1.jpg","/_astro/f4.CW6BDg3_.jpg","/_astro/f6.BQeGIFLM.jpg","/_astro/f5.DciNfjQx.jpg","/_astro/f7.fOfXD0pP.jpg","/_astro/Caballos2.BIIdq-BM.png","/_astro/curvegrey.CFapj1Pd.svg","/_astro/f8.CJNwdU0P.jpg","/_astro/food.DWLH5TBX.png","/_astro/curve.CzzyGCwT.png","/_astro/tarrina.6-draSX0.png","/_astro/homeCoche.hmnsykUn.png","/_astro/AwardsSection.BlpM8WQF.png","/_astro/YeguadaHero.BIh7-pnC.png","/_astro/Caballos8.BpWamFDE.png","/_astro/ordeno.fjJx9Fn_.mp4","/_astro/Logolacteo.CZ5bz2VZ.svg","/_astro/minslide1.B5gopQd9.png","/_astro/slide1.DuB2161f.jpg","/_astro/Logocarnico.D5O7CzOA.svg","/_astro/Caballos.DMAsQpMQ.png","/_astro/LogoQuesos.Brn-cZi7.svg","/_astro/Logomontecito.CPuQvO75.svg","/_astro/vaca.BhFrKcX8.mp4","/_astro/Caballos7.nZJxgyrN.png","/_astro/Caballos6.lz8Y25FA.png","/_astro/vaca.WPuenyIz.gif","/_astro/Yeguada.Zo5Oqmaq.mp4","/_astro/index.DHLzBBpi.css","/favicon.svg","/images/bannerblog.png","/images/bg-blue.svg","/images/bg-mountain.svg","/images/curvegrey.svg","/images/vaca.gif","/_astro/AdminMain.WIb34DAi.js","/_astro/api.CXAKeBOa.js","/_astro/client.C4rGbYxV.js","/_astro/hoisted.-sUv5K5S.js","/_astro/hoisted.2blQmT9l.js","/_astro/hoisted.Bg6vqqzV.js","/_astro/hoisted.DcI7XWgF.js","/_astro/index.B52nOzfP.js","/_astro/jsx-runtime.C9eWo9jt.js","/_astro/ProductDescription.DzVEk-jb.js","/_astro/ProductsSection.CsvF5BMu.js","/images/contact/fondo.svg","/images/contact/girl.png","/images/contact/girlcontact.png","/images/contact/herocontact.png","/images/contact/wave-haikei.svg","/images/home/carrusel/curve.png","/images/home/carrusel/minslide1.png","/images/home/carrusel/minslide2.png","/images/home/carrusel/minslide3.png","/images/home/carrusel/minslide4.png","/images/home/carrusel/slide1 copy.jpg","/images/home/carrusel/slide1.jpg","/images/home/carrusel/slide2.jpg","/images/home/carrusel/slide3.jpg","/images/home/carrusel/slide4.jpg","/404.html","/about/index.html","/admin/index.html","/blog/index.html","/contact/index.html","/distributors/index.html","/instruction/index.html","/posts/actualidad/post2/index.html","/posts/actualidad/index.html","/posts/recetas/atollado/index.html","/posts/recetas/index.html","/yeguada/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"T8NLhdtMRmH/IqhVop9Vs/lELP5kklD7DHG7QwsOTlU=","experimentalEnvGetSecretEnabled":false});

export { manifest };
