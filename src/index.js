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

function addButtonListener(buttonId, page) {
  const button = document.getElementById(buttonId)
  button.addEventListener("click", () => {
    page()
  })
}

addButtonListener("home-button", () => assembleHomePage("content"))