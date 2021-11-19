let menu_open = false;
var navbar = document.getElementById('nav');
var link1 = document.querySelector('.burger-link1');
var link2 = document.querySelector('.burger-link2');
var link3 = document.querySelector('.burger-link3');

link1.addEventListener("click", ()=>{
    if(menu_open){
        burger();
        setTimeout(function() { smoothScroll('.chart'); }, 250);
    }
    else{
        smoothScroll('.chart');
    }
})
link2.addEventListener("click", ()=>{
    if(menu_open){
        burger();
        setTimeout(function() { smoothScroll('.mapa'); }, 250);
    }
    else{
        smoothScroll('.mapa');
    }
})
link3.addEventListener("click", ()=>{
    if(menu_open){
        burger();
        setTimeout(function() { smoothScroll('.gallery'); }, 250);
    }
    else{
        smoothScroll('.gallery');
    }
})


const burger_menu = document.getElementById('burger').addEventListener("click", ()=>{
    burger();
})

window.addEventListener("resize", ()=>{
    if(window.innerWidth > 768){
        if(menu_open){
            burger();
        }
    }
})

function burger(){
    if(!menu_open){
        navbar.classList.add('nav-clicked')
        menu_open = true;
    }
    else{
        navbar.classList.remove('nav-clicked')
        menu_open = false;
    }
}

