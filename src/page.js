export default class Page {
  constructor(contentId) {
    this.content = document.getElementById(contentId)
  }

  createSection(className) {
    const outer = document.createElement("div")
    outer.className = `${className}-container-outer outer`
    const inner = document.createElement("div")
    inner.className = `${className}-container-inner inner`
    outer.appendChild(inner)
    return outer
  }

  appendToFirstChild(parent, elementToAppend) {
    parent.firstElementChild.appendChild(elementToAppend)
  }

  appendArrayToSection(outer, array, elementType) {
    array.forEach((e) => {
      const element = document.createElement(elementType)
      element.textContent = e
      this.appendArrayToSection(outer, e)
    })
  }

}