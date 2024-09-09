import Page from "./page.js"
import logo from "./images/logo.png"

class HomePage extends Page {
  constructor(contentId) {
    super(contentId)
  }

  createInnerHtml() {
    const innerHtml = `
    <div class="logo-container-outer outer">
      <div class="logo-container-inner inner">
        <img class="logo" src=${logo} alt="logo">
      </div>
    </div>
    <div class="headline-container-outer outer">
      <div class="headline-container-inner inner">
        <p class="headline">
        At Pho Viet Anh, we are inspired by the beauty and diversity of
        Vietnamese cuisine. Our menu is a reflection of the many regional
        flavors and cooking techniques that make Vietnamese food so unique.
        We are committed to bringing these flavors to life in every dish we serve.
        </p>
      </div>
    </div>
    <div class="hours-container-outer outer">
      <div class="hours-container-inner inner">
        <p>Open everyday except Tuesday, 11am-8pm</p>
        <p>Last seating: 7:30pm</p>
        <p>Closed: Thanksgiving Day, Christmas Eve, and Christmas Day</p>
        <p>Open: New Year's Eve and New Year's Day</p>
      </div>
    </div>
    <div class="contact-container-outer outer">
      <div class="contact-container-inner inner">
        <p>Pho Viet Anh</p>
        <p>206-352-1881</p>
        <p>2621 5th Ave, Seattle, WA 98121</p>
        <p>No reservations</p>
      </div>
    </div>
    `
  }
}