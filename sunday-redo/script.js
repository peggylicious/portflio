let hamburger = document.getElementsByClassName('hamburger')[0];
        hamburger.addEventListener("click", function(){
            document.getElementsByClassName("left-nav")[0].style.width = "200px";
            document.getElementsByClassName('cont-cont')[0].style.marginLeft = "200px";
            document.getElementById('over-lay').style.display = "block";
            document.getElementsByTagName('body')[0].style.overflow = "hidden";
        })
        
        // Close Left Navigation
        let closeNav = document.querySelectorAll('.close-nav');
        closeNav[0].addEventListener('click', function(){
            document.getElementsByClassName("left-nav")[0].style.width = "0px";
            document.getElementsByClassName('cont-cont')[0].style.marginLeft = "0px";
            document.getElementById('over-lay').style.display = "none";
            document.getElementsByTagName('body')[0].style.overflow = "visible";
        })
        
        let dotted = document.getElementsByClassName('dotted-circles')[0];
        dotted.addEventListener("click", function(){
            document.getElementsByClassName("right-nav")[0].style.width = "200px";
            document.getElementsByClassName('cont-cont')[0].style.left = "-200px";
            document.getElementById('over-lay').style.display = "block";
            document.getElementsByTagName('body')[0].style.overflow = "hidden";
        })
        closeNav[1].addEventListener('click', function(){
            document.getElementsByClassName("right-nav")[0].style.width = "0px";
            document.getElementsByClassName('cont-cont')[0].style.left = "0px";
            document.getElementById('over-lay').style.display = "none";
            document.getElementsByTagName('body')[0].style.overflow = "visible";

        })