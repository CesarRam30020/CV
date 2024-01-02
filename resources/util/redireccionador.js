const Ruta = (direccion) => {
    const r = new Rutas();
    const ruta = r.rutas[direccion];
    if (ruta) window.location.href = ruta;
    else console.log("Ruta no valida o deshabilitada");
};