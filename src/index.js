import createContent from "./home.js"
import logo from "./images/logo.png"

createContent(
  "content", "logo-container", logo, "logo", "logo"
)

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