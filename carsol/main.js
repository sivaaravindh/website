$('.testimonial-slide').owlCarousel({
   items:2,  
   loop:true,
   autoplay:true,
   center:true,
   responsive:{       
       0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
   }
});
$('.logo').owlCarousel({
    items: 1,
	center:true,
	autoplay:true,
    margin: 20,
    loop: true,
	 responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});



