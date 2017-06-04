$(document).ready(function($) {
    $('.apki').click(function() {
        if (this.paused) {
        	this.play();
        }
        else {
        	this.pause();
        }
    });
});


jQuery(document).ready(function( $ ) {
    $("#menu").mmenu({
        "extensions": [
            "pagedim-black"
        ],
        "navbars": [
            {
                "position": "top",
                "content": [
                    "searchfield"
                ]
            },
            {
                "position": "top"
            },
        ]
    });
});


$(document).ready(function(){
    $('.hamburger').click(function(){
        $(this).addClass('is-active');
    })
    $('#mm-blocker').click(function(){
        if($('.hamburger').hasClass('is-active')) {
            $('.hamburger').removeClass('is-active');
        }
    })
})

$(document).ready(function(){
    $('body').find('a').each(function(){
        var attr = $(this).attr('href');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).attr('target', '_blank');
        }
    });
});
