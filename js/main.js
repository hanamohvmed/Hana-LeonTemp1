const icon = document.querySelector(".icon");
const nav = document.querySelector(".nav");

icon.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
});

document.addEventListener("click", () => {
    nav.classList.remove("active");
});

function fadeup(el){
    if (!el) return; //prevent error if element is not found
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
    el.style.transition = "all 0.7s ease-in-out";
}

window.onload = function() {
    fadeup(document.querySelector(".intro-text h1"));
    document.querySelectorAll("p").forEach(fadeup);
    fadeup(document.querySelector(".special-heading"));
    fadeup(document.querySelector(".services-content"));
    fadeup(document.querySelector(".portfolio-content"));
    document.querySelectorAll(".portofolio-content .card").forEach(fadeup);
    fadeup(document.querySelector(".about-content"));
    fadeup(document.querySelector(".contact .info"));
}
window.onscroll = function() {
    document.querySelectorAll(".features .feat").forEach(fadeup);
}

const links = document.querySelectorAll(".header .links ul li a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("activelink");
  }
});
