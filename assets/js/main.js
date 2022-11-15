
//function for sliding images
var index = 0;
const slides = document.querySelectorAll('.home-img');


function changeSlide(){

  if(index < 0){
    index = slides.length-1;
  }
  
  if(index > slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
  }
  
  slides[index].style.display= "block";
  
  index++;
  
  setTimeout(changeSlide,5000);
  
}

changeSlide();


/* SCROLL TO TOP FUNCTION */


let toUP = document.querySelector(".scrollTop");

window.onscroll = function() {scrollFunction()};

 function scrollFunction(){
if (document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050){
    toUP.style.display = "block";
}else {
    toUP.style.display = "none";
}
};
scrollFunction();

toUP.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) =>{
scrollFunction();
})



/*FAQ */

const faqHeaders = document.querySelectorAll(".faq-header")
faqHeaders.forEach(faqHeaders => {
  faqHeaders.addEventListener("click", event => {
    faqHeaders.classList.toggle("active");
    const faqAnswer = faqHeaders.nextElementSibling;
    if(faqHeaders.classList.contains("active")){
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
    }
    else{
      faqAnswer.style.maxHeight = 0;
    }
});
});

/*FAQ */
