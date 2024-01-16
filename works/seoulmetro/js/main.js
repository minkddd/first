document.addEventListener('DOMContentLoaded', function() {
    var heading2Links = document.querySelectorAll('a.heading2');

    heading2Links.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            var images = link.querySelectorAll('img');
            images.forEach(function(img) {
                img.setAttribute('src', 'img/prime_arrow-right_white.svg');
            });
        });

        link.addEventListener('mouseout', function() {
            var images = link.querySelectorAll('img');
            images.forEach(function(img) {
                img.setAttribute('src', '../../img/arrow_right_up.svg');
            });
        });
    });
});
