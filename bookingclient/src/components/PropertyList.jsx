// import "../components/Propertylist.css"
// import useFetch from "../hooks/useFetch";

// const PropertyList = () => {
//     const { data, loading, error } = useFetch("http://localhost:8000/api/hotels/CountByType");

//     const images = [
//       "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
//       "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
//       "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
//       "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
//       "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
//     ];
//     return (
//       <div className="pList">
//         {loading ? (
//           "loading"
//         ) : (
//           <>
//             {data &&
//               images.map((img,i) => (
//                 <div className="pListItem" key={i}>
//                   <img
//                     src={img}
//                     alt=""
//                     className="pListImg"
//                   />
//                   <div className="pListTitles">
//                     <h1>{data[i]?.type}</h1>
//                     <h2>{data[i]?.count} {data[i]?.type}</h2>
//                   </div>
//                 </div>
//               ))}
//           </>
//         )}
//       </div>
//     )
// }

// export default PropertyList


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useRef, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const PropertyList = () => {
  const { data, loading } = useFetch(
    "http://localhost:8000/auth/hotels/countByType"
  );

  const sliderRef = useRef();

  // Auto Slide
  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (slider) {
        slider.scrollBy({
          left: 260,
          behavior: "smooth",
        });

        // loop back
        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth - 10
        ) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  return (
    <>
      <style>
        {`
.pListContainer {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 30px 20px;
}

.pListHeading {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 25px;
  text-align: center;
}

/* SLIDER */
.pList {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  scroll-behavior: smooth;
  scrollbar-width: none;
}
.pList::-webkit-scrollbar {
  display: none;
}





.pListHeading {
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  color: #222;
}

/* Colored words */
.pListHeading span {
  background: linear-gradient(90deg, #ff6a00, #ffb347);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Underline effect */
.pListHeading::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -8px;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  border-radius: 5px;
  background: linear-gradient(90deg, #ff6a00, #ffb347);
  transition: 0.3s;
}

/* Hover pe underline bada ho */
.pListHeading:hover::after {
  width: 140px;
}
/* CARD */
.pListItem {
  min-width: 250px;
  flex: 0 0 auto;
  border-radius: 20px;
  background: white;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  transition: 0.3s;
  text-align: center;
  padding-bottom: 20px;
}

.pListItem:hover {
  transform: translateY(-8px);
}

.imgWrapper {
  width: 140px;
  height: 140px;
  margin: 20px auto;
  border-radius: 50%;
  overflow: hidden;
}

.pListImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pListTitles h3 {
  font-size: 18px;
  margin: 0;
}

.pListTitles p {
  font-size: 14px;
  color: gray;
}

/* Responsive */
@media (min-width: 1024px) {
  .pListItem {
    min-width: 22%;
  }
}

@media (max-width: 768px) {
  .pListItem {
    min-width: 45%;
  }
}

@media (max-width: 480px) {
  .pListItem {
    min-width: 80%;
  }
}
`}
      </style>

      <div className="pListContainer">
       <h2 className="pListHeading">
  Browse by <span>Property Type</span>
</h2>

        <div className="pList" ref={sliderRef}>
          {loading ? (
            <span>Loading...</span>
          ) : (
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <div className="imgWrapper">
                  <img src={img} alt="" className="pListImg" />
                </div>

                <div className="pListTitles">
                  <h3>{data[i]?.type || "Property"}</h3>
                  <p>{data[i]?.count || 0} properties</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default PropertyList;