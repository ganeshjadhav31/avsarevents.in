// countdown javascript

var target_mili_sec = new Date("Oct 03, 2024 24:00:0").getTime();
    function timer() {
        var now_mili_sec = new Date().getTime();
        var remaining_sec = Math.floor( (target_mili_sec - now_mili_sec) / 1000 );

        var day = Math.floor(remaining_sec / (3600 * 24));
        var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600);
        var min = Math.floor((remaining_sec % 3600) / 60);
        var sec = Math.floor(remaining_sec % 60);

        document.querySelector("#day").innerHTML = day;
        document.querySelector("#hour").innerHTML = hour;
        document.querySelector("#min").innerHTML = min;
        document.querySelector("#sec").innerHTML = sec;
    }

    setInterval(timer, 1000); //1000 it means 1 sec

    $('.responsive').slick({
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
        }
        
        ]
        });

// caraousal
// const initSlider = () => {   
//     const imageList = document.querySelector(".slider-wrapper .image-list");
//     const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
//     const sliderScrollbar = document.querySelector(".slider .slider-scrollbar");
//     const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
//     const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
//     // Handle scrollbar thumb drag
//     scrollbarThumb.addEventListener("mousedown", (e) => {
//         const startX = e.clientX;
//         const thumbPosition = scrollbarThumb.offsetLeft;
//         const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
//         // Update thumb position on mouse move
//         const handleMouseMove = (e) => {
//             const deltaX = e.clientX - startX;
//             const newThumbPosition = thumbPosition + deltaX;
//             // Ensure the scrollbar thumb stays within bounds
//             const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
//             const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
//             scrollbarThumb.style.left = `${boundedPosition}px`;
//             imageList.scrollLeft = scrollPosition;
//         }
//         // Remove event listeners on mouse up
//         const handleMouseUp = () => {
//             document.removeEventListener("mousemove", handleMouseMove);
//             document.removeEventListener("mouseup", handleMouseUp);
//         }
//         // Add event listeners for drag interaction
//         document.addEventListener("mousemove", handleMouseMove);
//         document.addEventListener("mouseup", handleMouseUp);
//     });
//     // Slide images according to the slide button clicks
//     slideButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             const direction = button.id === "prev-slide" ? -1 : 1;
//             const scrollAmount = imageList.clientWidth * direction;
//             imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
//         });
//     });
//      // Show or hide slide buttons based on scroll position
//     const handleSlideButtons = () => {
//         slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
//         slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
//     }
//     // Update scrollbar thumb position based on image scroll
//     const updateScrollThumbPosition = () => {
//         const scrollPosition = imageList.scrollLeft;
//         const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
//         scrollbarThumb.style.left = `${thumbPosition}px`;
//     }
//     // Call these two functions when image list scrolls
//     imageList.addEventListener("scroll", () => {
//         updateScrollThumbPosition();
//         handleSlideButtons();
//     });
// }
// window.addEventListener("resize", initSlider);
// window.addEventListener("load", initSlider);