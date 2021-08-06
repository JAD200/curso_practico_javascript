function calcularPrecioConDescuento(precio, descuento, cupon){
    const tipoDeCupones = [15, 25, 50];

    switch (cupon) {
        case 15:
            tipoDeCupones[0];
            break;
        case 25:
            tipoDeCupones[1];
            break;
        case 50:
            tipoDeCupones[2];
            break;
        default:
            0;
            break;
    }

    const porcentajePrecioConDescuento = 100 - (descuento + tipoDeCupones);
    
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
 
    console.log(precioConDescuento)
    return precioConDescuento;
}

function buttonPriceDiscount(){
    // Precio
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    // Descuento
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    // Cupones
    const inputCoupons = document.getElementById("Coupons");
    const couponsValue = inputCoupons.value;
    // Argumentos
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue, couponsValue);
    // Resultado Precio
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

/* 
1. Sumar descuento de cupon al descuento actual
*/
