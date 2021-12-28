// lightbox.js

$(document).ready(function(){
    function showLightBox(){
        //라이트박스 보이게
        $('#darken-background').show();
        $('#darken-background').css('top', $(window).scrollTop());
        // 스크롤 못하게
        $('body').css('overflow', 'hidden')
    }

    function hideLightBox(){
        //라이트박스 보이지 않게
        $('#darken-background').hide();

        //스크롤 할수 있게
        $('body').css('overflow','');
    }

    //라이트 박스 제거 이벤트
    $('#darken-background').click(function(){
        hideLightBox();
    });

    //클릭이벤트 연결
    $('.paper').click(function(){ 
        showLightBox();
    });

    //라이트박스 제거 이벤트 보조
    $('#lightbox').click(function(e){
        e.stopPropagation()
    });

});