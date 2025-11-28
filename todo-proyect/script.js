document.getElementById("btn-add").addEventListener("click", agregar)

function agregar() {
    let valor = document.getELementById("task").vlaue; 

    if(valor = "") {  
        alert("No puede estar vacío");
        return
    }

    let li = document.createElement("il");
    li.innerText = valor;

    document.getElementById("tasks").append(valor); 
}
