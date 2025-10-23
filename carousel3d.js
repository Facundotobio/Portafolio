// ========== CARRUSEL 3D COVERFLOW ==========

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.carousel-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    
    let currentIndex = 2; // Empieza en el centro (card 3)
    const totalCards = cards.length;

    // Crear indicadores
    function createIndicators() {
        for (let i = 0; i < totalCards; i++) {
            const dot = document.createElement('div');
            dot.classList.add('carousel-indicator-dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            indicatorsContainer.appendChild(dot);
        }
    }

    // Actualizar posiciones de las cards
    function updateCarousel() {
        cards.forEach((card, index) => {
            const diff = index - currentIndex;
            let transform, zIndex, opacity;
    
            card.classList.remove('active');
    
            if (diff === 0) {
                // Card central
                transform = 'translate(-50%, -50%) rotateY(0deg)';
                zIndex = 100;
                opacity = 1;
                card.classList.add('active');
            } else if (diff > 0) {
                // Cards a la derecha
                transform = `translate(-50%, -50%) translateX(${diff * 400}px) scale(0.8) rotateY(-40deg)`;
                zIndex = 50 - Math.abs(diff);
                opacity = Math.max(0.15, 1 - diff * 0.4);
            } else {
                // Cards a la izquierda
                transform = `translate(-50%, -50%) translateX(${diff * 400}px) scale(0.8) rotateY(40deg)`;
                zIndex = 50 - Math.abs(diff);
                opacity = Math.max(0.15, 1 + diff * 0.4);
            }
    
            card.style.transform = transform;
            card.style.zIndex = zIndex;
            card.style.opacity = opacity;
        });
    
        // Actualizar indicadores
        const dots = document.querySelectorAll('.carousel-indicator-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // function updateCarousel() {
    //     cards.forEach((card, index) => {
    //         const diff = index - currentIndex;
    //         let transform, zIndex, opacity;

    //         if (diff === 0) {
    //             // Card central
    //             transform = 'translate(-50%, -50%) scale(1.6) rotateY(0deg)';
    //             zIndex = 50;
    //             opacity = 1;
    //         } else if (diff > 0) {
    //             // Cards a la derecha
    //             transform = `translate(-50%, -50%) translateX(${diff * 400}px) scale(0.85) rotateY(-35deg)`;
    //             zIndex = 50 - Math.abs(diff);
    //             opacity = Math.max(0.3, 1 - diff * 0.3);
    //         } else {
    //             // Cards a la izquierda
    //             transform = `translate(-50%, -50%) translateX(${diff * 400}px) scale(0.85) rotateY(35deg)`;
    //             zIndex = 50 - Math.abs(diff);
    //             opacity = Math.max(0.3, 1 + diff * 0.3);
    //         }

    //         card.style.transform = transform;
    //         card.style.zIndex = zIndex;
    //         card.style.opacity = opacity;
    //     });

    //     // Actualizar indicadores
    //     const dots = document.querySelectorAll('.carousel-indicator-dot');
    //     dots.forEach((dot, index) => {
    //         dot.classList.toggle('active', index === currentIndex);
    //     });
    // }

    // Ir a un slide específico
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    // Siguiente slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
    }

    // Slide anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
    }

    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Click en las cards para centrarlas
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (index !== currentIndex) {
                goToSlide(index);
            }
        });
    });

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

    // Inicializar
    createIndicators();
    updateCarousel();

    // Soporte para touch/swipe en móviles
    let touchStartX = 0;
    let touchEndX = 0;

    const container = document.querySelector('.carousel-3d-container');

    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
    }
});