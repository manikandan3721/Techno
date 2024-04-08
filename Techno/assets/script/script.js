const headerPrimary =document.querySelector(".header-primary");
const logo = document.querySelector(".logo-img");
const allLinks = document.querySelectorAll("a:link");
const copyrightYear = document.querySelector(".footer-copyright span");

const menuIcon = document.querySelector('.btns-menu');

// sticky navigation
const headerVal = 100;

window.addEventListener('scroll', () => {
    const currentScroll= window.scrollY > headerVal;
    headerPrimary.classList.toggle('header-sticky', currentScroll)
    logo.src=`./assets/images/logo-${currentScroll ? 2 : 1}.png`
})

// mobile nav
menuIcon.addEventListener('click',()=> {
    headerPrimary.classList.toggle('nav-open')
})

// carousel
$(document).ready(function(){
    $(".owl-carousel").each(function(index){
    
        $(this).owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            responsive:{
                0:{
                    items: 1
                },
                576:{  
                    items: 2
                },
                768:{
                    items: 3
                },
                992:{
                    items: 3,
                },
                1200:{  
                    items: 3
                }
            }
        });
      });
           
})

// smooth scrolling
allLinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        const href = link.getAttribute("href")
        if (href === "#" ) {
            window.scrollTo({
                top:0,
                behavior:"smooth"
            })
        }
    })
})

// copyright
copyrightYear.textContent = new Date().getFullYear();

