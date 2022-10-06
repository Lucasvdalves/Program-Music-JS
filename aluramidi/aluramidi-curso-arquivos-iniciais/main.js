function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {

        elemento.play();
    }
    else {
        alert('Elemento não encontrado');
    }
}



const listaDeTeclas = document.querySelectorAll('.tecla');

// i é igual contador
let i = 0

// WEstrutura de Repetição W- hile quer dizer ''Equanto''

/*while (i < listaDeTeclas.length) {
 
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // tamplate string
 
    console.log(idAudio);
 
    // '#som_{insturmneto}'
 
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
 
    i = i + 1; // para o loop parar o contador deve ser "contador + 1"
 
    console.log(i);
 
}*/

// Estrutura de repetição for
for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // tamplate string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {

        console.log(event);

        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }


    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

