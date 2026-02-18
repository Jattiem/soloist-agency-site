function toggleMenu(){
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle");

  menu.classList.toggle("active");
  toggle.classList.toggle("active");
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});
