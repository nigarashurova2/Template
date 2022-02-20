//   drop-menu
function dropMenuToggle(){
    const toggleMenu = document.querySelector(".navbar-content");
    toggleMenu.classList.toggle("dropdown_menu_styling");
  }

  
//  submenu 
function submenuTrigger() {
    const submenuTrigger = document.querySelector(".dropdown_toggle");
    submenuTrigger.classList.toggle("submenu-styling");
}



//   scroll
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');   
    header.classList.toggle("sticky", window.scrollY > 0);
})

// owl-carousel - Main Section

$('#main_owl_carousel').owlCarousel({
    loop:true,
    margin:0,
    dots: false,
    responsiveClass:true,
    autoplay : 800,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }
})

 // owl-carousel - Team Section

 $('#owl_carousel2').owlCarousel({
    loop:true,
    margin: 15,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
})

// owl-carousel - Testimonials Section

$('#owl_carousel3').owlCarousel({
    loop:true,
    margin:0,
    dots: false,
    responsiveClass:true,
    autoplay : 200,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})

 // owl-carousel - Client Section

 $('#owl_carousel').owlCarousel({
    loop:true,
    margin:0,
    dots: false,
    responsiveClass:true,
    autoplay : 100,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:false
        }
    }
})

// Counter Fact Section
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
    counter.innerText = '0';

    const uptadeCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 250;

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(uptadeCounter, 1);
        } else {
            counter.innerText = target;
        }
    };
    uptadeCounter();
});