const imagenes = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

funcion renderizar() { 
    const contenedor = document.getElementById("galeria")

    imagenes.forEach(img => {
        contenedor.innerHTML = contenedor.innerHTML + `
            <img src="imagnes/${img}"> 
        `
    })
}

render() 
