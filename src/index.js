import "./styles.css"
import assembleHomePage from "./home.js"
import assembleMenuPage from "./menu.js"

function navButtonListener(mainId, buttonId, page) {
  const main = document.getElementById(mainId)
  const button = document.getElementById(buttonId)
  button.addEventListener("click", () => {
    main.innerHTML = ''
    page()
  })
}

navButtonListener("content", "home-button", () => assembleHomePage("content"))
navButtonListener("content", "menu-button", () => assembleMenuPage("content"))