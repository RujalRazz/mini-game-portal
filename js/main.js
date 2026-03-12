const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function (e) {
  e.stopPropagation();
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});
const links = navLinks.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
}
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  }
});
