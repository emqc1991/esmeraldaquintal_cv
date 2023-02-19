document.getElementById("boton").onclick =  function() {
    console.log("capturamos el elemento click"); 
    document.getElementById("demo").innerHTML= "Castellano e Historia"
}

document.getElementById("boton_default").onclick =  function() {
    console.log("capturamos el elemento click"); 
    document.getElementById("demo").innerHTML= "Filosofía"
}