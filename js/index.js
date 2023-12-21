const onload = () => {
    let body = "";

    for (let i = 1; i < 6; i++) {
        body += "<h"+i+"> Elemento "+i+"</h"+i+">";
    }
    body += "<hr>";

    document.getElementById("cuerpo").innerHTML = body;
};