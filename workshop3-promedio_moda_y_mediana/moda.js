// Lista de ejemplo
[
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ] 

function cualquierModa (lista) {
    // Cantidad de elementos
    const listaCount = {};
    lista.map(
        function (elemento){
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;    
            } else
                listaCount[elemento] = 1;
        }
    )
    // Creacion arrays
    const listaArray = Object.entries(listaCount).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }    
    )
    // Moda = el elemento mas repetido de una lista
    const moda = listaArray[listaArray.length - 1];
    return moda;
}