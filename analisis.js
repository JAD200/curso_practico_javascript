// Helpers o Utils
function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;
        }
      );
      const promedioLista = sumaLista / lista.length;
      return promedioLista;
}

// Calculadora de mediana
function medianaSalaries (lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// Median general
const salariosArg = argentina.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosArgSorted = salariosArg.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralArg = medianaSalaries(salariosArgSorted);

// Mediana del top 10%
const spliceStart = (salariosArgSorted.length * 90) / 100;
const spliceCount = salariosArgSorted.length - spliceStart;

const salariosArgTop10 = salariosArgSorted.splice(
    spliceStart, 
    spliceCount
);
const medianaTopArg = medianaSalaries(salariosArgTop10);

console.log({
    medianaGeneralArg,
    medianaTopArg,
});