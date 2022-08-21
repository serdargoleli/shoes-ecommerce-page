console.log("https://github.com/serdargoleli/shoes-ecommerce-page");

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

// Home Select Shoes Size
var div = document.getElementById("select-size");
var items = div.getElementsByClassName("size-item");
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("checked");
    current[0].className = current[0].className.replace(" checked", "");
    this.className += " checked";
  });
}
