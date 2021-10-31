const form = document.querySelector(".email-form");
const input = document.querySelector(".email-input");
const btn = document.querySelector(".submit-btn");


form.removeAttribute("data-error");

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
btn.addEventListener("click", function () {
  const isEmail = validateEmail(input.value);
  if (!isEmail) {
    form.setAttribute("data-error", "Please provide a valid email");
  } else {
    form.removeAttribute("data-error");
  }
});
