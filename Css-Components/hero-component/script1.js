let hero = document.querySelector('.hero');
let hero1 = document.querySelector('.hero1');
let hero2 = document.querySelector('.hero2');

function showNext(){
    if(hero.className === 'hero'){
        hero.classList.remove('hero');
        hero.classList.add('hero1');
        console.log(hero);
    }else if(hero.className == 'hero1'){
        hero.classList.remove('hero1');
        hero.classList.add('hero2');
    }else{
        hero.classList.remove('hero2');
        hero.classList.add('hero');
    }
}
window.addEventListener('click', function(e){
    showNext();
})
