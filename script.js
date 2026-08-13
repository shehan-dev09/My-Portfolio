// Typing Effect
const typingText = document.querySelector(".typing-text");
const words = ["AI Undergraduate at SLIIT", "Full-Stack Developer", "Content Creator"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", type);


// 3D Coverflow Slideshow (Solid Active Image & Clear Side Separation)
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlides() {
    let totalSlides = slides.length;

    slides.forEach((slide, index) => {
        let prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        let nextSlide = (currentSlide + 1) % totalSlides;

        if (index === currentSlide) {
            // මැද ප්‍රධාන පින්තූරය (100% Solid, කිසිදු විනිවිදභාවයක් හෝ මැකීමක් නැත)
            slide.style.transform = "translate(-50%, -50%) translateX(0px) scale(1)";
            slide.style.filter = "blur(0px)";
            slide.style.opacity = "1";
            slide.style.zIndex = "10"; // උඩින්ම පෙන්වීම සඳහා වැඩිම z-index එකක් ලබා දී ඇත
        } else if (index === prevSlide) {
            // වම් පස පින්තූරය (පැහැදිලි දුරකින් සහ බ්ලර් වී ඇත)
            slide.style.transform = "translate(-50%, -50%) translateX(-140px) scale(0.85)";
            slide.style.filter = "blur(5px)";
            slide.style.opacity = "0.6";
            slide.style.zIndex = "5";
        } else if (index === nextSlide) {
            // දකුණු පස පින්තූරය (පැහැදිලි දුරකින් සහ බ්ලර් වී ඇත)
            slide.style.transform = "translate(-50%, -50%) translateX(140px) scale(0.85)";
            slide.style.filter = "blur(5px)";
            slide.style.opacity = "0.6";
            slide.style.zIndex = "5";
        } else {
            // ඉතිරි පින්තූර සම්පූර්ණයෙන්ම අදෘශ්‍යමාන වේ
            slide.style.transform = "translate(-50%, -50%) scale(0.7)";
            slide.style.filter = "blur(10px)";
            slide.style.opacity = "0";
            slide.style.zIndex = "1";
        }
    });
    
    currentSlide = (currentSlide + 1) % totalSlides;
}

setInterval(showSlides, 3000);
showSlides();