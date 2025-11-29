document.getElementById("btn-add").addEventListener("click", agregar)

function agregar() {
    let valor = document.getElementById("task").value; 

    if (valor === "") {  
        alert("No puede estar vacío");
        return;
    }

    let li = document.createElement("li");
    li.innerText = valor;

    document.getElementById("tasks").append(li); 
}

