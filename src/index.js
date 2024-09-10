import assembleHomePage from "./home.js"

function switchTab(contentId, tab) {
  const content = document.getElementById(contentId)
  content.innerHTML = ''
  tab()
}

function tabListeners(buttonId, contentId, tab) {
  const button = document.getElementById(buttonId)
  button.addEventListener("click", () => {
    switchTab(contentId, tab)
  })
}

function addButtonListener(mainId, buttonId, page) {
  const main = document.getElementById(mainId)
  const button = document.getElementById(buttonId)
  button.addEventListener("click", () => {
    main.innerHTML = ''
    page()
  })
}

addButtonListener("content", "home-button", () => assembleHomePage("content"))