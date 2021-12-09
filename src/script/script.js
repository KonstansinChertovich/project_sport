$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1100,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/left.png" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/right.png" alt="arrow"></button>'
    });

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
  });