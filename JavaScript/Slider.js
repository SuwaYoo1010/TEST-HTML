
            let currentIndex = 0;
    
            function showSlide() {
                const slider = document.querySelector('.slider');
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
    
            function prevSlide() {
                currentIndex = (currentIndex - 1 + 4) % 4;
                showSlide();
            }
    
            function nextSlide() {
                currentIndex = (currentIndex + 1) % 4;
                showSlide();
            }
    
            setInterval(() => {
                nextSlide();
            }, 5000); d
