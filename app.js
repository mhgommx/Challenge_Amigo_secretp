// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

const amigos= [];
console.log(amigos);

function asignarTextoElemento(elemento, texto){
    const elementoHTML = document.querySelector(elemento);
    if (!elementoHTML) return;
    elementoHTML.innerHTML = texto;

}

//normalizarNombre
function normalizarNombre(s){
    return s
    .toLowerCase()
    .normalize(`NFD`)
.replace(/[\u0300-\u036f]/g, ``);
}



//function agregaramigo corregida
function agregarAmigo(){
    const input = document.getElementById(`amigo`);
    const nombre = input.value.trim();

    if (!nombre){
        alert(`Por favor, inserte un nombre.`);
        input.focus();
        return;
    }

    document.getElementById(`resultado`).innerHTML =``;

    if (amigos.some(n => normalizarNombre(n) === normalizarNombre(nombre))) {
        alert(`Ese nombre ya está en la lista.`);
        input.focus();
        return;
    }

    amigos.push(nombre);
    input.value = ``;
    input.focus();
    renderLista();
    actualizarBotonSortear();
}

//Function renderLista
function renderLista(){
    const ul = document.getElementById(`listaAmigos`);
    ul.innerHTML = ``;
    amigos.forEach((n)=>{
        const li = document.createElement(`li`);
        li.textContent = n;
        ul.appendChild(li);
    });
    actualizarBotonSortear();
}

//DOM directo
document.getElementById(`amigo`)?.addEventListener(`keydown`, (e) =>{
    if (e.key === `Enter`){
    e.preventDefault();
    agregarAmigo();
    }
});

//Sorte aleatorio
function sortearAmigo(){
    if(amigos.length === 0){
        alert(`Agrega al menos un nombre antes de sortear.`);
        return;
    }
    const indice = Math.floor(Math.random()*amigos.length);
    const seleccionado = amigos[indice];
        //Muestra el resultado dentro del <ul id="resultado"
        const ulResultado = document.getElementById(`resultado`);
        ulResultado.innerHTML = ``;
        const li = document.createElement(`li`);
        li.textContent = seleccionado;
        ulResultado.appendChild(li);
}

//Habilita y deshabilita el boton de sortear
function actualizarBotonSortear(){
    const btn = document.querySelector(`.button-draw`);
    if (!btn) return;
    btn.disabled = amigos.length === 0;
}

actualizarBotonSortear();
