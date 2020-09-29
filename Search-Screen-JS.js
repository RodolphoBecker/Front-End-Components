jQuery(document).ready(function(){
    
    jQuery('.search-button').on('click', function(event){
        event.preventDefault();
        jQuery('.search-screen').toggleClass('show');
    });

    jQuery('.search-close-button').on('click', function(event){
        event.preventDefault();
        jQuery('.search-screen').removeClass('show');
    });
        
});

jQuery(window).on('load', function(){
    
});

jQuery(window).resize(function(){
    
});

jQuery(window).on('scroll', function () {
    
});


