let libro = {
    id: null,
    autor: null,
    fecha: null
}

let constructorLibro = function (){
    "use strict";
    var libroResultante = {
        id: 1,
        autor: 'Cualquiera',
        fecha: new Date()
    }
    this.construye = function(){
        return libroResultante
    }
    this.estableceAutor = function(autor){
        libroResultante.autor = autor;
        return this // De esta manera se puede encadenar. Awesome!!
    }
    this.estableceFecha = function(fecha){
        libroResultante.fecha = fecha;
        return this;
    }
}

let validaLibroConstruido = function(libroConstruido){
    "use strict";
    if (!libroConstruido.autor){
        return false
    }
    if (!libroConstruido.fecha){
        return false
    }
    return true
};

let nuevoLibro = new constructorLibro()
    .estableceAutor('Miguel Gastalver')
    .estableceFecha(new Date())
    .construye();

if(validaLibroConstruido(nuevoLibro)){
    console.log('Libro validado correctamente');
}

let otroLibro = new constructorLibro()
    .estableceAutor(null)
    .construye();

if(!validaLibroConstruido(otroLibro)){
    console.log('Libro inválido porque no tiene autor. Es null.')
};

let unLibro = new constructorLibro()
    .estableceFecha(null)
    .construye()

if (!validaLibroConstruido(unLibro)){
    console.log('Libro inválido porque no tiene fecha. Es null.')
}

