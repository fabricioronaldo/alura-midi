const listaDeTeclas = document.querySelectorAll('.tecla');
//const listaDeSom = document.querySelectorAll('#');

function tocaSom (idSom){
    document.querySelector(idSom).play();
}



for ( i in listaDeTeclas) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

