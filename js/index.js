let body = "";
let cont = 0;

const onload = () => {
    for (let i = 1; i < 6; i++) {
        body += "<h"+i+"> Elemento "+i+"</h"+i+">";
    }
    body += "<hr>";

    document.getElementById("cuerpo").innerHTML = body;
};

const agregarTexto = () => {
    cont += 1;
    body += `Elemento extra no ${cont}`;
    document.getElementById("cuerpo").innerHTML = body;
};