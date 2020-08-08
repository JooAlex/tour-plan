$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    effect: "coverflow",
    // Navigation using keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    // Navigation using keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  $(".map-loader").one('mouseover', () => {
    $(".map").append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.041326362805!2d98.2925420506481!3d7.8907454942874455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503b7bfcd9f903%3A0xf7065fac1e3d7c48!2sDoubleTree%20by%20Hilton%20Phuket%20Banthai%20Resort!5e0!3m2!1sru!2sru!4v1596824232277!5m2!1sru!2sru" width="100%" height:"100%" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');
    $(".map-loader").css("display", "none")
  });
  
  $('.newsletter').parallax({imageSrc: 'img/newsletter-bg.jpg'});
  
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Клик по кнопке меню");
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Обработка форм
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please enter your name",
          minlength: "Name must be at least 2 letters long",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address is in the wrong format",
        },
        phone: {
          required: "Phone is required",
        },
      },
    });
  });
  
  AOS.init();

  $('.phone').mask('+7 (000) 000-00-00');
});