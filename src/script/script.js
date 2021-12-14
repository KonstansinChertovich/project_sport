$(document).ready(function(){
// Slider
    $('.carousel__inner').slick({
        speed: 1100,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/left.png" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/right.png" alt="arrow"></button>'
    });

// Tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function myToggle (item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__cart-default').eq(i).toggleClass('catalog-item__cart-default_active');
                $('.catalog-item__cart').eq(i).toggleClass('catalog-item__cart_active');
            });
        });
    }

    myToggle('.catalog-item__link');
    myToggle('.catalog-item__back');

// Modal
    const btns = document.querySelectorAll(".promo button"),
          owerlay = document.querySelector('.owerlay'), 
          modalClose = owerlay.querySelectorAll('.modal__close'),  
          modalConsultation = owerlay.querySelector('#consultation'),
          modalOrder = owerlay.querySelector('#order'),
          modalThanks = owerlay.querySelector('#thanks'),
          sectionCtalog = document.querySelector('.catalog'),
          btnsMini = sectionCtalog.querySelectorAll('.button_mini'),
          catalogCart = sectionCtalog.querySelectorAll('.catalog-item__subtitle');

    function myModal (btns, modal) {
        btns.forEach( (item, i) => {
            item.addEventListener('click', () => {
                owerlay.classList.add('owerlay_active');
                modal.classList.remove('modal_hiden');
                modal.classList.add('modal_active');

                if(item.classList.contains('button_mini')) {
                    modal.querySelector('.modal__descr').innerText = catalogCart[i].innerText;
                }
            });
        });
    
        modalClose.forEach(item => {
            item.addEventListener('click', () => {
                if(modal.classList.contains('modal_active') && owerlay.classList.contains('owerlay_active')) {
                    owerlay.classList.remove('owerlay_active');
                    modal.classList.remove('modal_active');
                    modal.classList.add('modal_hiden');
                }
            });
        });
    }
    myModal(btns, modalConsultation);
    myModal(btns, modalConsultation);
    myModal(btnsMini, modalOrder);

// validate form
    function validateForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: "required"
            },
            messages: {
                name: {
                    required: "Введите ваше имя!",
                    minlength: jQuery.validator.format("Минимальное кол-во символов {0}!")
                  },
                phone: "Введите номер телефона!",
                email: {
                  required: "Введите ваш email!",
                  email: "Проверьте формат эл. почты"
                }
              }
        });
    }
    validateForm('#consultation-form');
    validateForm('#consultation form');
    validateForm('#order form');
  });