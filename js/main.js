$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    
    effect: 'fade',

    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    
  })

  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    
    

    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    
  })

  var menuButton = $('.menu-button');
  menuButton.on('click' , function() {
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
  });


  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal)

  function openModal () {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible');
    $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible');
  }
  function closeModal (event) {
    event.preventDefault ();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible'); 
  }
  // Обработка формы
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "More that 2 symbols",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "We need your phone address to contact you",
          phone: "Your phone number must be in the format of 89999999999",
          minlength: "Your phone number must be at least in 10 digitals",

        },
      },
    });
  })
  $('.phone').mask('+7 (000)-000-00-00');
  $( ".phone" ).validate({
    rules: {
      field: {
        required:"More that 10 symbols",
        minlength: "More that 10 symbols",
        
      }
    }
  });
  
  


  AOS.init();
    
});


