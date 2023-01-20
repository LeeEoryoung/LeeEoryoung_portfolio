// fullpage.js
$(document).ready(function () {
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        anchors: ['welcome','aboutme', 'skills', 'portfolio', 'practical', 'contact'],
        bigSectionsDestination: top,
        parallax: true,
        scrollOverflow: true,
    });
});


// welcome page mouse effect
let x = 0;
let y = 0;
let mouseX = 0;
let mouseY = 0;
let speed = 0.001;
let bgArr;
// 마우스 커스텀 커서
let cursorX = 0;
let cursorY = 0;


$(function(){
    // 마우스 대상에 올렸을때
    $('.gnb_menu a').mouseover(function(){
        $('#mouseCursor > div').addClass('on')
    });
    $('.profile_image > img').mouseover(function(){
        $('#mouseCursor > div').addClass('on')
    });
    $('.profile_image > .tooltip').mouseover(function(){
        $('#mouseCursor > div').addClass('on')
    });
    $('.main_menu').mouseover(function(){
        $('#mouseCursor > div').addClass('on')
    });
    $('.sub_menu .sub_item').mouseover(function(){
        $('#mouseCursor > div').addClass('on')
    });
    $('.modal_text .close_btn').mouseover(function(){
        $('#mouseCursor > div').addClass('on')
    });
    $('.slide_btns > button').mouseover(function(){
        $('#mouseCursor > div').addClass('on')
    });
    $('.imgs_wrap .overlay').mouseover(function(){
        $('#mouseCursor > div').addClass('on')
    });
    $('.contact_text li:last-child').mouseover(function(){
        $('#mouseCursor > div').addClass('on')
    });
    // 마우스 대상에서 빠져나왔을때
    $('.gnb_menu a').mouseout(function(){
        $('#mouseCursor > div').removeClass('on')
    });
    $('.profile_image > img').mouseout(function(){
        $('#mouseCursor > div').removeClass('on')
    });
    $('.profile_image > .tooltip').mouseout(function(){
        $('#mouseCursor > div').removeClass('on')
    });
    
    $('.main_menu').mouseout(function(){
        $('#mouseCursor > div').removeClass('on')
    });
    $('.sub_menu .sub_item').mouseout(function(){
        $('#mouseCursor > div').removeClass('on')
    });
    $('.modal_text .close_btn').mouseout(function(){
        $('#mouseCursor > div').removeClass('on')
    });
    $('.contact_text li:last-child').mouseout(function(){
        $('#mouseCursor > div').removeClass('on')
    });
})


window.onload = function () {
    // welcome page background 도형 움직임 effect
    bgArr = document.getElementsByClassName("bgImg");
    // 마우스 커스텀 커서
    const cursorParent = document.getElementById('mouseCursor');

    window.addEventListener("mousemove", mouseFunc, false);
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("click", mouseFunc, false);

    function mouseFunc(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }

    function mouseFunc(e) {
        x = (e.clientX - window.innerWidth / 2);
        y = (e.clientY - window.innerHeight / 2);
    }

    // 마우스 커스텀 커서
    function mousemove(e) {
        cursorX = e.pageX - cursorParent.offsetWidth / 2;
        cursorY = e.pageY - cursorParent.offsetHeight / 2;
        cursorParent.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    }

    loop();
}

function loop() {
    mouseX += (x - mouseX) * speed;
    mouseY += (x - mouseY) * speed;

    bgArr[2].style.transform = "translate(" + -(mouseX / 5) + "px," + -(mouseY / 5) + "px)";
    bgArr[3].style.transform = "translate(" + -(mouseX / 2) + "px," + -(mouseY / 7) + "px)";
    bgArr[4].style.transform = "translate(" + (mouseX / 3) + "px," + (mouseY / 3) + "px)";

    window.requestAnimationFrame(loop);
}




// trigger
$(function () {
    $('.trigger').click(function () {

        $(this).toggleClass("active");
        $('nav').toggleClass("active");
    })
});

$(function(){
    $('.gnb_menu > a').click(function(){

        $('nav').toggleClass("active");
        $('.trigger').toggleClass("active");
    })
})


// skill mindmap,modal
$(function () {
    $('.mindmap .programing').click(function () {
        $('#proSubMenu1').toggleClass('active');
        $('#proSubMenu2').toggleClass('active');
        $('#proSubMenu3').toggleClass('active');
        $('#proSubMenu4').toggleClass('active');
    });
    $('.mindmap .design').click(function () {
        $('#desginSubMenu1').toggleClass('active');
        $('#desginSubMenu2').toggleClass('active');
        $('#desginSubMenu3').toggleClass('active');
    });
    $('.mindmap .study').click(function () {
        $('#studySubMenu1').toggleClass('active');
        $('#studySubMenu2').toggleClass('active');
        $('#studySubMenu3').toggleClass('active');
        $('#studySubMenu4').toggleClass('active');
        $('#studySubMenu5').toggleClass('active');
    });

    // modal
    $('#proSubMenu1').click(function () {
        $('.modal_html').addClass('active');
    });
    $('#proSubMenu2').click(function () {
        $('.modal_css').addClass('active');
    });
    $('#proSubMenu3').click(function () {
        $('.modal_js').addClass('active');
    });
    $('#proSubMenu4').click(function () {
        $('.modal_cafe24').addClass('active');
    });
    $('#desginSubMenu1').click(function () {
        $('.modal_adoby').addClass('active');
    });
    $('#desginSubMenu2').click(function () {
        $('.modal_zeplin').addClass('active');
    });
    $('#desginSubMenu3').click(function () {
        $('.modal_figma').addClass('active');
    });

    $('.close_btn').click(function () {
        $('.modal').removeClass('active');
    });
});

const swiper = new Swiper(".swiper-container", {
    slidePerView: 1,
    speed: 500,
    loop: true,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});