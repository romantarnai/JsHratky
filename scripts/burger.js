let menu_open = false;
var navbar = document.getElementById('nav');
var links = document.querySelectorAll('.link-text');

/* fix for scroll */
for(var link of links){
    link.addEventListener("click", ()=>{
        if(menu_open){
            burger();
            setTimeout(function() { smoothScroll('.chart', 1000); }, 250);
        }
        else{
            smoothScroll('.chart', 1000);
        }
    })
}

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

