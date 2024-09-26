const myObj = {
    queue: [],
    init: function() {
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
        anchorMenu: function() {
            const anchorMenu = document.querySelector('.site-header__menu');

            let blockId;
            anchorMenu.querySelectorAll('a').forEach((item) => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    blockId = item.getAttribute('href');
                    scrollToElement(blockId, 100);
                    document.querySelector('.burger-menu').classList.remove('opened')
                    document.querySelector('html').classList.remove('overflow_hidden')
                })
            })

            function scrollToElement(blockId, offset) {
                let element = document.getElementById(blockId);
                let elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                let offsetPosition = elementPosition - offset;
            
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        },
        headerFunctions: function() {
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

            window.addEventListener('scroll', () => {
                if (document.scrollingElement.scrollTop > 800) {
                    document.querySelector('.to-top-btn a').classList.add('active')
                } else {
                    document.querySelector('.to-top-btn a').classList.remove('active')
                }
            });
            document.querySelector('.to-top-btn a').addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        },
        // HEADER END

        // PROBLEMS-BLOCK BEGIN
        problemsBlockFunctions: function() {
            const SWIPER = new Swiper('.swiper.problems-block__list-slider', {
                slidesPerView: 4,
                loop: false,
                effect: 'slide',
                speed: 1000,
                spaceBetween: 26,
                lazy: {
                    loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
                    loadPrevNextAmount: 2 //or, if you wish, preload the next 2 images
                },
                navigation: {
                    nextEl: '.problems-block__slider-controls .swiper-button-next',
                    prevEl: '.problems-block__slider-controls .swiper-button-prev',
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 1
                    },
                    1025: {
                        slidesPerView: 2
                    }
                }
            });
        },
        // PROBLEMS-BLOCK END

        // FEATURES-BLOCK BEGIN
        featuresFunctions: function() {
            const SWIPER2 = new Swiper('.swiper.features-block__slider', {
                slidesPerView: 3.3,
                loop: false,
                effect: 'slide',
                speed: 1000,
                spaceBetween: 32,
                lazy: {
                    loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
                    loadPrevNextAmount: 2 //or, if you wish, preload the next 2 images
                },
                navigation: {
                    nextEl: '.features-block__slider-controls .swiper-button-next',
                    prevEl: '.features-block__slider-controls .swiper-button-prev',
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 1
                    },
                    1025: {
                        slidesPerView: 2
                    }
                }
            });
        },
        // FEATURES-BLOCK END

        // STORIES-BLOCK BEGIN
        storiesFunctions: function() {
            const SWIPER3 = new Swiper('.swiper.stories-block__slider', {
                slidesPerView: 1,
                loop: true,
                effect: 'fade',
                speed: 1000,
                spaceBetween: 0,
                lazy: {
                    loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
                    loadPrevNextAmount: 2 //or, if you wish, preload the next 2 images
                },
                pagination: {
                    el: '.stories-block .swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 1
                    },
                    1025: {
                        slidesPerView: 2
                    }
                }
            });
        },
        // STORIES-BLOCK END

        // PRICING-BLOCK BEGIN
        pricingFunctions: function() {
            const SWIPER4 = new Swiper('.swiper.pricing-block__slider-inner', {
                slidesPerView: 3,
                loop: false,
                effect: 'slide',
                speed: 1000,
                spaceBetween: 14.5,
                lazy: {
                    loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
                    loadPrevNextAmount: 2 //or, if you wish, preload the next 2 images
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 1
                    },
                    1025: {
                        slidesPerView: 2
                    }
                }
            });
        },
        // PRICING-BLOCK END

        // BLOCK ANIMATIONS BEGIN
        animationsFunctions: function() {
            const blocks = document.querySelectorAll(".site-wrapper > section");
            gsap.registerPlugin(ScrollTrigger);
            blocks.forEach((block) => {
                gsap.set(block, { opacity: 0, y: 250 });

                ScrollTrigger.create({
                    trigger: block,
                    scroller: "body",
                    start: "top 89%",
                    stagger: 2.7, // Задержка между анимацией элементов
                    toggleActions: "play reverse play reverse",
                    onEnter: () => {
                        gsap.to(block, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" });
                    }
                });
            });
        }
        // BLOCK ANIMATIONS END
    }
}())