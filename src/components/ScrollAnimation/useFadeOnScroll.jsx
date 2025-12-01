import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");

    const animateCounter = (element) => {
      const target = parseInt(element.dataset.target, 10);
      const duration = parseInt(element.dataset.duration, 10) || 2000; 
      let current = 0;

      const increment = () => {
        const step = Math.ceil(target / (duration / 50)); 
        if (current < target) {
          current += step;
          element.innerText = current > target ? target : current;
          requestAnimationFrame(increment);
        } else {
          element.innerText = target; 
        }
      };

      increment();
    };

    const checkVisibility = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const trigger = window.innerHeight * 0.90;
        //  const trigger = 300;
        

        if (rect.top < trigger && !el.classList.contains('animated')) {
          const delay = el.dataset.delay || "0s";
          const anim = el.dataset.anim || "slide-up"; 

          el.style.transitionDelay = delay;
          el.classList.add(anim);
          el.classList.add('in-view');
            el.classList.add('scroll-animate');
          el.classList.add('animated'); 
          

          if (el.dataset.target) {
            animateCounter(el);
          }
        }
      });
    };

    window.addEventListener("scroll", checkVisibility);
    setTimeout(checkVisibility, 50);

    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);
}


// import { useEffect } from "react";

// export default function useScrollAnimation() {
//   useEffect(() => {
//     const elements = document.querySelectorAll(".scroll-animate");

//     const checkVisibility = () => {
//       elements.forEach((el) => {
//         const rect = el.getBoundingClientRect();
//         const trigger = window.innerHeight * 0.90;

//         if (rect.top < trigger) {
//           const delay = el.dataset.delay || "0s";
//           const anim = el.dataset.anim || "fade-in"; // default fade

//           el.style.transitionDelay = delay;
//           el.classList.add(anim);
//         }
//       });
//     };

//     window.addEventListener("scroll", checkVisibility);

//     setTimeout(checkVisibility, 50); // important!

//     return () => window.removeEventListener("scroll", checkVisibility);
//   }, []);
// }

// sscrolling fade in

// import { useEffect } from "react";

// export default function useFadeOnScroll() {
//   useEffect(() => {
//     const elements = document.querySelectorAll(".fade-element");

//     const handleScroll = () => {
//       elements.forEach((el) => {
//         const rect = el.getBoundingClientRect();
//         const triggerPoint = window.innerHeight * 0.90;

//         if (rect.top < triggerPoint) {
//           const delay = el.dataset.delay || "0s";
//           el.style.transitionDelay = delay;
//           el.classList.add("fade-visible");
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     // handleScroll(); 

//     setTimeout(() => {
//       handleScroll();
//     }, 50);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
// }



// import { useEffect, useRef } from "react";

// export default function useFadeOnScroll() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ref.current) return;

//       const rect = ref.current.getBoundingClientRect();
//       const triggerPoint = window.innerHeight * 0.80;

//       if (rect.top < triggerPoint) {
//         ref.current.classList.add("fade-show");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // initial check

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return ref;
// }
