/* 메뉴 토글 */
let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');
let buttons = document.querySelectorAll('nav button');
let gnbItems = document.querySelectorAll('.gnb li');

menu.addEventListener('click', function () {
    nav.classList.toggle('active');

    buttons.forEach(function (button) {
        if (nav.classList.contains('active')) {
            button.innerHTML = 'Close';
        } else {
            button.innerHTML = 'Menu';
        }
    });
});

gnbItems.forEach(function (item) {
    item.addEventListener('click', function () {
        nav.classList.remove('active');

        buttons.forEach(function (button) {
            button.innerHTML = 'Menu';
        });
    });
});

//마우스 커서
let mouseCursor = document.querySelector(".cursor");
let mouseCursorSpan = document.querySelector(".cursor span");
window.addEventListener("mousemove", cursor);
//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
}

let links = Array.from(document.querySelectorAll('a, button, .swiper-button-next, .swiper-button-prev'));
console.log(links);
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('grow')
    })
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('grow')
    })
})
