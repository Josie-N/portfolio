$(function(){ //when website is loaded, execute this function
    //when window on scrolling
    $(window).scroll(function() {
        //if it scrolls dowm more than 100px
        if ($(window).scrollTop() >= 100) {
            //change the icon's css to make it visible
            $('.ui-to-top').css({
              bottom: '55px',
              opacity: 1
            });
        }

        //if it scrolls dowm less than 100px
        if ($(window).scrollTop() < 100){
            //change the icon's css to make it invisible
            $('.ui-to-top').css({
              bottom: '-50px',
              opacity: 0
            });
        }
    });

    //when the icon is clicked
    $('.ui-to-top').click(function(){
        //scroll to top (0px) by using animation (duration is 2000 ms = 2 second)
        $("body").animate({ scrollTop: 0 }, 2000);
    });
});
