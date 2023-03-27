$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};
    
    
    
    //button clear input
    $('.js-button-clear').on('click', function() {
        $(this).next('.form-input').val('');
        return false;
    })

    //swipebox
    if (!!$('[data-swipebox]').offset()) {
        $('[data-swipebox]').swipebox();
    }
    
    //filter side
    $('.js-btn-filter-toggle').on('click', function() {
        $('.main-filter-box .js-btn-toggle').click();
        return false;
    })
    $('.js-filter-section:not(.section-open)>.js-filter-section-content').hide(0);
    $('.js-filter-section.section-open>.js-filter-section-button').addClass('active');
    $('.js-filter-section .js-filter-section-button').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
                .parent('.js-filter-section').removeClass('section-open')
                .children('.js-filter-section-content').slideUp(200);
        } else {
            $(this).addClass('active')
                .parent('.js-filter-section').addClass('section-open')
                .children('.js-filter-section-content').slideDown(200);
        }
        return false;
    })
    
    
    //sort
    $('.catalog-actions-box .btn-sort').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).toggleClass('sort-up');
        } else {
            $('.catalog-actions-box .btn-sort.active').removeClass('active').removeClass('sort-up');
            $(this).addClass('active');
        }
        return false;
    })
    
    
    //catalog view
    $('.catalog-actions-box').each(function() {
        if ($(this).find('.button-view-compact').hasClass('active')) {
            $(this).next('.catalog-box').addClass('catalog-compact');
        }
        if ($(this).find('.button-view-rows').hasClass('active')) {
            $(this).next('.catalog-box').addClass('catalog-rows');
        }
    })
    $('.catalog-actions-box .actions-wrap .button-view-compact').on('click', function() {
        if ($(this).hasClass('active')) {} else {
            $(this).parent('.actions-wrap').find('.active').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.catalog-actions-box').next('.catalog-box').removeClass('catalog-rows').removeClass('catalog-compact').addClass('catalog-compact');
        }
        return false;
    })
    $('.catalog-actions-box .actions-wrap .button-view-rows').on('click', function() {
        if ($(this).hasClass('active')) {} else {
            $(this).parent('.actions-wrap').find('.active').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.catalog-actions-box').next('.catalog-box').removeClass('catalog-rows').removeClass('catalog-compact').addClass('catalog-rows');
        }
        return false;
    })
    $('.catalog-actions-box .actions-wrap .button-view-tiles').on('click', function() {
        if ($(this).hasClass('active')) {} else {
            $(this).parent('.actions-wrap').find('.active').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.catalog-actions-box').next('.catalog-box').removeClass('catalog-rows').removeClass('catalog-compact');
        }
        return false;
    })


    //popup block
    $('.js-popup-wrap .js-btn-toggle').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('body').removeClass('menu-show');
            $('body').removeClass('filter-show');
            $('.js-popup-wrap').removeClass('popup-right');
        } else {
            $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
            $(this).addClass('active');
            if ($(this).parent().hasClass('main-menu-wrap')) {
                $('body').addClass('menu-show');
            }
            if ($(this).parent().hasClass('main-filter-box')) {
                $('body').addClass('filter-show');
            }
            pLeft = $(this).parent('.js-popup-wrap').find('.js-popup-block').offset().left;
            pWidth = $(this).parent('.js-popup-wrap').find('.js-popup-block').outerWidth();
            pMax = pLeft + pWidth;
            if ( pMax > $('.wrap').width() ) {
                $(this).parent('.js-popup-wrap').addClass('popup-right');
            } else {
                $('.js-popup-wrap').removeClass('popup-right');
            }
        }
        return false;
    })
    $('.js-popup-wrap .js-btn-close').on('click', function() {
        $(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
        $('.js-popup-wrap').removeClass('popup-right');
        $('body').removeClass('menu-show');
        $('body').removeClass('filter-show');
        return false;
    })
    $(document).click(function(event) {
        if ($(event.target).closest(".js-popup-block").length) return;
        $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
        $('.js-popup-wrap').removeClass('popup-right');
        $('body').removeClass('menu-show');
        $('body').removeClass('filter-show');
        event.stopPropagation();
    });
    $('.js-popup-wrap').each(function() {
        if ($(this).hasClass('js-popup-select')) {
            if ($(this).find('.js-popup-block').find('.active').length>0) {
                $(this).find('.js-btn-toggle').addClass('selected');
                var currentSelect = $(this).find('.js-popup-block').find('.active').html();
                $(this).find('.js-btn-toggle').children('.button-title').html(currentSelect);
            } else {
                $(this).find('.js-btn-toggle').removeClass('selected');
            }
        }
    })
    $('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
        if ($(this).hasClass('active')) {} else {
            $(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
            $(this).addClass('active');
            $('.js-tab-block').removeClass('active');
            $('.js-tabs-nav').each(function() {
                $('.js-tab-block[data-tab*="'+$(this).find('.js-popup-block').find('.active').attr('data-tab')+'"]').addClass('active');
            })
        }
        $('.js-popup-wrap').each(function() {
            if ($(this).hasClass('js-popup-select')) {
                if ($(this).find('.js-popup-block').find('.active').length>0) {
                    $(this).find('.js-btn-toggle').addClass('selected');
                    var currentSelect = $(this).find('.js-popup-block').find('.active').html();
                    $(this).find('.js-btn-toggle').children('.button-title').html(currentSelect);
                } else {
                    $(this).find('.js-btn-toggle').removeClass('selected');
                }
            }
        })
        $(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
        return false;
    })

    //tabs
    $('.js-tabs-nav').each(function() {
        $('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
    })
    $('.js-tab-title').each(function() {
        if ($(this).hasClass('active')) {
            $(this).next('.js-tab-content').show(0);
        }
    })
    $('.js-tabs-nav').on('click', 'a[data-tab]', function() {
        if ($(this).hasClass('active')) {} else {
            $('.js-tab-block').removeClass('active');
            $(this).parents('.js-tabs-nav').find('.active').removeClass('active');
            $(this).addClass('active');
            $('.js-tabs-nav').each(function() {
                $('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
            })
        }
        return false;
    })
    $('.js-tab-title').on('click' , function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').next('.js-tab-content').slideUp(200);
        } else {
            $(this).addClass('active').next('.js-tab-content').slideDown(200);
        }
    })


    //frm counter   
    $('.js-counter .js-button-counter-minus').on('click', function () {
        var cnt = $(this).parents('.js-counter').find('.js-input-counter').val();
        cnt = parseInt(cnt);
        if (cnt > 0) {
            $(this).parents('.js-counter').find('.js-input-counter').val(cnt - 1);
        }
        return false;
    })
    $('.js-counter .js-button-counter-plus').on('click', function () {
        var cnt = $(this).parents('.js-counter').find('.js-input-counter').val();
        $(this).parents('.js-counter').find('.js-input-counter').val(cnt - 1 + 2);
        return false;
    })
    
    //item catalog cart
    $('.item-tile-catalog .tile-add-wrap .btn').on('click', function() {
        $(this).parents('.item-tile-catalog').addClass('in-cart');
        return false;
    })


    //main-slider-box
    if (!!$('.main-slider-box').offset()) {
        $('.main-slider-box .slider').slick({
            dots: true,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 3000,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        prevArrow: false,
                        nextArrow: false,
                        dots: false,
                    }
                },
            ]
        });
    }


    //catalog-inner-box
    if (!!$('.catalog-inner-box').offset()) {
        $('.catalog-inner-box .slider').slick({
            dots: false,
            slidesToShow: 5,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-border ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-border ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
            ]
        });
    }

    //logos-box
    if (!!$('.logos-box').offset()) {
        $('.logos-box .slider').slick({
            dots: false,
            slidesToShow: 6,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-small ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-small ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
            ]
        });
    }


    //gallery-slider-box
    if (!!$('.gallery-slider-box').offset()) {
        $('.gallery-slider-box .slider').slick({
            dots: false,
            slidesToShow: 4,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            rows: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-border ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-border ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        dots: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        dots: true,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        prevArrow: false,
                        nextArrow: false,
                        dots: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        prevArrow: false,
                        nextArrow: false,
                        dots: true,
                    }
                },
            ]
        });
    }
    
    
    


    //#range-slider
    if (!!$('#range-slider').offset()) {
        $('#range-slider').slider({
            range: true,
            min: 3051,
            max: 5983,
            values: [3800, 5600],
            slide: function (event, ui) {
                $('#range-slider-min').val(ui.values[0]);
                $('#range-slider-max').val(ui.values[1]);
            }
        })
        $('#range-slider-min').val($('#range-slider').slider('values', 0));
        $('#range-slider-max').val($('#range-slider').slider('values', 1));
        $('#range-slider-min').bind('focusout', function () {
            if ($(this).val() > $('#range-slider').slider('values', 1)) {
                $(this).val($('#range-slider').slider('values', 0));
            }
            $('#range-slider').slider('values', 0, $(this).val());
        })
        $('#range-slider-max').bind('focusout', function () {
            if ($(this).val() < $('#range-slider').slider('values', 0)) {
                $(this).val($('#range-slider').slider('values', 1));
            }
            $('#range-slider').slider('values', 1, $(this).val());
        })
        $('#range-slider-min').bind('keypress', function (e) {
            if (e.keyCode == 13) {
                if ($(this).val() > $('#range-slider').slider('values', 1)) {
                    $(this).val($('#range-slider').slider('values', 0));
                }
                $('#range-slider').slider('values', 0, $(this).val());
            }
        })
        $('#range-slider-max').bind('keypress', function (e) {
            if (e.keyCode == 13) {
                if ($(this).val() < $('#range-slider').slider('values', 0)) {
                    $(this).val($('#range-slider').slider('values', 1));
                }
                $('#range-slider').slider('values', 1, $(this).val());
            }
        })
    }
    $('#widget').draggable();
	
});

