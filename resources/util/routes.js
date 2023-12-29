class Rutas {
    #rutaOrigen = "/";
    #rutaResources = this.#rutaOrigen + "resources/";
    #rutaViews = this.#rutaResources + "views/";

    rutas = {
        index: this.#rutaOrigen + "index.html",
        intento: this.#rutaViews + "intento1.html"
    };
}