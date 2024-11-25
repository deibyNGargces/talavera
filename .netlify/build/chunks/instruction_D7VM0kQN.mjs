/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DBI911CA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<!-- documento de instrucciones para formato de texto con markdown -->\n<!-- Titulos  -->\n<h1 id=\"titulo1\">Titulo1</h1>\n<h2 id=\"titulo2\">Titulo2</h2>\n<h3 id=\"titulo3\">Titulo3</h3>\n<h4 id=\"titulo4\">Titulo4</h4>\n<h5 id=\"titulo5\">Titulo5</h5>\n<h6 id=\"titulo6\">Titulo6</h6>\n<!-- cursivas -->\n<p><em>Texto en cursiva</em>\r\n<em>Otro Texto en cursiva</em></p>\n<!-- Negritas -->\n<p><strong>Texto en Negrita</strong>\r\n<strong>Otro Texto en Negrita</strong></p>\n<!-- Subrayado -->\n<p><del>Texto Tachado</del></p>\n<!-- Division -->\n<hr>\n<!-- Blockquote -->\n<blockquote>\n<p>bloque de texto</p>\n</blockquote>\n<!-- Links -->\n<p><a href=\"https://pagina/contacto\">Contacto</a></p>\n<!-- Ul -->\n<ul>\n<li>Item 1</li>\n<li>Item 2</li>\n<li>Item 3\n<ul>\n<li>Item 3.1</li>\n<li>Item 3.2</li>\n</ul>\n</li>\n</ul>\n<!-- Ol -->\n<ol>\n<li>Item 1</li>\n<li>Item 2</li>\n<li>Item 3\n<ol>\n<li>Item 3.1</li>\n<li>Item 3.2</li>\n</ol>\n</li>\n</ol>\n<!-- html -->\n<p><code>&#x3C;h1>Hola&#x3C;/h1></code></p>\n<!-- Imagenes -->\n<p><img src=\"https://miro.medium.com/v2/resize:fit:1400/1*nLbfO_PdTSpeCdZQuUr8RQ.png\" alt=\"imagen-Algo\"></p>\n<!-- Bloque de codigo -->\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\"> npm</span><span style=\"color:#9ECBFF\"> run</span><span style=\"color:#9ECBFF\"> dev</span></span>\n<span class=\"line\"><span style=\"color:#F97583\"> function</span><span style=\"color:#B392F0\"> hola</span><span style=\"color:#E1E4E8\">(){</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">    alert(</span><span style=\"color:#B392F0\">\"Hola\"</span><span style=\"color:#E1E4E8\">)</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\"> }</span></span>\n<span class=\"line\"></span></code></pre>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"php\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">$var </span><span style=\"color:#F97583\">=</span><span style=\"color:#E1E4E8\"> $_POST[</span><span style=\"color:#9ECBFF\">'var'</span><span style=\"color:#E1E4E8\">]</span></span>\n<span class=\"line\"></span></code></pre>\n<!-- Tablas -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Nombre</th><th>Email</th></tr></thead><tbody><tr><td>Pedro Perez</td><td><a href=\"mailto:email@email.com\">email@email.com</a></td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/instruction.md";
				const url = "/instruction";
				function rawContent() {
					return "<!-- documento de instrucciones para formato de texto con markdown -->\r\n<!-- Titulos  -->\r\n# Titulo1\r\n## Titulo2\r\n### Titulo3\r\n#### Titulo4\r\n##### Titulo5\r\n###### Titulo6\r\n<!-- cursivas -->\r\n*Texto en cursiva*\r\n_Otro Texto en cursiva_\r\n<!-- Negritas -->\r\n**Texto en Negrita**\r\n__Otro Texto en Negrita__\r\n<!-- Subrayado -->\r\n~~Texto Tachado~~\r\n<!-- Division -->\r\n---\r\n\r\n<!-- Blockquote -->\r\n> bloque de texto \r\n<!-- Links -->\r\n[Contacto](https://pagina/contacto)\r\n<!-- Ul -->\r\n* Item 1\r\n* Item 2\r\n* Item 3\r\n    * Item 3.1\r\n    * Item 3.2\r\n\r\n<!-- Ol -->\r\n1. Item 1\r\n1. Item 2\r\n1. Item 3\r\n    1. Item 3.1\r\n    1. Item 3.2\r\n<!-- html -->\r\n`<h1>Hola</h1>`\r\n<!-- Imagenes -->\r\n![imagen-Algo](https://miro.medium.com/v2/resize:fit:1400/1*nLbfO_PdTSpeCdZQuUr8RQ.png)\r\n<!-- Bloque de codigo -->\r\n````bash\r\n npm run dev\r\n function hola(){\r\n    alert(\"Hola\")\r\n }\r\n````\r\n\r\n```php\r\n$var = $_POST['var']\r\n```\r\n<!-- Tablas -->\r\n| Nombre | Email |\r\n|--------|-------|\r\n|Pedro Perez | email@email.com |\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"titulo1","text":"Titulo1"},{"depth":2,"slug":"titulo2","text":"Titulo2"},{"depth":3,"slug":"titulo3","text":"Titulo3"},{"depth":4,"slug":"titulo4","text":"Titulo4"},{"depth":5,"slug":"titulo5","text":"Titulo5"},{"depth":6,"slug":"titulo6","text":"Titulo6"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
