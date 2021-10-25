



$(".shan").click(function(){



   $(".collapse").toggleClass("don")
 
 
 
 
 });
    


$('.service-slider').slick({
 arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,


    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },
     
    ]



  });





  $('.port-slider').slick({
    arrows:true,
       slidesToShow: 3,
       slidesToScroll: 1,
       prevArrow:'<i class="fas fa-angle-left prev"></i>',
      
       nextArrow:'<i class="fas fa-angle-right next"></i>',




       responsive: [
         {
           breakpoint: 576,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             autoplay:true,
            
           }
         },
        
       ]
   



     });
   
   
   



     $('.testi-slider').slick({
      arrows:true,
         slidesToShow: 2,
         slidesToScroll: 1,
          prevArrow:'<i class="fas fa-angle-left sagor"></i>',
        
          nextArrow:'<i class="fas fa-angle-right nipa"></i>',




          responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay:true,
               
              }
            },
           
          ]
      
   









       });
     
     
     
  





       $('.blog-slider').slick({
        arrows:true,
           slidesToShow: 3,
           slidesToScroll: 1,
             prevArrow:'<i class="fas fa-angle-left river"></i>',
          
             nextArrow:'<i class="fas fa-angle-right pond"></i>',




             responsive: [
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay:true,
                 
                }
              },
             
            ]







         });
       
       









         $('#gotop').gotop({
            customHtml: '<i class="fa fa-angle-up fa-2x"></i>',
           bottom: '2em',
           right: '2em'
        });
        

























