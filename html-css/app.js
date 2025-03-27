function saveFormDate(){
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;

    localStorage.setItem("email",emailInput);
    localStorage.setItem("password",passwordInput);

            alert("フォーム入力が保存されました");
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  saveFormDate();
});

window.onload = function(){
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");

  let savedEmail = localStorage.getItem("email");
  let savedPassword = localStorage.getItem("password");

  if (savedPassword) {
    passwordInput.value = savedPassword;
  }

  if (savedEmail) {
    emailInput.value = savedEmail;
  }
}
