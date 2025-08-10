const login = document.querySelector(".input");
const password = document.querySelector(".password");
let clicker = document.querySelector(".button");

let message = document.querySelector(".p");

clicker.addEventListener("click", () => {
  if (login.value === "houzing" && password.value === "1111") {
    window.location.href = "k.html";
  } else {
    message.innerHTML = `❌ Login yoki parol hato qaytadan urinib ko‘ring`;
  }
});
