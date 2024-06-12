function pintar_rojo(){
    const elemento = document.querySelector("body")
    elemento.style.backgroundColor = "red"
}
function pintar_negro(){
    const elemento = document.querySelector("body")
    elemento.style.backgroundColor = "black"
}
function pintar_amarillo(){
    const elemento = document.querySelector("body")
    elemento.style.backgroundColor = "yellow"
}
pintar_negro()
pintar_rojo()
pintar_amarillo()
pintar_rojo()


//PARÁMETROS
// ELEMENTOS QUE NECESITAMOS UTILIZAR EN NUESTRA FUNCIÓN

function suma(numero1,numero2){
    //realizo mi acción utilizando los parámetros recibidos
    let sumar=numero1+numero2
}

//creación de la función
pintar= function(color){
    const elemento = document.querySelector("body")
    elemento.style.backgroundColor = color
} 

//llamando a la función y enviando 1 parámetro
pintar("skyblue")
pintar("crimson")

//multiples parámetros
function multiplePar(parametro1, parametro2, parametro3){
    console.log(parametro3)
    console.log(parametro1)
}

multiplePar("Hola", "perro", 4)

//Valor de un parámetro por defecto
//valor por defecto
pintar2= function(color="green"){
    const elemento = document.querySelector("body")
    elemento.style.backgroundColor = color
}

pintar2()
pintar2("red")
pintar2("yellow")

function multiplesPar2(par1, par2=2, par3=3){
    console.log(par2+par3)
    //let par2=5 //Se puede volver a declarar pero sin indicar si es let
    par2=5 
}

multiplesPar2(3)

function agregarBordes(eleId){
    let elemento = document.querySelector('#' + eleId)
    elemento.style.border="dashed 3px brown"
    //document.querySelector('#' + eleId).style.border="dashed 3px brown"
}

pintar_border =function(color, grosor, tipo, elemento){
    const ele=document.querySelector(elemento)
    ele.style.border= color + " " + grosor + " " + tipo
}

pintar_border("green", "3px", "solid", "body")

function suma(a,b){
    return a+b
}

//alert(suma(5,6))

if (suma(5,6)>10){
    alert("Es mayor a 10")
}else{
    alert("Es menor a 10")
}