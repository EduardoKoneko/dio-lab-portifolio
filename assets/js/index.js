let storage = localStorage;
const toggleTheme = document.getElementById("toggleTheme")
const rootHTML = document.documentElement

window.onload = localStorageTheme

function changeTheme() {
    const currentTheme = rootHTML.getAttribute("data-theme");

    currentTheme ==="dark" ? rootHTML.setAttribute("data-theme", "light") : rootHTML.setAttribute("data-theme", "dark")

    toggleTheme.classList.toggle("bi-sun")
    toggleTheme.classList.toggle("bi-moon-stars")

    SaveTheme(rootHTML.getAttribute("data-theme"))
}

toggleTheme.addEventListener("click", changeTheme);

const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.toggle("active");

        accordionActive;
    })
})

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    })
})

function SaveTheme(theme) {
    storage.setItem('theme', JSON.stringify(theme))
}

function localStorageTheme(){
    const theme = JSON.parse(storage.getItem('theme'))

    rootHTML.setAttribute("data-theme", theme)

    const Settheme = rootHTML.getAttribute("data-theme");

    Settheme === "light" ? toggleTheme.classList.replace("bi-sun", "bi-moon-stars") : toggleTheme.classList.replace("bi-moon-start", "bi-sun")
}