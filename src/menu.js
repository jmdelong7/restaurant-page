import menu1Src from "./images/menu1.png"
import menu2Src from "./images/menu2.png"
import Page from "./page.js"

class MenuPage extends Page {
  constructor(contentId) {
    super(contentId)
  }

  createInnerHtml() {
    const menu1Container = super.createSection("menu-1")
    const menu1 = document.createElement("img")
    menu1.src = menu1Src
    menu1.alt = "First Page of Menu"
    super.appendToFirstChild(menu1Container, menu1)

    const menu2Container = super.createSection("menu-2")
    const menu2 = document.createElement("img")
    menu2.src = menu2Src
    menu2.alt = "Second Page of Menu"
    super.appendToFirstChild(menu2Container, menu2)

    return {menu1Container, menu2Container}
  }
}

export default function assembleMenuPage(contentId) {
  const menuPage = new MenuPage(contentId)
  const menuElements = menuPage.createInnerHtml()

  const menuDiv = document.createElement("div")
  menuDiv.className = "menu"

  menuDiv.append(menuElements.menu1Container, menuElements.menu2Container)
  menuPage.content.appendChild(menuDiv)
}

