// Codigo del cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// Codigo del triangulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//Area
function areaTriangulo(base,  altura){
    return (base * altura) / 2;
}
//Altura
function alturaTrianguloIsoseles(ladoA, ladoB, base){
    if (ladoA != ladoB) {
        console.error("Los lados a y b no son iguales");
    }
    else
        return (Math.sqrt( ladoA**2 - base**2 / 4));
}
console.groupEnd();

// Codigo del circulo
console.group("Circulos")

// Diametro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI  es: " + PI)

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo (radio){
    return (radio * radio) * PI;
}

console.groupEnd();
//Aqui interactuamos con HTML

//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputLado1");
    const value1 = parseInt(inputLado1.value);

    const inputLado2 = document.getElementById("inputLado2")
    const value2 = parseInt(inputLado2.value);

    const inputBase = document.getElementById("inputBase");
    const valueBase = parseInt(inputBase.value);

    const perimetro = perimetroTriangulo(value1,  value2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputBase");
    const valueBase = parseInt(inputBase.value);

    const inputAltura = document.getElementById("inputAltura");
    const valueAltura = parseInt(inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

function calcularAlturaTrianguloIsoseles(){
    const inputLado1 = document.getElementById("inputLado1");
    const value1 = parseInt(inputLado1.value);

    const inputLado2 = document.getElementById("inputLado2")
    const value2 = parseInt(inputLado2.value);

    const inputBase = document.getElementById("inputBase");
    const valueBase = parseInt(inputBase.value);

    const altura = alturaTrianguloIsoseles(value1,  value2, valueBase);
    alert(altura);

}


//Circulo
function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = input.value;

    const diametro = diametroCirculo(radio);
    alert(diametro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = input.value;

    const area = areaCirculo(radio);
    alert(area);
}
function calcularCircunfeCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = input.value;

    const circunfe = perimetroCirculo(radio);
    alert(circunfe);
}