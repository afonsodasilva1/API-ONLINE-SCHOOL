let numero = 10
let numero_final

console.log(numero_final)


while(true){

    if(numero > 0 && numero < 10){
        numero_final = '00' + numero
    }else if (numero > 10 && numero < 100){
        numero_final = '0' + numero
    }else{
        numero_final = numero
    }
     break;   
}