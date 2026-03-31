// import React from 'react'
// import "../components/EmailList.css"

// const EmailList = () => {
//   return (
//     <div className="mail">
//       <h1 className="mailTitle">Save time, save money!</h1>
//       <span className="mailDesc">Sign up and we'll send the best deals to you</span>
//       <div className="mailInputContainer">
//         <input type="text" placeholder="Your Email" />
//         <button>Subscribe</button>
//       </div>
//     </div>
//   )
// }

// export default EmailList

// const EmailList = () => {
//   return (
//     <>
//       <style>
//         {`
//         .mail{
//           width: 100%;
//           margin-top: 50px;
//           background-color: #003580;
//           color: white;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 20px;
//           padding: 40px;
//           box-sizing: border-box; /* 🔥 MAIN FIX */
//         }

//         .mailInputContainer{
//           display: flex;
//           flex-wrap: wrap; /* responsive */
//           justify-content: center;
//           gap: 10px;
//         }

//         .mailInputContainer>input{
//           width: 300px;
//           max-width: 100%; /* 🔥 overflow prevent */
//           height: 30px;
//           padding: 10px;
//           border: none;
//           border-radius: 5px;
//         }

//         .mailInputContainer>button{
//           height: 50px;
//           background-color: #0071c2;
//           color: white;
//           font-weight: 500;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           padding: 0 20px;
//         }

//         /* 📱 mobile fix */
//         @media (max-width: 500px){
//           .mail{
//             padding: 30px 15px;
//           }
//         }
//         `}
//       </style>

//       <div className="mail">
//         <h1 className="mailTitle">Save time, save money!</h1>
//         <span className="mailDesc">
//           Sign up and we'll send the best deals to you
//         </span>

//         <div className="mailInputContainer">
//           <input type="text" placeholder="Your Email" />
//           <button>Subscribe</button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default EmailList
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const EmailList = () => {
  return (
    <>
      <style>
        {`
        .mail{
          width: 100%;
          margin-top: -200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          padding: 50px;
          box-sizing: border-box;
          border-radius: 20px;
          background: linear-gradient(135deg, #003580, #0071c2);
          color: white;
          overflow: hidden;
          flex-wrap: wrap;
        }

        .mailLeft{
          flex: 1;
          min-width: 280px;
        }

        .mailTitle{
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .mailDesc{
          font-size: 16px;
          opacity: 0.9;
          margin-bottom: 20px;
          display: block;
        }

        .mailInputContainer{
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .mailInputContainer input{
          flex: 1;
          min-width: 200px;
          padding: 12px;
          border: none;
          border-radius: 8px;
          outline: none;
        }

        .mailInputContainer button{
          padding: 12px 20px;
          background-color: #ffb700;
          color: black;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s;
        }

        .mailInputContainer button:hover{
          background-color: #ffa500;
        }

        .mailRight{
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 250px;
        }

        .mailRight img{
          width: 100%;
          max-width: 350px;
          border-radius: 20px;
          object-fit: cover;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        /* 📱 Responsive */
        @media (max-width: 768px){
          .mail{
            flex-direction: column;
            text-align: center;
            padding: 30px 20px;
          }

          .mailTitle{
            font-size: 26px;
          }

          .mailRight img{
            max-width: 280px;
          }
        }
        `}
      </style>

      <div className="mail">
        {/* LEFT SIDE */}
        <div className="mailLeft">
          <h1 className="mailTitle">Save time, save money 💸</h1>
          <span className="mailDesc">
            Sign up and get the best hotel deals instantly in your inbox!
          </span>

          <div className="mailInputContainer">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="mailRight">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
            alt="hotel"
          />
        </div>
      </div>
    </>
  );
};

export default EmailList;