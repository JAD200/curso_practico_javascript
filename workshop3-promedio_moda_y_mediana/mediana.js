
function calcularMedianaDeLista(lista){
    // Ordenar la lista
    const listaOrdenada = lista.sort(function(a, b){
        return a - b;
      });
    const mitadLista = parseInt(listaOrdenada.length / 2);
    
    let mediana;
    // Asegurarse si la lista es par
    if (esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];

        const promedioElementos = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElementos;
        return mediana;
    } else{
        mediana = listaOrdenada[mitadLista];
        return mediana;
    }
}

// Funcion de promedio
function calcularMediaAritmetica(lista){
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );
    
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
}
// Verificacion de si la lista es par o impar
function esPar(numerito){
    if (numerito % 2 === 0)
        return true;
    else
        return false;
}
