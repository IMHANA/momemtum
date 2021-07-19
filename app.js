function calcFunction(price, tax = 0.8) {
    const result = price + price * tax;
    return result;
}

const result = calcFunction(400);
console.log(result);

const result2 = calcFunction(500);
console.log(result2);

function calcFunction2(price = 400, tax) {
    const result3 = price + price * tax;
    return result3;
}

const result3 = calcFunction2(undefined, 0.08);
console.log(result3);

const result4 = calcFunction2(undefined, 0.03);
console.log(result4);