const pantalla = document.getElementById("pantalla");

function agregar(valor) {
    if(pantalla.value == "0") {
        pantalla.value = valor;
    } else {
        pantalla.value = pantalla.value + valor;
    }
}
function limpiar() {
    pantalla.value = "0";
}
function borrar() {
  if (pantalla.value.length === 1) {
    pantalla.value = "0";
  } else {
    pantalla.value = pantalla.value.slice(0, -1);
  }
}
function calcular() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch (error) {
    pantalla.value = "Error";
  }
}

const teclasValidas = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/","."];

document.addEventListener("keydown", function(evento) {
  if (teclasValidas.includes(evento.key)) {
    agregar(evento.key);
  } else if (evento.key == "Enter") {
    calcular();
  } else if (evento.key == "Backspace") {
    borrar();
  } else if (evento.key == "Escape") {
    limpiar();
  }
})