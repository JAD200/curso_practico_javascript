function calcularPrecioConDescuento(precio, cupon){
    let coupons;

    switch (cupon) {
        case "15":
            coupons = 15;
            break;
        case "25":
            coupons = 25;
            break;
        case "50":
            coupons = 50;
            break;
        default:
            coupons = 0;
            break;
    }
    const porcentajePrecioConDescuento = 100 - coupons;
    console.log(porcentajePrecioConDescuento);
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    console.log(coupons);
    return precioConDescuento;
}

function buttonPriceDiscount(){
    // Precio
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    /* // Descuento
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value; */
    // Cupones
    const inputCoupon = document.getElementById("Coupons");
    const couponsValue = inputCoupon.value;
    // Argumentos
    const precioConDescuento = calcularPrecioConDescuento(priceValue, couponsValue);
    // Resultado Precio
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio total son: $" + precioConDescuento;
}

/* 
1. Sumar descuento de cupon al descuento actual
*/
