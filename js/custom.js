;
(function($) {
    "use strict";
    /*slider area Carousel*/
    function sliderCarousel() {
        if ($('.slider-carousel').length) {
            $('.slider-carousel').owlCarousel({
                loop: true,
                margin: 0,
                autoplay: true,
                nav: false,
                items: 1
            })
        }
    }
    sliderCarousel();

    //    team area carousel====*/
    function teamCarousel() {
        if ($('.team').length) {
            $('.team').owlCarousel({
                loop: true,
                margin: 30,
                autoplay: true,
                nav: false,
                items: 3,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    650: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    }
                }
            })
        }
    }
    teamCarousel();

    /*======latest area carousel====*/
    function latestCarousel() {
        if ($('.l-slider').length) {
            $('.l-slider').owlCarousel({
                loop: true,
                margin: 0,
                autoplay: true,
                nav: false,
                items: 1
            })
        }
    }
    latestCarousel();

    /*======location area carousel====*/
    function locationSlider() {
        if ($('.location-slider').length) {
            $('.location-slider').owlCarousel({
                loop: true,
                margin: 30,
                autoplay: true,
                nav: false,
                items: 4,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    450: {
                        items: 1,
                    },
                    650: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    1000: {
                        items: 4,
                    }
                }
            })
        }
    }
    locationSlider();

    /*============= graph-chart ======*/
    window.onload = function() {
        var chart = new CanvasJS.Chart("chartContainer", {
            axisX: {
                margin: "10",
                labelFontFamily: "$raleway",
                labelFontColor: "#565656",
                labelFontWeight: "500",
                labelFontSize: "13",
                labelMargin: "10",
                gridThickness: 1,
                tickLength: 0
            },
            axisY: {
                gridThickness: 1,
            },
            dataPointMaxWidth: 40,
            data: [{
                type: "column",
                color: "#e66e46",
                dataPoints: [{
                        x: 10,
                        y: 20,
                        label: "JAN"
                    },
                    {
                        x: 20,
                        y: 26,
                        label: "FAB"
                    },
                    {
                        x: 30,
                        y: 30,
                        label: "MAR"
                    },
                    {
                        x: 40,
                        y: 26,
                        label: "Apr"
                    },
                    {
                        x: 50,
                        y: 22,
                        label: "MAY"
                    },
                    {
                        x: 60,
                        y: 15,
                        label: "JUN"
                    },
                    {
                        x: 70,
                        y: 22,
                        label: "JUL"
                    },
                    {
                        x: 80,
                        y: 26,
                        label: "AUG"
                    },
                ]
            }, {
                type: "column",
                color: "#46c8be",
                dataPoints: [{
                        x: 10,
                        y: 32,
                        label: "JAN"
                    },
                    {
                        x: 20,
                        y: 20,
                        label: "FAB"
                    },
                    {
                        x: 30,
                        y: 25,
                        label: "MAR"
                    },
                    {
                        x: 40,
                        y: 30,
                        label: "Apr"
                    },
                    {
                        x: 50,
                        y: 30,
                        label: "MAY"
                    },
                    {
                        x: 60,
                        y: 25,
                        label: "JUN"
                    },
                    {
                        x: 70,
                        y: 30,
                        label: "JUL"
                    },
                    {
                        x: 80,
                        y: 37,
                        label: "AUG"
                    },

                ]
            }]
        });

        chart.render();
    }

    // stick menu function

    var nav_offset_top = $('#main_navbar').offset().top;

    $('#main_navbar').affix({
        offset: {
            top: nav_offset_top,

        }
    });


    // preloader js
    $(window).load(function() { // makes sure the whole site is loaded
        $('.loader').fadeOut(); // will first fade out the loading animation
        $('.sampleContainer').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(150).css({
            'overflow': 'visible'
        })
    })

    new WOW().init();
})(jQuery)