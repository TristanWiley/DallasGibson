var currentHash = window.location.hash.substr(1)
$(document).ready(function () {
  handleHash(currentHash)

  $('a').click(function () {
    var value = this.hash.substr(1)
    handleHash(value)
  })
})

function handleHash(hash) {
  switch (hash) {
    case "":
      $("#container").load("partials/home.html", function () { }).hide().fadeIn()
      break
    case "about":
      $("#container").load("partials/about.html", function () { }).hide().fadeIn()
      break
    case "reel":
      $("#container").load("partials/reel.html", function () { }).hide().fadeIn()
      break
    case "portfolio":
      $("#container").load("partials/portfolio.html", function () { }).hide().fadeIn()
      break
    case "contact":
      $("#container").load("partials/contact.html", function () { }).hide().fadeIn()
      break
  }
}