// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

/**Variables globales */
let arregloListaAmigos = [];
//Se hace referencia al ID listaAmigos y resultado en HTML 
let listaAmigosHTML = document.getElementById("listaAmigos");
let resultadoHTML = document.getElementById("resultado");

//Declaracion de funciones

function agregarAmigo(){
//Capturar el valor de input por ID, input es un objeto.
let input = document.getElementById('amigo');

//Leer el nombre de amigo que es un Objeto//
//trim() quita espacios al inicio y final
let nombreAmigo = input.value.trim(); //nombreamigo ahora es un String
  
//ver si Esta de vacio
    if(nombreAmigo === ''){
        alert('Por favor, inserte un nombre.');
    }else{
        arregloListaAmigos.push(nombreAmigo);
        listaAmigos();
//limpia la caja "Escribe un nombre" al precionar agregar//        
    input.value='';  
    }
}

function listaAmigos(){
/**Primero limpias consola luego lista de amigos */    
    console.clear();  //Para solo ver una lista actualizada en consola
    console.log('Lista de amigos'); //Nombre de la lista en consola
// limpiar lista antes de volver a mostrar    
    listaAmigosHTML.innerHTML = ''; 

/*Recorrer arreglo*/
    let i=0;
//desde i=0 y hasta el espacio del arreglo
    while (i< arregloListaAmigos.length){
        console.log((i+1)+ ". "+arregloListaAmigos[i]);
    
    //Mostrar en HTML
    let li=document.createElement('li');
    li.textContent = arregloListaAmigos[i];
    listaAmigosHTML.appendChild(li);    
        i++; //Incrementar el contador
    }
}

function sortearAmigo(){ 
    if (arregloListaAmigos.length===0){
        alert('No hay amigos para sortear.')
        return;
    } 

    //Sorteo de amigos
let indiceAleatorio = Math.floor(Math.random()*arregloListaAmigos.length);
    resultadoHTML.innerHTML = `<li>Amigo secreto: <strong>${arregloListaAmigos[indiceAleatorio]}</strong></li>`;
}
