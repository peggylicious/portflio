// cal vertical scroll height
// When user scrolls to tha point, make navigation menu fixed
// var pageHeight = window.pageYOffset;
// console.log(pageHeight);


window.addEventListener('scroll', function(e) {
    // console.log(pageHeight);
    var nav = document.getElementsByClassName('nav')[0];
    var heroIntro = document.getElementsByClassName('hero-intro')[0];
    // var hero = document.getElementById('hero');
    var header = document.getElementById('header');
    var sticky = header.offsetHeight;
    if (window.pageYOffset > sticky){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
    console.log(nav);
})
