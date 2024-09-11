import logoSrc from "./images/logo.png"
import Page from "./page.js"

class HomePage extends Page{
  constructor(contentId) {
    super(contentId)
  }

  createInnerHtml() {
    const logoContainer = super.createSection("logo")
    const logo = document.createElement("img")
    logo.src = logoSrc
    logo.alt = "Pho Viet Anh Logo"
    super.appendToFirstChild(logoContainer, logo)

    const headlineContainer = super.createSection("headline")
    const headline = document.createElement("p")
    headline.textContent = 'At Pho Viet Anh, we are inspired by the beauty and diversity of Vietnamese cuisine. Our menu is a reflection of the many regional flavors and cooking techniques that make Vietnamese food so unique. We are committed to bringing these flavors to life in every dish we serve.'
    super.appendToFirstChild(headlineContainer, headline)

    const hoursContainer = super.createSection("hours")
    const hoursText = [
      "Open everyday except Tuesday, 11am-8pm",
      "Last seating: 7:30pm",
      "Closed: Thanksgiving Day, Christmas Eve, and Chistmas Day",
      "Open: New Year's Eve and New Year's Day"
    ]
    super.appendToFirstChild(hoursContainer, hoursText, "p")

    const contactContainer = super.createSection("contact")
    const contactText = [
      "Pho Viet Anh",
      "206-352-1881",
      "2621 5th Ave, Seattle, WA 98121",
      "No Reservations."
    ]
    super.appendToFirstChild(contactContainer, contactText, "p")

    return {logoContainer, headlineContainer, hoursContainer, contactContainer}
  }
}

export default function assembleHomePage(contentId) {
  const homePage = new HomePage(contentId)
  const homePageElements = homePage.createInnerHtml()

  const homeDiv = document.createElement("div")
  homeDiv.className = "home"

  homeDiv.append(
    homePageElements.logoContainer,
    homePageElements.headlineContainer,
    homePageElements.hoursContainer,
    homePageElements.contactContainer
  )
  homePage.content.appendChild(homeDiv)
}