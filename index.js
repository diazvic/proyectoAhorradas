const linkCategorias = document.getElementById("categorias");
const seccionOcultaCategorias = document.getElementById(
	"seccion-oculta-categorias"
);

linkCategorias.onclick = () => {
	seccionOcultaCategorias.classList.toggle("categoria-oculta");
};
