document.addEventListener("DOMContentLoaded", function() {
    // Confetti Effect on Page Load
    const confettiContainer = document.getElementById('confetti');
    setInterval(function() {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiContainer.appendChild(confettiPiece);
        setTimeout(() => {
            confettiPiece.remove();
        }, 5000);
    }, 150);

    // Reveal the surprise message on button click
    const revealButton = document.getElementById("revealButton");
    const secretMessage = document.getElementById("secretMessage");
    const closeButton = document.getElementById("closeButton");
    const videoMessage = document.getElementById("videoMessage");

    revealButton.addEventListener("click", function() {
        secretMessage.classList.remove("hidden");
        // Play the surprise video greeting
        videoMessage.classList.remove("hidden");
        // Trigger confetti explosion
        triggerConfettiExplosion();
    });

    closeButton.addEventListener("click", function() {
        secretMessage.classList.add("hidden");
        videoMessage.classList.add("hidden");
    });

    // Confetti explosion effect (after clicking the button)
    function triggerConfettiExplosion() {
        const confettiExplosion = document.createElement('div');
        confettiExplosion.classList.add('confetti-explosion');
        document.body.appendChild(confettiExplosion);

        setTimeout(() => {
            confettiExplosion.remove();
        }, 2000);
    }

    // Initialize particles.js for background animation (stars/bubbles)
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ff69b4"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "images/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ff69b4",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 4,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
});
