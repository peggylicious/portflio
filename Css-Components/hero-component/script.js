// var photoList = ["C:/Users/User/Desktop/hero-component/images/black-girl.jpg", "C:/Users/User/Desktop/hero-component/images/intro-bg.jpg"];

// Add an event listener

// window.addEventListener('click', function(e) {
//     // var float = document.getElementsByClassName('float')[0];
//     var i = 1;
//     var hero = document.getElementsByClassName('hero')[0];
//     // hero.style.backgroundImage = "url(C:/Users/User/Desktop/hero-component/images/intro-bg.jpg)";
//     if (hero.style.backgroundImage === "url(C:/Users/User/Desktop/hero-component/images/peggy-black-full.jpg"){
//         hero.style.backgroundImage = "url(C:/Users/User/Desktop/hero-component/images/black-girl.jpg)";
//     }
//     // }else if(hero.style.backgroundImage == "url(C:/Users/User/Desktop/hero-component/images/black-girl.jpg)"){
//     //     hero.style.backgroundImage = "url(C:/Users/User/Desktop/hero-component/images/intro-bg.jpg)";
//     // }else{
//     //     hero.style.backgroundImage = "url(C:/Users/User/Desktop/hero-component/images/peggy-black-full.jpg)";
//     // }
// })

// // function changeImage() {
// //     for
// // }



// Add an event listener

window.addEventListener('click', function(e) {
    let hero = document.getElementById("heros");
    if (hero.className == "hero"){
        hero.classList.remove('hero');
        hero.classList.add('hero1');
    }else if(hero.className == "hero1"){
        hero.classList.remove('hero1');
        hero.classList.add('hero2');
    }else{
        hero.classList.remove('hero2');
        hero.classList.add('hero');
    }
})


// window.addEventListener('click', function(e) {
//     let hero = document.querySelector(`#heros[class="${e.className}"]`);
//     if (hero.className == "hero"){
//         hero.classList.remove('hero');
//         hero.classList.add('hero1');
//     }else if(hero.className == "hero1"){
//         hero.classList.remove('hero1');
//         hero.classList.add('hero2');
//     }else{
//         hero.classList.remove('hero2');
//         hero.classList.add('hero');
//     }
// })

