$(document).ready(function(){
  $('.carousel__go').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  dots: false,
  prevArrow:'<button type="button" class="slick-prev"><img src="../img/left.svg"></button>',
  nextArrow:'<button type="button" class="slick-next"><img src="../img/sol-righ.png"></button>'

  });
  
  /* $('.catalog__a').each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog__item').toggleClass('catalog__item_active');
        $('.catalog__item2').toggleClass('catalog__item2_active');
      })
    })

  $('.catalog-item__back').each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog__item').toggleClass('catalog__item_active');
        $('.catalog__item2').toggleClass('catalog__item2_active');
      })
    }) */


  function att(item){
    $(item).each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog__item').eq(i).toggleClass('catalog__item_active');
        $('.catalog__item2').eq(i).toggleClass('catalog__item2_active');
      })
    });
  };
  att('.catalog__a');
  att('.catalog-item__back');


  $('ul.catalog__wrapper').on('click', 'li:not(.catalog__text_active)', function() {
    $(this)
      .addClass('catalog__text_active').siblings().removeClass('catalog__text_active')
      .closest('div.container').find('div.catalog_cont').removeClass('catalog_cont_active').eq($(this).index()).addClass('catalog_cont_active');
  });

});


