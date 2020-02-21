function ShowMeNolito() {
  let answer = prompt("contraseña", "Hola!");
  if (answer === 'El Nolito Claro!') {
    let newUrl = 'x1xD/nolito.html';
    window.location = newUrl;
  } else {
    alert("Nada!");
  }
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementsByClassName("hola")[0].addEventListener("click", ShowMeNolito);
});
