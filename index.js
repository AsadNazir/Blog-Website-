let div = document.getElementsByClassName('article');
let sideDiv = document.getElementsByClassName("aside_cont");



window.addEventListener("scroll", function() {


    for (let index = 0; index < div.length; index++) {

        // Article Animation Over Here

        if ((div[index].offsetTop) < window.pageYOffset + 500) {
            div[index].style.opacity = "1";
            div[index].style.transform = "scale(1)";
        } else {
            div[index].style.opacity = "0";
            div[index].style.transform = "scale(0)";
        }

    }

    // Aside Animation Over Here

    for (let index = 0; index < sideDiv.length; index++) {

        if ((sideDiv[index].offsetTop) < window.pageYOffset + 500) {
            sideDiv[index].style.opacity = "1";
            sideDiv[index].style.transform = "translateX(0%)";
        } else {
            sideDiv[index].style.opacity = "0";
            sideDiv[index].style.transform = "translateX(50%)";
        }
    }

})

// Side Menu Over Here
let menu_open = document.getElementById('menu');


menu_open.addEventListener("click", function() {
    let sideMenu = document.querySelector('.sideMenu');
    sideMenu.style.transform = `translateX(0%)`;

    let menu_close = document.getElementById("close");
    menu_close.addEventListener("click", function() {

        sideMenu.style.transform = `translateX(100%)`;
    })

})

// Dark Mode Over Here
let body = document.querySelector('.ltheme_body');
let DarkModeBtn = document.querySelector('.Mode_Change');

DarkModeBtn.addEventListener('click', function() {

    if (body.classList == 'ltheme_body') {
        DarkModeBtn.innerHTML = ` <i class="fa-solid fa-sun"></i>`
        body.classList.replace("ltheme_body", "dtheme_body");
    } else {
        DarkModeBtn.innerHTML = ` <i class="fa-solid fa-moon"></i>`
        body.classList.replace("dtheme_body", "ltheme_body");
    }

})