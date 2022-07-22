let Election = parseInt(prompt("Escoja el primer numero"));
let Election1 = parseInt(prompt("Escoja el segundo numero"));

do {
    Election1 = parseInt(prompt("Repita nuevamente el segundo numero"));
}
while (Election == Election1)


if (Election > Election1) {
    console.log("El mayor numero es:" + Election)
}
else {
    console.log("El mayor numero es:" + Election1)
}















