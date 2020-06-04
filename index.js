$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.child').each( function(i){
    
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = window.scrollY + window.innerHeight;
            console.log(bottom_of_window);
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},1000);
            } 
             
        }); 
    }); 
});