var aboutMeButton = document.getElementById("aboutMeButton");
if (aboutMeButton) {
  aboutMeButton.addEventListener("click", function () {
    window.location.href = "about.html";
  });
}
var portfolioButton = document.getElementById("portfolioButton");
if (portfolioButton) {
 portfolioButton.addEventListener("click", function () {
    window.location.href = "projects.html";
  });
}
var homePageButton = document.getElementById("homePageButton");
if (homePageButton) {
  homePageButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}
var contactButton = document.getElementById("contactButton");
if (contactButton) {
  contactButton.addEventListener("click", function () {
    window.location.href = "contact.html";
  });
}