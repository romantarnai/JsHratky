let menu_open = false;
var navbar = document.getElementById('nav');

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