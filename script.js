// Testimonial Carousel Navigation
const testimonialsSlider = document.querySelector('.testimonials-slider');
const testimonialArrowLeft = document.querySelector('.testimonial-arrow-left');
const testimonialArrowRight = document.querySelector('.testimonial-arrow-right');

if (testimonialsSlider && testimonialArrowLeft && testimonialArrowRight) {
    
    testimonialArrowLeft.addEventListener('click', () => {
        testimonialsSlider.scrollLeft -= 500;
    });

    testimonialArrowRight.addEventListener('click', () => {
        testimonialsSlider.scrollLeft += 500;
    });
}
