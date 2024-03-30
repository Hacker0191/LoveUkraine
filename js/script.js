window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  const mainContent = document.querySelector('.page-content'); // Replace '.main-content' accordingly

  // Ensure both elements exist before proceeding
  if (preloader && mainContent) {
    // Fade out the preloader after a delay
    setTimeout(() => {
      preloader.style.opacity = 0;
      preloader.style.transition = 'opacity 0.5s ease-in-out';

      preloader.addEventListener('transitionend', () => {
        preloader.remove(); 
        mainContent.style.opacity = 1; // Fade in the main content
      });
    }, 2000); // Adjust the 2000ms delay as desired
  }
});

//hero
var tl = gsap.timeline ()
.to('.hero-gradient',{
  x: "random(-25, 25, 5)vw", //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
  y: "random(-30, 30, 5)vh",
  rotation: "random(-45, 45, 5)",
  // width: "random(60, 80, 5)vw",
  // height: "random(60, 80, 5)vh",
  // opacity: "random(0.65, 0.9)",
  scale: "random(0.4, 1.2)",
  duration: 4,
  ease: "none",
  repeat: -1,
  repeatRefresh: true // gets a new random x and y value on each repeat
});

window.addEventListener('load', () => {
  // Add a class to the body to signal that the page is not mobile-friendly
  document.body.classList.add('no-mobile-support'); 
});

