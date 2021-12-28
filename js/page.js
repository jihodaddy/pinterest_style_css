$(document).ready(function(){
    $('#main-section').imagesLoaded(function(){
        // jQuery Masonry플러그인
        $('#main-section').masonry({
            itemSelector:'.paper',
            columnWidth: 230,
            isAnimatede: true
        });
    });

});