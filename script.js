const form = document.querySelector("form")
const elements = Array.from(form.elements)
const log = document.querySelector(".log")

const timeOut = (element) => {
  setTimeout(() => {
    element.style.display = "none";
  }, 3000);
}

form.addEventListener("submit", e => {
  e.preventDefault()
  elements.forEach(element => {
    element.classList.remove("valid-border")
    element.classList.remove("error-border")
  })

  if (form[1].value !== form[2].value) {
    log.style.color = "indianred"
    form[2].classList.add("error-border")
    form[2].nextElementSibling.classList.add("active")
    form[2].nextElementSibling.nextElementSibling.classList.add("active")
    form[2].nextElementSibling.textContent = "Passwords don't match!"
  }
  else if (form[3].value === "empty") {
    log.style.color = "indianred"
    form[3].classList.add("error-border")
    form[3].nextElementSibling.classList.add("active")
    form[3].nextElementSibling.nextElementSibling.classList.add("active")
    form[3].nextElementSibling.textContent = "Please select a country!"
  }
  else {
    log.style.background = "rgb(100, 255, 100)"
    log.style.width = "100%"
    log.style.padding = "1rem 0"
    log.style.textAlign = "center"
    log.textContent = "Form Submitted!";
    log.style.display = "block";
    timeOut(log)
    form.reset();
  }
})

const checkValidity = e => {
  e.target.classList.remove("valid-border")
  e.target.classList.add("error-border")
  const errorMessage = e.target.nextElementSibling
  const sign = e.target.nextElementSibling.nextElementSibling
  errorMessage.classList.add("active")
  sign.classList.add("active")

  if (!e.target.checkValidity()) {
    errorMessage.textContent = e.target.validationMessage
  }
  else {
    errorMessage.classList.remove("active")
    sign.classList.remove("active")
    e.target.classList.remove("error-border")
    e.target.classList.add("valid-border")
  }
}

elements.forEach(element => {
  element.nodeName !== "BUTTON" 
    ? element.addEventListener("change", checkValidity)
    : null
});

document.querySelectorAll(".eye").forEach(item => {
  item.addEventListener("click", () => {
    const element = item.parentElement.children[1]

    element.type === "password" ? element.type = "text" : element.type = "password"
  })
})