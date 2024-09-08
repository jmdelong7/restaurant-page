function appendElement(contentId, element) {
  const content = document.getElementById(contentId)
  content.appendChild(element)
}

function createDivContainer(className) {
  const divContainer = document.createElement("div")
  divContainer.className = className
  return divContainer
}

function createImage(src, alt, id) {
  const image = document.createElement("img")
  image.id = id
  image.src = src
  image.alt = alt
  return image
}

export default function createContent(contentId, className, src, alt, id) {
  const logoContainer = createDivContainer(className)
  const logoImage = createImage(src, alt, id)
  logoContainer.appendChild(logoImage)
  appendElement(contentId, logoContainer)
  const headlineContainer = createDivContainer("headline-container")
  const headline = document.createElement("p")
  headline.textContent =
    `At Pho Viet Anh, we are inspired by the beauty and diversity of 
    Vietnamese cuisine. Our menu is a reflection of the many regional 
    flavors and cooking techniques that make Vietnamese food so unique. 
    We are committed to bringing these flavors to life in every dish we serve.`
  headlineContainer.appendChild(headline)
  appendElement(contentId, headlineContainer)
}