const openIconMenu = document.querySelector("header div>a");
const closeIconMenu = document.querySelector(".close");
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










