let menubtn = document.getElementById("menu-open");
const navMenu = document.getElementById("nav-menu")

menubtn.addEventListener("click", ()=>{
    // navMenu.classList.toggle("hidden");
    if(navMenu.classList.contains("invisible")){
        navMenu.classList.remove("invisible");
        menubtn.setAttribute("src", "img/icon-menu-close.svg");
    }else{
        navMenu.classList.add("invisible");
        menubtn.setAttribute("src", "img/icon-menu.svg");
    }
})