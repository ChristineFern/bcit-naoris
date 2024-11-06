AOS.init();

 /*$(function () {
            $('#about .expandable').mouseenter(function () {
                 $(this).removeClass('col-md-3');
                 $(this).addClass('col-md-7');
                 $('#about .contractable').removeClass('col-md-6');
                 $(this).find(".video-placeholder").addClass("d-block");
                 $(this).find(".play-video").addClass("d-none");
                 $(this).find(".video-name").addClass("d-block");
                 $('#about .contractable').addClass('col-md-2');
 
             });
             $('#about .expandable').mouseleave(function () {
                 $(this).addClass('col-md-3');
                 $(this).removeClass('col-md-7');
                 $(this).find(".video-placeholder").removeClass("d-block");
                 $(this).find(".video-name").removeClass("d-block");
                 $(this).find(".play-video").removeClass("d-none");
                 $('#about .contractable').addClass('col-md-6');
                 $('#about .contractable').removeClass('col-md-2');
 
             });

            $('#token .expandable').mouseenter(function () {
                $(this).addClass('col-md-9');
                $(this).removeClass('col-md-3');
                $('#token .contractable').addClass('col-md-3');
                $('#token .contractable').removeClass('col-md-9');
                $('#token .move-out-content').addClass('slide-out');

            }
            );
            $('#token .expandable').mouseleave(function () {
                $(this).addClass('col-md-3');
                $(this).removeClass('col-md-9');
                $('#token .contractable').addClass('col-md-9');
                $('#token .contractable').removeClass('col-md-3');
                $('#token .move-out-content').removeClass('slide-out');


            }
            );

        });*/

$(document).ready(function () {
    $('#token .expandable').mouseenter(function () {
        $(this).removeClass('col-md-3').addClass('col-md-9');
        $('#token .contractable').removeClass('col-md-9').addClass('col-md-3');
        $('#token .move-out-content').addClass('slide-out');
        $('.token-img').css('display', 'block'); 
    });

    $('#token .expandable').mouseleave(function () {
        $(this).removeClass('col-md-9').addClass('col-md-3');
        $('#token .contractable').removeClass('col-md-3').addClass('col-md-9');
        $('#token .move-out-content').removeClass('slide-out');
        $('.token-img').css('display', 'none'); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbarNav');
    const targetElement = document.querySelector('#languageDropdown'); 
    function hideTarget() {
      targetElement.style.display = 'none';
    }
  
    function showTarget() {
      targetElement.style.display = '';
    }
  
   
    navbar.addEventListener('show.bs.collapse', hideTarget);
    navbar.addEventListener('hide.bs.collapse', showTarget);
  
    
    if (navbar.classList.contains('show')) {
      hideTarget();
    } else {
      showTarget();
    }
  });
  
  