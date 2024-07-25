const cow = new Proxy({"src":"/_astro/cow2.BBiV3FCG.png","width":751,"height":545,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/assets/images/about/cow2.png";
							}
							
							return target[name];
						}
					});

export { cow as c };
