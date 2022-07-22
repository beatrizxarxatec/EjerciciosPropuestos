export function CalcularMedia(arreglo){
    let suma = 0;
    for (let i=0; i<arreglo.length; i++){
        suma = suma + arreglo[i];
    }
    let media = suma/arreglo.length;
    return media;
}