function corrigir(name){
    let respostas = document.getElementsByName(name);
    let respostaUsuario, respostaCorreta;

    for (let i in respostas) {

        respostas[i].className = respostas[i].className?.replace(" red", "");
        respostas[i].className = respostas[i].className?.replace(" green", "");
        if (respostas[i].checked) {
            respostaUsuario = respostas[i];
        };

        if (respostas[i].className === 'correto') {
            respostaCorreta = respostas[i];
        }
    }

    if (respostaCorreta === respostaUsuario) {
        console.log('🥳 Usuario acertou.')
        respostaUsuario.className+=" green"
        return;
    }else{
        console.log('❌ Usuario errou!');
        respostaUsuario.className+=" red"
    }



}
