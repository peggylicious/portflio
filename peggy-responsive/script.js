window.onscroll = function(){
    myFunction()
    transitionElement()
}

    // Adds fixed header to header
function myFunction(){
    let nav = document.getElementById("fix-header");
        // Gets the heigth of the header
    let sticky = nav.offsetTop;

    if (window.pageYOffset > sticky){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}

// Adds transition to .row-1 of the stories class
function transitionElement(){
        // let desiredPosition = 500;
    let affectedElement = document.getElementsByClassName("row-1");
    let element = document.getElementById("image-container");
    let imageContainer = element.offsetHeight;

    if (window.pageYOffset >= imageContainer){
        affectedElement[0].classList.add('transit');
    }else{
        affectedElement[0].classList.remove('transit');
    }
}














// window.onscroll()
// window.onscroll = transitionElement;

// affectedElement[1].classList.remove('transit');
// affectedElement[2].classList.remove('transit');
// affectedElement[1].classList.add('transit');
// affectedElement[2].classList.add('transit');