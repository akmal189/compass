const myObj = {
    queue: [],
    init: function () {
        let queue = this.queue;

        for (key in queue) {
            let f = queue[key];
            if (typeof f == 'function') {
                f();
            }
        }
    }
};
document.addEventListener('DOMContentLoaded', function () {
    myObj.init();
});
(function () {
    let IsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    myObj.queue = {
        // HEADER BEGIN
        anchorMenu: function () {
            const anchorMenu = document.querySelector('.site-header__menu');

            let blockId;
            anchorMenu.querySelectorAll('a').forEach((item) => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    blockId = item.getAttribute('href');
                    document.getElementById(blockId).scrollIntoView({ behavior: "smooth" });
                    document.querySelector('.burger_menu').classList.remove('opened')
                    document.querySelector('html').classList.remove('overflow_hidden')
                })
            })
        },
        headerFunctions: function () {
            const HEADER_WR = document.querySelector('.site-header');
            const BURGER_BTN = document.querySelector('.site-header__burgerBtn');

            if (window.scrollY > 0) {
                HEADER_WR.classList.add('fixed')
            } else {
                HEADER_WR.classList.remove('fixed')
            }

            document.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    HEADER_WR.classList.add('fixed')
                } else {
                    HEADER_WR.classList.remove('fixed')
                }
            })
        }
        // HEADER END
    }
}())