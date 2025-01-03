// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// owl carousel slider js
var owl = $('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    center: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        576: {
            items: 2
        },
        991: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});
document.addEventListener("DOMContentLoaded", () => {
    const logosContainer = document.querySelector(".logos2");
    const logosWidth = logosContainer.scrollWidth; // Total width of the logos
    const viewportWidth = window.innerWidth; // Width of the viewport
  
    // Define speed factors for mobile and PC
    const mobileSpeedFactor = 170; // Slower speed for mobile
    const desktopSpeedFactor = 50; // Faster speed for desktop
  
    // Determine the speed factor based on viewport width
    const speedFactor = viewportWidth <= 768 ? mobileSpeedFactor : desktopSpeedFactor;
  
    // Calculate animation duration based on total width and speed factor
    const animationDuration = (logosWidth + viewportWidth) / speedFactor;
  
    // Apply the animation duration
    logosContainer.style.animationDuration = `${animationDuration}s`;
  });
  
  
  