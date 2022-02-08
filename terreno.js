window.onload = iniciar();

 function iniciar(){
    var btnCalcular =document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickbtnCalcular);
} 

function clickbtnCalcular(Alto, Ancho){
    var txtAlto = document.getElementById("txtAlto");
    var Alto = txtAlto.value; 
    var txtAncho = document.getElementById("txtAncho");
    var Ancho = txtAncho.value; 

    var total = (Ancho * Alto)/2
    alert("El área del terreno es: " + Math.round(total));
}