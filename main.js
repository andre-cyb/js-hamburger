const openIconMenu = document.querySelector(".fa-bars");
const closeIconMenu = document.querySelector(".fa-times");
const hiddenMenu = document.querySelector(".hamburger-menu");

console.log(openIconMenu.className);
console.log(closeIconMenu.className);
console.log(hiddenMenu.className);


openIconMenu.addEventListener("click", function () {
    hiddenMenu.style.display = "block";
}
);
closeIconMenu.addEventListener("click", function () {
    hiddenMenu.style.display = "none";
}
);










