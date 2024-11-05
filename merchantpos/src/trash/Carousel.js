// import React, { useState, useEffect } from "react";
// import "./style.css";
// import slide1 from "../assets/1.png"; // Replace with actual images

// const content = [
//   {
//     title: "Why Aren’t You Using Data To Grow Sales Like ",
//     subtitle: "Big Supermarkets?",
//     image: slide1,
//   },
//   {
//     title: "Are you thinking of ways to ",
//     subtitle: "Reduce Cost & Increase Profit?",
//     image: slide1,
//   },
//   {
//     title: "Are your invoices ",
//     subtitle: "ZATCA Compliant",
//     image: slide1,
//   },
// ];

// const Carousel = () => {
//   const [activeImage, setActiveImage] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false); // To prevent multiple transitions

//   const leftSlideChangeHandler = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setActiveImage((prev) => (prev === 0 ? content.length - 1 : prev - 1));
//       setTimeout(() => setIsAnimating(false), 500); // Delay matches CSS animation duration
//     }
//   };

//   const rightSlideChangeHandler = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setActiveImage((prev) => (prev === content.length - 1 ? 0 : prev + 1));
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveImage((prev) => (prev === content.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel-left">
//         <div className="carousel-text">
//           <h3>
//             {content[activeImage].title}
//             <span className="highlight">{content[activeImage].subtitle}</span>
//           </h3>
//         </div>
//         <button
//           className="carousel-button"
//           onClick={() => scrollToSection("second-grid")}
//         >
//           Boost Your Sales Now
//         </button>
//         <div className="arrow left-arrow" onClick={leftSlideChangeHandler}>
//           &lt;
//         </div>
//       </div>
//       <div className="carousel-right">
//         <img
//           src={content[activeImage].image}
//           alt={content[activeImage].title}
//           className="carousel-image"
//         />
//         <div className="arrow right-arrow" onClick={rightSlideChangeHandler}>
//           &gt;
//         </div>
//       </div>
//       {/* Sections Below */}
//       <div className="section" id="second-grid">
//         <h3>
//           What would you love to <span className="highlight">know more about?</span>
//         </h3>
//         <button className="section-button" onClick={() => scrollToSection("third-grid")}>
//           Boost Your Sales Now
//         </button>
//         <button className="section-button" onClick={() => scrollToSection("third-grid")}>
//           Making Your Invoices ZATCA Compliant
//         </button>
//       </div>
//       <div className="section" id="third-grid">
//         <h3>
//           Let’s connect <span className="highlight">to Support your Business Needs!</span>
//         </h3>
//         <input type="text" placeholder="Enter your name" className="input-field" />
//         <input type="text" placeholder="Enter your mobile number" className="input-field" />
//         <button className="submit-button">Let's Connect</button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
