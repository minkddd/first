//호버 커서 이벤트
let worklinks = Array.from(document.querySelectorAll('a img'));
console.log(worklinks);
worklinks.forEach(worklink => {
    worklink.addEventListener('mouseover', () => {
        mouseCursor.classList.add('more');

    })
    worklink.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('more')
    })
})

let contactlink = document.querySelector('#contact a img');

contactlink.addEventListener('mouseover', () => {
    mouseCursor.classList.add('more');
    mouseCursorSpan.innerHTML = 'Hello!';
})
contactlink.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('more');
    mouseCursorSpan.innerHTML = 'More';

})



/* 라인 애니메이션 */
let path = document.querySelector('.line path');
let pathlength = path.getTotalLength();

path.style.strokeDasharray = pathlength + ' ' + pathlength;
path.style.strokeDashoffset = pathlength;
window.addEventListener('scroll', () => {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    let drawLength = pathlength * scrollPercentage;

    path.style.strokeDashoffset = pathlength - drawLength;
})



/* 스와이퍼 */
let swiper = new Swiper(".cloneSwiper", {
    slidesPerView: "auto",
    spaceBetween: 195,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//텍스트 이동 애니메이션
window.addEventListener('scroll', function () {
    let st = window.scrollY || document.documentElement.scrollTop;
    console.log(st);

    // 각 work 요소의 시작 위치 계산
    let works = [document.querySelector('.work1'), document.querySelector('.work2'), document.querySelector('.work3'), document.querySelector('.work4')];
    let workTops = works.map(work => work.offsetTop - 950);

    // 이벤트 컨텐츠 액션 시작
    works.forEach((work, index) => {
        if (st >= workTops[index]) {
            work.classList.add('on');
        } else {
            work.classList.remove('on');
        }
    });
});