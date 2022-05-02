let numeroinput1 = document.getElementById("num1");
let numeroinput2 = document.getElementById("num2");
let numeroinput3 = document.getElementById("num3");
let numeroinput4 = document.getElementById("num4");
let numeroinput5 = document.getElementById("num5");

let soma = 0

function CalculaPares() {
  if (numeroinput1.value % 2 == 0) {
    soma++
  }
  if (numeroinput2.value % 2 == 0) {
      soma++
  }

  if (numeroinput3.value % 2 == 0) {
      soma++
  }

  if (numeroinput4.value % 2 == 0) {
      soma++
  }
  if (numeroinput5.value % 2 == 0) {
      soma++
    }alert(soma)}

