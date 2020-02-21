function ShowMeNolito() {
  let answer = prompt("contraseña", "Hola!");
  if (answer === 'El Nolito Claro!') {
    let protocol = window.location.protocol;
    let host = window.location.host;
    let pathName = window.location.pathname;
    let newUrl = protocol + "://" + host + "/index/nolito.html";
    window.location.href = newUrl;
  } else {
    alert("Nada!");
  }
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementsByClassName("hola")[0].addEventListener("click", ShowMeNolito);
});
