// Make sure GSAP and ScrollTrigger are loaded in the HTML
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // General Fade Up Animation for sections
        const fadeElements = document.querySelectorAll('.fade-up');
        fadeElements.forEach((el) => {
            gsap.fromTo(el, 
                { opacity: 0, y: 50 },
                {
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%", // Trigger when element is 85% in view
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        // Staggered Cards Animation
        const cardContainers = document.querySelectorAll('.stagger-container');
        cardContainers.forEach(container => {
            const cards = container.querySelectorAll('.card');
            if (cards.length > 0) {
                gsap.fromTo(cards, 
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: container,
                            start: "top 80%"
                        }
                    }
                );
            }
        });

        // Magnetic Button Effect
        const magneticButtons = document.querySelectorAll('.btn-magnetic');
        magneticButtons.forEach(btn => {
            btn.addEventListener('mousemove', function(e) {
                const position = btn.getBoundingClientRect();
                const x = e.clientX - position.left - position.width / 2;
                const y = e.clientY - position.top - position.height / 2;
                
                gsap.to(btn, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.5,
                    ease: "power3.out"
                });
            });

            btn.addEventListener('mouseleave', function() {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });
    }
});
