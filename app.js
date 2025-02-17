//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = []; 

function adicionarAmigo(){
let nomeInserido = document.querySelector('input').value; 
    console.log(nomeInserido); 
    
    if(nomeInserido == ''){

        return alert('Por favor, insira um nome.');

    } else {

        amigos.push(nomeInserido); 
        console.log(amigos);
        listaAmigos();
        limparCampo();
    
    }
}

function limparCampo(){
    nomeInserido = document.querySelector('input'); 
    nomeInserido.value = ''; 

}

function listaAmigos(){
    let listaAmigosInseridos = document.getElementById('listaAmigos');
    listaAmigosInseridos.innerHTML = ""; 
    console.log(amigos);

    for (let i = 0; i < amigos.length; i++){ 
    let li = document.createElement('li'); 
    li.textContent = amigos[i]; 
    listaAmigosInseridos.append(li);

    }
}

function sortearAmigo(){

    if (amigos.length === 0){ 

        return alert('Não existem amigos na lista.');
        
    } else {

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceAleatorio];
    console.log(amigoSorteado);
    document.getElementById('resultado').innerHTML = 'Amigo sorteado: ' + amigoSorteado;
    }
}