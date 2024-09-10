import logoSrc from "./images/logo.png"

class HomePage{
  constructor(contentId) {
    this.content = document.getElementById(contentId)
  }

  createInnerHtml() {
    const logoContainer = this.createSection("logo")
    const logo = document.createElement("img")
    logo.className = "logo"
    logo.src = logoSrc
    logo.alt = "logo"
    logoContainer.appendChild(logo)

    const headlineContainer = this.createSection("headline")
    const headline = document.createElement("p")
    headline.textContent = 'At Pho Viet Anh, we are inspired by the beauty and diversity of Vietnamese cuisine. Our menu is a reflection of the many regional flavors and cooking techniques that make Vietnamese food so unique. We are committed to bringing these flavors to life in every dish we serve.'
    headlineContainer.appendChild(headline)

    const hoursContainer = this.createSection("hours")
    const hoursText = [
      "Open everyday except Tuesday, 11am-8pm",
      "Last seating: 7:30pm",
      "Closed: Thanksgiving Day, Christmas Eve, and Chistmas Day",
      "Open: New Year's Eve and New Year's Day"
    ]
    this.appendArrayToSection(hoursContainer, hoursText, "p")

    const contactContainer = this.createSection("contact")
    const contactText = [
      "Pho Viet Anh",
      "206-352-1881",
      "2621 5th Ave, Seattle, WA 98121",
      "No Reservations."
    ]
    this.appendArrayToSection(contactContainer, contactText, "p")

    return {logoContainer, headlineContainer, hoursContainer, contactContainer}
  }
  
  createSection(className) {
    const outer = document.createElement("div")
    outer.className = `${className}-container-outer outer`
    const inner = document.createElement("div")
    inner.className = `${className}-container-inner inner`
    outer.appendChild(inner)
    return inner //to append to inner easily
  }

  appendArrayToSection(section, array, elementType) {
    array.forEach((e) => {
      const element = document.createElement(elementType)
      element.textContent = e
      section.appendChild(element)
    })
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