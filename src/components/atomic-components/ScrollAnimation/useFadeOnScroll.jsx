import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");

    const checkVisibility = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const trigger = window.innerHeight * 0.90;

        if (rect.top < trigger) {
          const delay = el.dataset.delay || "0s";
          const anim = el.dataset.anim || "fade-in"; // default fade

          el.style.transitionDelay = delay;
          el.classList.add(anim);
        }
      });
    };

    window.addEventListener("scroll", checkVisibility);

    setTimeout(checkVisibility, 50); // important!

    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);
}

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
