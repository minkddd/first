$(function () {
    $(window).on('scroll', function () {
        let sc_top = $(this).scrollTop();
        if (sc_top > 0) {
            $('header').css({
                'background': '#fff',
                boxShadow: '4px 4px 16x 0px rgba(0, 0, 0, 0.10)',
            })
        } else {
            $('header').css({
                'background': 'transparent',
                boxShadow: '4px 4px 16px 0px rgba(0, 0, 0, 0)',
            })
        }
    });//스크롤 이벤트 끝

    //스와이퍼를 써보도록 합시다!
    let swiper = new Swiper(".newsSwiper", {
        slidesPerView: "auto",
        spaceBetween: 25,
        loop: true,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    let swiper2 = new Swiper(".ev_ma", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: true,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //search 클릭 이벤트
    let chk =0;
    $('.search').click(()=>{
        if(chk==0){
            $('nav').hide();
            $('.searchInput input, .searchInput .back').show();
            $('header').css('background','#fff');
            $('.nav_bg').show();
            chk++;
        }else{
            $('.searchInput .search').prop('type','submit');
            chk=0;
        }
    });
    
    $('.back').click(()=>{
        $('nav').show();
        $('.searchInput input, .searchInput .back').hide();
        $('.searchInput .search').attr('type','button');
        $('header').css('background','transparent');
        $('.nav_bg').hide();
    })

    //반응형
    function resize() {
        let windowWidth = $(window).width();
        if (windowWidth < 600) {
            //로고 바꾸기
            $('header h1 img').attr('src', 'img/logoM.svg');
            //메인 문구 <br>넣기
            $('ul.slide li').eq(0).find('strong').html('안전한 도시철도,<br> 편리한 교통 서비스');
            $('ul.slide li').eq(0).find('p').html('서울교통공사가 도시교통의<br> 미래를 만들어 갑니다.');

            $('ul.slide li').eq(1).find('strong').html('오늘도 <br>수고하셨습니다!');
            $('ul.slide li').eq(1).find('p').html('서울교통공사가 당신의 하루를<br> 응원합니다.');

            $('ul.slide li').eq(2).find('strong').html('하반기 신입사원 <br>공개채용 공고');
            $('ul.slide li').eq(2).find('p').html('서울교통공사에서 도전정신을<br> 가진 인재를 모집합니다.');



        } else {
            
            $('header h1 img').attr('src', 'img/logo.svg');

            $('ul.slide li').eq(0).find('strong').html('안전한 도시철도, 편리한 교통 서비스');
            $('ul.slide li').eq(0).find('p').html('서울교통공사가 도시교통의 미래를 만들어 갑니다.');

            $('ul.slide li').eq(1).find('strong').html('오늘도 수고하셨습니다!');
            $('ul.slide li').eq(1).find('p').html('서울교통공사가 당신의 하루를 응원합니다.');

            $('ul.slide li').eq(2).find('strong').html('하반기 신입사원 공개채용 공고');
            $('ul.slide li').eq(2).find('p').html('서울교통공사에서 도전정신을 가진 인재를 모집합니다.');

        }


        if(windowWidth < 820){
            $('.way a').html('<i class="fa-solid fa-magnifying-glass"></i>');
        }else{
            $('.way a').html('<i class="fa-solid fa-magnifying-glass"></i>노선검색');

        }
    };
    resize();
    $(window).resize(resize);


    //모바일 nav
    $('.ham').click(()=>{
        $('.nav_m').css('display','flex')
    });
    $('.xbtn').click(()=>{
        $('.nav_m').css('display','none')
    });
    $('.nav_m ul.gnb>li, ul.sub').click(()=>{
        $(this).eq().find('ul.sub').css('display','flex');
    });


    $('nav ul.gnb>li').hover(function () {
        $('header').css('background', "#fff")
        $('.nav_bg').show();
        $(this).addClass('active');
    }, function () {
        $('header').css('background', "transparent")
        $('.nav_bg').hide();
        $(this).removeClass('active');
    });//메뉴 호버 이벤트 끝


    //메인배너 슬라이드+애니메이션 시작
    let slideI = 0;
    const slideLength = $('.main_visual ul.slide li').length - 1;

    $(window).on('load', function () {
        bannerAni();
    });

    let inter = setInterval(goSlide, 3600);
    function goSlide() {
        if (slideI < slideLength) {
            slideI++;
        } else {
            slideI = 0;
        }
        rollingSlide();
    }

    function rollingSlide() {
        bannerAni();
        $('.control .pager li').removeClass('active').eq(slideI).addClass('active');
    }

    function bannerAni() {
        $('.main_visual ul.slide li').eq(slideI).addClass('active').siblings().removeClass('active');
        $('.main_visual').css({
            backgroundColor: `var(--banner-${slideI + 1})`,
        });
        $('ul.slide li').eq(slideI).find('img').animate({
            //애니메이션 실행 후 위치
            bottom: '70px',
            opacity: '100%',
        }, 600);
        $('ul.slide li').eq(slideI).siblings().find('img').css({
            //애니메이션 실행 전 위치
            bottom: '40px',
            opacity: 0,
        });

        $('ul.slide li').eq(slideI).find('a').animate({
            //애니메이션 실행 후 위치
            left: '30px',
            opacity: '100%',
        }, 600);
        $('ul.slide li').eq(slideI).siblings().find('a').css({
            //애니메이션 실행 전 위치
            left: '-30px',
            opacity: 0,
        });

    }

    $('.control .pause_play .pause').click(function () {
        clearInterval(inter);
        $(this).removeClass('active').siblings().addClass('active');
        //play버튼 살리기
    });
    $('.control .pause_play .play').click(function () {
        inter = setInterval(goSlide, 3300);
        $(this).removeClass('active').siblings().addClass('active');
        //pause버튼 살려두기
    });

    $('.control .pager li').click(function () {
        //인터벌 없애고
        clearInterval(inter);
        slideI = $(this).index();
        rollingSlide();
        //인터벌 세팅
        inter = setInterval(goSlide, 3300);
    });
    //메인배너 슬라이드+애니메이션 끝


    //알립니다. 카테고리 클릭하면 active 걸기
    $('ul.notice__category>li>button').click(function () {
        $(this).parents('li').addClass('active').siblings().removeClass('active');
    })





});//ready end