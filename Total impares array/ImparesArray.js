let arrayOfNumbers = [14, 0, 3, 20, 175, 48];
let impares = 0;
let TotalMayores = 0;
for (let i = 0; i <= arrayOfNumbers.length - 1; i++) {
    if (arrayOfNumbers[i] % 2 != 0) {
        impares++;
    }

    if (arrayOfNumbers[i] > 100) {
        TotalMayores++;
    }
}

console.log("El total de numeros impares es:" + impares);
console.log("El total de los numeros mayores que 100 es:" + TotalMayores)















