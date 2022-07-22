import {CalcularMedia} from "./CalcularMedia.js";
const Max = 6;
const Min = 1;
let SumaDados = 0;
let arraySumaDados = [];
let cpuNum = 0;
let cpuNum1 = 0;

for (let i = 0; i < 6000; i++) {
    cpuNum = Math.floor((Math.random() * (Max - Min + 1)) + Min);
    cpuNum1 = Math.floor((Math.random() * (Max - Min + 1)) + Min);

    SumaDados = cpuNum + cpuNum1;

    arraySumaDados[i] = SumaDados;
}

let media = CalcularMedia(arraySumaDados);

console.log("La media de la suma de 6000 tiradas es:" + media);
