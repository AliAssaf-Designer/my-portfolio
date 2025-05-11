function mobile_menu() {
    var menu = doc.querySelector(".navbar-menu");
    var navbar = doc.querySelector("#navbar")
    if (menu.style.display === "block") {
        menu.style.display = "none";
        navbar.style.height = "17vh";
    } else {
        setTimeout(() => {
            menu.style.display = "block";
        }, 300);
        navbar.style.height = "60vh";
    }
}