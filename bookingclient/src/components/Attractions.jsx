import React, { useEffect, useState } from "react";

const Apartment = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const rooms = [
    {
      name: "tanya",
      image: "https://ivang-design.com/svg-load/hotel/room1.jpg",
      title: "suite tanya",
    },
    {
      name: "helen",
      image: "https://ivang-design.com/svg-load/hotel/room2.jpg",
      title: "suite helen",
    },
    {
      name: "andrea",
      image: "https://ivang-design.com/svg-load/hotel/room3.jpg",
      title: "suite andrea",
    },
    {
      name: "diana",
      image: "https://ivang-design.com/svg-load/hotel/room4.jpg",
      title: "suite diana",
    },
  ];

  // ✅ Auto Slider
  useEffect(() => {
    if (isHovered) return;

    const autoSlide = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rooms.length);
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [isHovered, rooms.length]);

  // ✅ Cursor + Background Animation
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursor2 = document.getElementById("cursor2");
    const cursor3 = document.getElementById("cursor3");

    const moveCursor = (e) => {
      [cursor, cursor2, cursor3].forEach((el) => {
        if (el) {
          el.style.left = e.clientX + "px";
          el.style.top = e.clientY + "px";
        }
      });
    };

    document.body.addEventListener("mousemove", moveCursor);

    const hoverTargets = document.querySelectorAll(".hover-target");

    const addHover = () => {
      cursor2.classList.add("hover");
      cursor3.classList.add("hover");
    };

    const removeHover = () => {
      cursor2.classList.remove("hover");
      cursor3.classList.remove("hover");
    };

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    let pos = 0;
    const interval = setInterval(() => {
      pos++;
      const bg = document.querySelector(".moving-image");
      if (bg) {
        bg.style.backgroundPosition = pos + "px 0px";
      }
    }, 20);

    return () => {
      document.body.removeEventListener("mousemove", moveCursor);
      clearInterval(interval);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <style>{`
        body {
          margin:0;
          background:#1f2029;
          color:white;
          font-family:sans-serif;
        }

        .section {
          height:100vh;
          position:relative;
          overflow:hidden;
          margin-top:-100px
        }

        /* ✅ FULL SCREEN BACKGROUND */
        .moving-image {
          background:url('https://ivang-design.com/svg-load/hotel/move-img@2x.jpg') repeat;
          position:fixed;
          top:0;
          left:0;
          width:100%;
          height:100%;
          z-index:-1;
          opacity:0.4;
        }

        /* LEFT MENU */
        .case-study-wrapper {
          position:absolute;
          left:30px;
          top:40%;
          transform:translateY(-50%);
          list-style:none;
          
        }

        .case-study-name {
          margin:12px 0;
          
        }

        .case-study-name a {
          writing-mode: vertical-lr;
          color: rgba(255,255,255,.4);
          cursor:pointer;
          font-size:14px;
          transition:.3s;
          
        }

        .case-study-name.active a {
          color:#fff;
          font-weight:bold;
        }

        /* ✅ IMAGE CONTAINER (UPPER POSITION) */
        .case-study-images {
          position:absolute;
          top:40%;
          left:50%;
          transform:translate(-50%, -50%);
          width:650px;
          max-width:95%;
        }

        .case-study-images li {
          position:absolute;
          width:100%;
          opacity:0;
          transition:0.6s ease;
          text-align:center;
        }

        .case-study-images li.show {
          opacity:1;
        }

        img {
          width:100%;
          border-radius:14px;
          box-shadow:0 15px 40px rgba(0,0,0,0.6);
        }

        p {
          margin-top:12px;
          font-size:18px;
        }

        /* CURSOR */
        .cursor, .cursor2, .cursor3 {
          position:fixed;
          border-radius:50%;
          pointer-events:none;
          transform:translate(-50%,-50%);
          z-index:999;
        }

        .cursor {
          width:8px;
          height:8px;
          background:#fff;
        }

        .cursor2, .cursor3 {
          width:30px;
          height:30px;
          border:2px solid #fff;
          transition:.2s;
        }

        .cursor2.hover, .cursor3.hover {
          transform:translate(-50%,-50%) scale(2);
          background:#fff;
        }

        /* 📱 MOBILE */
        @media (max-width:768px) {
          .case-study-wrapper {
            position:static;
            transform:none;
            display:flex;
            justify-content:center;
            margin-top:20px;
          }

          .case-study-name a {
            writing-mode:horizontal-tb;
            margin:0 10px;
            font-size:12px;
          }

          .case-study-images {
            position:relative;
            top:auto;
            left:auto;
            transform:none;
            width:100%;
            margin-top:20px;
          }

          p {
            font-size:14px;
          }
        }
      `}</style>

      <div className="section">
        <div className="moving-image"></div>

        {/* LEFT MENU */}
        <ul className="case-study-wrapper">
          {rooms.map((room, index) => (
            <li
              key={index}
              className={`case-study-name ${
                activeIndex === index ? "active" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <a className="hover-target">{room.name}</a>
            </li>
          ))}
        </ul>

        {/* IMAGES */}
        <ul
          className="case-study-images"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {rooms.map((room, index) => (
            <li
              key={index}
              className={activeIndex === index ? "show" : ""}
            >
              <img src={room.image} alt="" />
              <p>{room.title}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* CURSOR */}
      <div id="cursor" className="cursor"></div>
      <div id="cursor2" className="cursor2"></div>
      <div id="cursor3" className="cursor3"></div>
    </>
  );
};

export default Apartment;