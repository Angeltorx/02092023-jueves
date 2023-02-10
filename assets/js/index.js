console.log("Entro index.js");

document=addEventListener("DOMContentLoaded", function(){
    const saveBtn = document.getElementById("saveBtn")
    const changeThemeBtn = document.getElementById("changeThemeBtn")
    const inputName = document.getElementById("inputName")
    const inputPuesto = document.getElementById("inputPuesto")
    let tableBody = document.getElementById("tableBody")

    function loadData(){
    }

    saveBtn.addEventListener("click", ()=>{

        const name= inputName.value;
        const puesto= inputPuesto.value;
        console.log(name);
        console.log(puesto);
        let empleados = JSON.parse(localStorage.getItem("empleados")) || []; //la doble linea se define como "or"
        empleados.push({
            name:name,
            puesto:puesto,
        });
        localStorage.setItem("empleados",JSON.stringify(empleados));
    });
    // que inicialice la aplicacion
});// Que se ejecute cuando el contenido este cargado es la direccion.








/*let btnsecondary=document.getElementById("btnsecondary");

function imprimirHolaMundo() {
    alert("Solo usando una function");
}
//De esta forma se requiere modificar el html y aladir un funcion en especifica dentro del html.

btnsecondary.addEventListener("click", function(){
    alert("Con la listener");
});
//No requiere modificar el html si se posse un ID, solo se hace referencia al id en el html.

btnsuccess.addEventListener("click", () => {
    alert("Con una funtion de flecha");
});
//No requiere modificar el html si se posse un ID, solo se hace referencia al id en el html.*/
