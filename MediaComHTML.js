let numeroinput1 = document.getElementById("nota1")
let numeroinput2 = document.getElementById("nota2")
let numeroinput3 = document.getElementById("nota3")
let numeroinput4 = document.getElementById("nota4")
let = media
let = somaNota


function CalculaMedia(){

somaNota = Number (numeroinput1.value) + Number (numeroinput2.value)+ Number(numeroinput3.value) + Number (numeroinput4.value)
media = somaNota/4

if(media >=7){

    alert ("PARABENS APROVADO COM MEDIA " + (media))


}
else if (media < 7 && media >= 5){


 alert ("Que pena, você ficou de recuperação, sua media foi: " + (media))

}
else {
 alert ("Poxa você reprovou sua media foi: " + (media))
}}