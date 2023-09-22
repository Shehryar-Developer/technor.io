$(document).ready(function() {
    var navbar = $('.navbar');

    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        navbar.addClass('dark');
        // navbar.removeClass('light');
      } else {
        navbar.removeClass('dark');
        // navbar.addClass('light');

      }
    });
  });
 
  if (window.innerWidth < 1000) {
    var navbar = document.querySelector(".navbar");
    navbar.style.position = ""; // Remove the "position" property
  }



      document.addEventListener("DOMContentLoaded", function () {
        var reveals = document.querySelectorAll(".reveal");
        var isRevealed = false;
        window.addEventListener("scroll", reveal);
    
        function reveal() {
          if (!isRevealed) {
            for (var i = 0; i < reveals.length; i++) {
              var windowheight = window.innerHeight;
              var revealtop = reveals[i].getBoundingClientRect().top;
              var revealpoint = 150;
    
              if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add("active");
              } else {
                reveals[i].classList.remove("active");
              }
            }
    
            isRevealed = Array.from(reveals).every(function (el) {
              return el.classList.contains("active");
            });
    
            if (isRevealed) {
              window.removeEventListener("scroll", reveal);
            }
          }
        }
    
        reveal();
      });
    {/* </script> */}



    document.addEventListener("DOMContentLoaded", function () {
      var reveals = document.querySelectorAll(".contentp");
      var isRevealed = false; 
      window.addEventListener("scroll", content);
  
      // Define the reveal function
      function content() {
        if (!isRevealed) {
          for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;
  
            if (revealtop < windowheight - revealpoint) {
              reveals[i].classList.add("active");
            } else {
              reveals[i].classList.remove("active");
            }
          }
  
          isRevealed = Array.from(reveals).every(function (el) {
            return el.classList.contains("active");
          });
  
          if (isRevealed) {
            window.removeEventListener("scroll",content);
          }
        }
      }
  
      reveal();
    });
  {/* </script> */}

  document.addEventListener("DOMContentLoaded", function () {
    var reveals = document.querySelectorAll(".contentn");
    var isRevealed = false; 
    window.addEventListener("scroll", contentn);

    function contentn() {
      if (!isRevealed) {
        for (var i = 0; i < reveals.length; i++) {
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;

          if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }

        isRevealed = Array.from(reveals).every(function (el) {
          return el.classList.contains("active");
        });

        if (isRevealed) {
          window.removeEventListener("scroll",contentn);
        }
      }
    }

    reveal();
  });
{/* </script> */}

