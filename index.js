// window.addEventListener("wheel", function(Event) {
//     //clear();
//     if (Event.deltaY < 0) {
//         console.log("Scrolling Up")
//     } else if (Event.deltaY > 0) {
//         console.log("Scrolling Down")
//     }
// });


// let ele = document.querySelector(".cont");

// ele.addEventListener("mousedown", function() {
//     ele.style.backgroundColor = 'red';
// })

// ele.addEventListener("mouseup", function() {
//     ele.style.backgroundColor = 'white';
// })


// function addDiv(number) {
//     let body = document.getElementById("body");
//     for (let i = 0; i < number; i++) {
//         body.innerHTML += ` <div class="cont">
//       This is an Awesome Div Container ${i+1}
//   </div>`
//     }
// }

// addDiv(7);


let div = document.getElementsByClassName('article');

window.addEventListener("scroll", function() {
    //console.log("Y offset is " + Math.floor(window.scrollY) + "\nThis is client Top " + (div[6].offsetTop));


    for (let index = 0; index < div.length; index++) {


        //console.log("Y offset is " + Math.floor(window.scrollY + this.window.innerHeight) + "\nThis is client Top " + (div[index].offsetTop) + "\nindex : " + index);



        if ((div[index].offsetTop) < window.pageYOffset + 500) {
            div[index].style.opacity = "1";
            div[index].style.transform = "scale(1)";
        } else {
            div[index].style.opacity = "0";
            div[index].style.transform = "scale(0)";
        }

    }


    // console.log(window.innerHeight + this.window.scrollY);

})


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