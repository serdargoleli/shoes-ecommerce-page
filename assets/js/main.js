/* ===========> SEARCH BOX <===========  */
const btnSearchBoxToggle = document.getElementById("btn-toggle-search-box");
const searchBox = document.getElementById("search-box");
const searchBoxInput = document.getElementById("search-box-input");

btnSearchBoxToggle.addEventListener("click", () => {
  searchBox.classList.toggle("open-search-box");
  /* Eger search-box açıksa inputa focusla ve içindeki değeri sıfırla  */
  if (searchBox.classList.contains("open-search-box")) {
    searchBoxInput.focus();
    searchBoxInput.value = "";
  }
});

/* ===========> MOBILE MENU <===========  */
/* Menu Show */
const btnToggleMobileMenu = document.getElementById("btn-toggle-mobile-menu");
const overlay = document.getElementById("mobile-menu-overlay");
const mobileMenuBox = document.getElementById("mobile-menu-box");
const btnCloseMenu = document.getElementById("btn-close-menu");

btnToggleMobileMenu.addEventListener("click", () => {
  overlay.classList.toggle("open-overlay");
  mobileMenuBox.classList.toggle("open-mobile-menu");
});

/* Menu Close */
overlay.addEventListener("click", () => {
  overlay.classList.remove("open-overlay");
  mobileMenuBox.classList.remove("open-mobile-menu");
});

btnCloseMenu.addEventListener("click", () => {
  mobileMenuBox.classList.remove("open-mobile-menu");
  overlay.classList.remove("open-overlay");
});

/* Product detail image */
let selectedImage, getImageUrl, carouselImg;
const carouselContainer = document.querySelector(".cs-carousel-img");
carouselImg = document.querySelector("#product-detail-img");

for (let i = 0; i < carouselContainer.children.length; i++) {
  carouselContainer.children[i].addEventListener("click", function () {
    selected = carouselContainer.children[i];
    getImageUrl = selected.getAttribute("data-img");
    carouselImg.src = getImageUrl;
  });
}
