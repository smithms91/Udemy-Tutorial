$(document).ready(function() {

  // Banner Animate
  $(".logo").animate({
    "top": "0px",
    "opacity": "1"
  },1000);

  $(".banner .text").animate({
    "bottom": "0px",
    "opacity": "1"
  }, 1000);

  // What We Do
  $(".service_section h1").animate({
    "top": "0px",
    "opacity": "1"
  }, 1000);

  $(".service").animate({
    "bottom": "0px",
    "opacity": "1"
  }, 1000)


  // Scroll Animates
  $(document).scroll(function() {
    console.log(window.scrollY);

    if (window.scrollY > 600) {

      $(".recent_projects h1").animate({
        "top": "0px",
        "opacity": "1"
      }, 1000);
      
      $(".project").animate({
        "opacity": "1"
      }, 1500)
      
    };
    
    if (window.scrollY > 1300) {

      $(".team_section h1").animate({
        "top": "0px",
        "opacity": "1"
      }, 1000);

      $(".team").animate({
        "bottom": "0px",
        "opacity": "1"
      }, 1000);

    };

    if (window.scrollY > 1700) {

      $(".numbers_text").animate({
        "top": "0px",
        "opacity": "1"
      }, 1000);

      $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).data('value')
          }, {
            duration: 1000,
            step: function (now) {                      
              $(this).text(Math.ceil(now));
            }
        });
      });
    }

    if (window.scrollY > 2100) {

      $(".top_text").animate({
        "top": "0px",
        "opacity": "1"
      }, 1000);

      $(".contact_section form").animate({
        "bottom": "0px",
        "opacity": "1"
      }, 1000);

    }

  })
  // End Scroll Animate

});