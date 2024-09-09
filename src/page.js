export default class Page {
  constructor(contentId) {
    this.content = document.getElementById(contentId)
  }

  render(content, pageId) {
    const div = document.createElement("div")
    div.id = pageId
    div.appendChild(content)
    this.content.appendChild(div)
  }
}