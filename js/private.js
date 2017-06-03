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
