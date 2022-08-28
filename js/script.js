const divLeyenda = document.querySelector('.leyenda');

function MostrarTooltip(num){

    let tecnologia;
    switch (num) {
        case 1:
        tecnologia = 'HTML';
            break;
        case 2:
            tecnologia = 'CSS';
            break;
        case 3:
            tecnologia = 'BOOTSTRAP';
            break;
        case 4:
            tecnologia = 'JAVASCRIPT';
            break;
        case 5:
            tecnologia = 'NODE.JS';
            break;
        case 6:
            tecnologia = 'MYSQL';
            break;
    }

    let varleyenda = document.querySelector('.tecLeyenda');
    varleyenda.textContent = tecnologia;
    
    if (divLeyenda.style.visibility  === "hidden") {
        divLeyenda.style.visibility  = "visible";
    }
}

function ocultar(){
    if (divLeyenda.style.visibility  === "visible") {
        divLeyenda.style.visibility  = "hidden";
    }

}