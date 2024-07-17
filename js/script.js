var inputs = document.querySelectorAll("form input");
const inputButton = document.querySelector('input[type="button"]');
const msg = document.querySelector("div h4");

inputButton.addEventListener("click", () => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.display = "none";
  }
  var body = document.querySelector("body");
  body.style.background = "#572912";
  msg.style.display = "inline";
});
