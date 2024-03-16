const navList = window.document.querySelector(".nav-list");
const navIcon = window.document.querySelector(".nav-icon"); 


navIcon.addEventListener("click", () => {
    navList.classList.toggle("active");
});