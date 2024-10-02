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
                    document.querySelector('.site-header__burger-btn').classList.remove('active')
                    document.querySelector('.site-header__right').classList.remove('opened')
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
            const BURGER_BTN = document.querySelector('.site-header__burger-btn');

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

            BURGER_BTN.addEventListener('click', (e) => {
                BURGER_BTN.classList.toggle('active')
                document.querySelector('.site-header__right').classList.toggle('opened')
                document.querySelector('html').classList.toggle('overflow_hidden')
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
                    551: {
                        slidesPerView: 1.2
                    },
                    981: {
                        slidesPerView: 2.3
                    },
                    1100: {
                        slidesPerView: 3.3
                    }
                }
            });
        },
        // PROBLEMS-BLOCK END

        // SOLUTIONS-BLOCK BEGIN
        solutionsFunctions: function() {
            if(IsMobile) {
                const SWIPER_SOLUTIONS = new Swiper('.swiper.solutions-block__bottom-list', {
                    slidesPerView: 4,
                    loop: false,
                    effect: 'slide',
                    speed: 1000,
                    spaceBetween: 36,
                    lazy: {
                        loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
                        loadPrevNextAmount: 2 //or, if you wish, preload the next 2 images
                    },
                    navigation: {
                        nextEl: '.solutions-block__slider-controls .swiper-button-next',
                        prevEl: '.solutions-block__slider-controls .swiper-button-prev',
                    },
                    breakpoints: {
                        551: {
                            spaceBetween: 20,
                            slidesPerView: 1.2
                        },
                        800: {
                            spaceBetween: 20,
                            slidesPerView: 2
                        },
                        1024: {
                            spaceBetween: 20,
                            slidesPerView: 3
                        }
                    }
                });
            }
        },
        // SOLUTIONS-BLOCK END
            
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
                    550: {
                        spaceBetween: 20,
                        slidesPerView: 1.2
                    },
                    640: {
                        spaceBetween: 20,
                        slidesPerView: 2.2
                    },
                    640: {
                        spaceBetween: 20,
                        slidesPerView: 2.2
                    },
                    1450: {
                        spaceBetween: 20,
                        slidesPerView: 2.5
                    }
                }
            });
        },
        // FEATURES-BLOCK END

        // SERVICES-BLOCK BEGIN
        servicesFunctions: function() {
            if(IsMobile) {
                const SWIPER_SERVICES = new Swiper('.swiper.services-block__list', {
                    slidesPerView: 4,
                    loop: false,
                    effect: 'slide',
                    speed: 1000,
                    spaceBetween: 36,
                    lazy: {
                        loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
                        loadPrevNextAmount: 2 //or, if you wish, preload the next 2 images
                    },
                    breakpoints: {
                        551: {
                            spaceBetween: 20,
                            slidesPerView: 1.2
                        },
                        768: {
                            spaceBetween: 20,
                            slidesPerView: 1.8
                        },
                        981: {
                            spaceBetween: 20,
                            slidesPerView: 2.3
                        }
                    }
                });
            }
        },
        // SERVICES-BLOCK END

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
            let pricingBlockItems = document.querySelectorAll('.pricing-block__item-btn a');
            if(pricingBlockItems) {
                pricingBlockItems.forEach(function(item){
                    if(item.dataset.item) {
                        item.addEventListener('click', function(e){
                            e.preventDefault();
                            document.querySelector('html').classList.add('overflow_hidden')
                            document.querySelector(`.popup-block.pricing-popup[data-item="${item.dataset.item}"]`).classList.add('opened')
                        })
                    }
                })
            }
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
                    550: {
                        slidesPerView: 1.2
                    },
                    768: {
                        slidesPerView: 1.8
                    },
                    980: {
                        slidesPerView: 2.2
                    }
                }
            });
        },
        // PRICING-BLOCK END

        // SUPPORT-BLOCK BEGIN
        supportFunctions: function() {
            let supportBlocks = document.querySelectorAll('.support-block__item');

            if(supportBlocks) {
                supportBlocks.forEach(function(item){
                    if(item.dataset.item) {
                        item.addEventListener('click', function(){
                            document.querySelector('html').classList.add('overflow_hidden')
                            document.querySelector(`.popup-block.support-popup[data-item="${item.dataset.item}"]`).classList.add('opened')
                        })
                    }
                })
            }
        },
        // SUPPORT-BLOCK END

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
        },
        // BLOCK ANIMATIONS END

        // OTHER FUNCTIONS BEGIN
        otherFunctions: function() {
            let popupCloser = document.querySelector('.popup-block__closer');
            if(popupCloser) {
                document.querySelectorAll('.popup-block__closer').forEach(function(item){
                    item.addEventListener('click', function(){
                        item.closest('.popup-block').classList.remove('opened')
                        document.querySelector('html').classList.remove('overflow_hidden')
                    })
                })
            }
        }
        // OTHER FUNCTIONS END
    }
}())