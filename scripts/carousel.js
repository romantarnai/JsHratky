let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const bullets = document.getElementsByClassName('car-bull');
const totalSlides = slides.length;

/* update func*/
function UpdateSlides(){
    for(let slide of slides){
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_item--hidden');
    }

    slides[slidePosition].classList.add('carousel_item--visible');

    for(let bullet of bullets){
        bullet.classList.remove('car-bull-choose')
    }
    bullets[slidePosition].classList.add('car-bull-choose')
}

/* moving functions */
function MoveToNext(){
    if(slidePosition < totalSlides - 1){
        slidePosition++;
    }
    else{
        slidePosition = 0;
    }

    UpdateSlides()
}
function MoveToPrev(){
    if(slidePosition > 0){
        slidePosition--;
    }
    else{
        slidePosition = totalSlides -1;
    }

    UpdateSlides()
}
function MoveTo(number){
    slidePosition = number;
    UpdateSlides();
}

document.getElementById('carousel_button--next').addEventListener("click", ()=>{
    MoveToNext()
})
document.getElementById('carousel_button--prev').addEventListener("click", ()=>{
    MoveToPrev()
})

/* auto moving */
var interval = window.setInterval(autoMove, 8500);

function autoMove(){
    MoveToNext();
}