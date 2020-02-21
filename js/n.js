function ShowMeNolito() {
  let answer = prompt("contraseña", "Hola!");
  if (answer === 'El Nolito Claro!') {
    let protocol = window.location.protocol;
    let host = window.location.host;
    let newUrl = 'nolito.html';
    window.location = newUrl;
  } else {
    alert("Nada!");
  }
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementsByClassName("hola")[0].addEventListener("click", ShowMeNolito);
});
