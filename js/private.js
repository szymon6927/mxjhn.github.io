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
