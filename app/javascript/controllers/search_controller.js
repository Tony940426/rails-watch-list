import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search"
export default class extends Controller {
  static targets = ["form"]
  connect() {
    console.log("Search Stimulus Loaded")
    // console.log(this.element)
    // console.log(this.itemsTarget)
    // console.log(this.formTarget)
  }

  load(event) {
    event.preventDefault()
    console.log(this.currentTarget)
  }
}
