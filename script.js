const emailInputEl = document.getElementById("email-input");
const notificationButtonEl = document.getElementById("notify-btn");
const errorMessageEl = document.querySelector(".error-message");

notificationButtonEl.addEventListener("click", () => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailInputEl.value.match(mailformat)) {
    emailInputEl.style.borderColor = "var(--clr-secondary-400)";
    errorMessageEl.classList.add("invalid-email");
    errorMessageEl.setAttribute("aria-hidden", "false");
  } else {
    emailInputEl.style.borderColor = "var(--clr-secondary-200)";
    errorMessageEl.classList.remove("invalid-email");
    errorMessageEl.setAttribute("aria-hidden", "true");
  }
});
