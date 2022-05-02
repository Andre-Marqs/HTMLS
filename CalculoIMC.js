let numeroinput1 = document.getElementById("altura");
let numeroinput2 = document.getElementById("peso");
let imc



function CalcularImc(){

imc = Number (numeroinput2.value) / (Number (numeroinput1.value) * Number (numeroinput1.value))

if (imc < 15){


    alert (`seu Imc: ${imc.toFixed(2)} \n  muito abaixo do peso`)
}
if (imc >= 15 && imc < 18.5){

    alert (`seu Imc: ${imc.toFixed(2)} \n abaixo do peso`)

} 
if (imc >=18.5 && imc <= 25 ){

    alert (`seu Imc: ${imc.toFixed(2)} \n dentro do peso`)

}
if (imc > 25 && imc <= 28.5){

    alert (`seu Imc: ${imc.toFixed(2)} \n acima do peso`)
}if(imc > 28.5){

 alert(`seu Imc: ${imc.toFixed(2)} \n muito acima do peso`)
}else{}}