const imagenes = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

function renderizar() { 
    const contenedor = document.getElementById("galeria")

    imagenes.forEach((img) => {
        contenedor.innerHTML = `<img src="imagnes/${img}">`
    });
}

render() 
