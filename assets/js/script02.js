/**
Nos piden crear una función getValue que obtenga el valor de un input a partir de un selector y devuelva un texto que diga "mucho" si el valor es igual al parámetro o "muy poco" si el valor es menor al parámetro.
*/

//Utilizando addEventListener
function getValue(selector, parametro) {
    const ele = document.querySelector(selector)
    const eleResultado = document.querySelector('#resultado')
    if (Number(ele.value) == parametro) {
        eleResultado.innerHTML = "mucho"
    } else if (Number(ele.value) < parametro) {
        eleResultado.textContent = "muy poco"
    } else {
        eleResultado.textContent = ""
    }
}

//Aquí se llama a la función
const btn= document.querySelector('#comprobar')
btn.addEventListener('click', function() {
    getValue('#text-valor', 10)
})