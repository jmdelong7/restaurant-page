import assembleHomePage from "./home.js"

function navButtonListener(mainId, buttonId, page) {
  const main = document.getElementById(mainId)
  const button = document.getElementById(buttonId)
  button.addEventListener("click", () => {
    main.innerHTML = ''
    page()
  })
}

navButtonListener("content", "home-button", () => assembleHomePage("content"))