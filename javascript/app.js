const open = document.querySelector(".menu-btn");
const close = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

open.addEventListener("click", function () {
  sidebar.classList.toggle("display");
});

close.addEventListener("click", function () {
  sidebar.classList.remove("display");
});
