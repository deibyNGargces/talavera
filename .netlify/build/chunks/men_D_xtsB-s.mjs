const menImage = new Proxy({"src":"/_astro/men.W4Avm7hF.png","width":601,"height":744,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/assets/images/home/men.png";
							}
							
							return target[name];
						}
					});

export { menImage as m };
