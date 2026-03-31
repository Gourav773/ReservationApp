// import { useState, useEffect } from "react";

// const HotelSliderPage = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1566073771259-6a8506099945",
//     "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
//     "https://images.unsplash.com/photo-1582719508461-905c673771fd",
//     "https://images.unsplash.com/photo-1590490360182-c33d57733427",
//   ];

//   const [current, setCurrent] = useState(0);

//   // 🔥 Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => {
//     setCurrent(current === images.length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? images.length - 1 : current - 1);
//   };

//   return (
//     <>
//       <style>{`
    

//         .container{
//           width: 100%;
//           min-height: 100vh;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .header{
//           width: 100%;
//           padding: 20px;
//           background: linear-gradient(135deg,#003580,#0071c2);
//           color: white;
//           text-align: center;
//           font-size: 28px;
//           font-weight: bold;
//         }

//         .slider{
//           position: relative;
//           width: 90%;
//           max-width: 900px;
//           height: 450px;
//           margin-top: 40px;
//           overflow: hidden;
//           border-radius: 20px;
//           box-shadow: 0 15px 40px rgba(0,0,0,0.2);
//         }

//         .slide{
//           width: 100%;
//           height: 100%;
//           position: absolute;
//           opacity: 0;
//           transition: 0.8s ease;
//         }

//         .slide.active{
//           opacity: 1;
//         }

//         .slide img{
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         /* overlay */
//         .overlay{
//           position: absolute;
//           bottom: 0;
//           width: 100%;
//           padding: 20px;
//           background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
//           color: white;
//         }

//         .overlay h2{
//           margin: 0;
//         }

//         /* buttons */
//         .btn{
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           background: rgba(0,0,0,0.5);
//           color: white;
//           border: none;
//           font-size: 20px;
//           padding: 10px 15px;
//           cursor: pointer;
//           border-radius: 50%;
//         }

//         .btn:hover{
//           background: rgba(0,0,0,0.8);
//         }

//         .prev{
//           left: 10px;
//         }

//         .next{
//           right: 10px;
//         }

//         /* dots */
//         .dots{
//           display: flex;
//           gap: 8px;
//           margin-top: 20px;
//         }

//         .dot{
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//           background: #ccc;
//           cursor: pointer;
//         }

//         .dot.active{
//           background: #0071c2;
//         }

//         /* responsive */
//         @media(max-width:768px){
//           .slider{
//             height: 300px;
//           }
//         }
//       `}</style>

//       <div className="container">
        

//         <div className="slider">
//           {images.map((img, index) => (
//             <div
//               className={index === current ? "slide active" : "slide"}
//               key={index}
//             >
//               <img src={img} alt="hotel" />

//               <div className="overlay">
//                 <h2>Luxury Hotel View</h2>
//                 <p>Enjoy your stay with premium comfort</p>
//               </div>
//             </div>
//           ))}

//           <button className="btn prev" onClick={prevSlide}>
//             ❮
//           </button>
//           <button className="btn next" onClick={nextSlide}>
//             ❯
//           </button>
//         </div>

//         {/* dots */}
//         <div className="dots">
//           {images.map((_, i) => (
//             <div
//               key={i}
//               className={i === current ? "dot active" : "dot"}
//               onClick={() => setCurrent(i)}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default HotelSliderPage;
import { useState, useEffect } from "react";

const HotelSliderPage = () => {
  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <>
      <style>{`
        /* 🔥 UNIQUE PREFIX USED EVERYWHERE */
        
        .hotelSlider_container{
          width: 300%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hotelSlider_slider{
          position: relative;
          width: 95%; /* 🔥 bigger width */
          max-width: 1200px; /* 🔥 large screen fix */
          height: 500px; /* 🔥 bigger height */
          margin-top: 40px;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.25);
        }

        .hotelSlider_slide{
          width: 100%;
          height: 100%;
          position: absolute;
          opacity: 0;
          transition: 0.8s ease;
        }

        .hotelSlider_slide.active{
          opacity: 1;
        }

        .hotelSlider_slide img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* overlay */
        .hotelSlider_overlay{
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 30px;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          color: white;
        }

        .hotelSlider_overlay h2{
          margin: 0;
          font-size: 28px;
        }

        .hotelSlider_overlay p{
          margin-top: 5px;
          font-size: 16px;
        }

        /* buttons */
        .hotelSlider_btn{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.5);
          color: white;
          border: none;
          font-size: 22px;
          padding: 12px 16px;
          cursor: pointer;
          border-radius: 50%;
        }

        .hotelSlider_btn:hover{
          background: rgba(0,0,0,0.8);
        }

        .hotelSlider_prev{
          left: 15px;
        }

        .hotelSlider_next{
          right: 15px;
        }

        /* dots */
        .hotelSlider_dots{
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .hotelSlider_dot{
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ccc;
          cursor: pointer;
        }

        .hotelSlider_dot.active{
          background: #0071c2;
        }

        /* responsive */
        @media(max-width:768px){
          .hotelSlider_slider{
            height: 300px;
          }

          .hotelSlider_overlay h2{
            font-size: 20px;
          }
        }
      `}</style>

      <div className="hotelSlider_container">
        <div className="hotelSlider_slider">
          {images.map((img, index) => (
            <div
              className={
                index === current
                  ? "hotelSlider_slide active"
                  : "hotelSlider_slide"
              }
              key={index}
            >
              <img src={img} alt="hotel" />

              <div className="hotelSlider_overlay">
                <h2>Luxury Hotel View</h2>
                <p>Enjoy your stay with premium comfort</p>
              </div>
            </div>
          ))}

          <button
            className="hotelSlider_btn hotelSlider_prev"
            onClick={prevSlide}
          >
            ❮
          </button>
          <button
            className="hotelSlider_btn hotelSlider_next"
            onClick={nextSlide}
          >
            ❯
          </button>
        </div>

        <div className="hotelSlider_dots">
          {images.map((_, i) => (
            <div
              key={i}
              className={
                i === current
                  ? "hotelSlider_dot active"
                  : "hotelSlider_dot"
              }
              onClick={() => setCurrent(i)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HotelSliderPage;