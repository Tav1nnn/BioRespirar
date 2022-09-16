
function criarCookie(nome, valor) {
    let dtExpira = new Date();
    dtExpira.setFullYear(dtExpira.getFullYear() + 100);
    document.cookie = `${nome}=${valor}; expires=  ${dtExpira.toUTCString().replace("GMT", "UTC")}`;
}



function verificarCookie(nome, valor) {
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {

        if(ca[i].length > 0){
        var c = ca[i];        

        let cookieData = c.split('=');

        if(cookieData[0] === nome && cookieData[1].indexOf(valor) != -1)
            return true;
        }
    }

    return false;
}