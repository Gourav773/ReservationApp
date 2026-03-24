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

const EmailList = () => {
  return (
    <>
      <style>
        {`
        .mail{
          width: 100%;
          margin-top: 50px;
          background-color: #003580;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 40px;
          box-sizing: border-box; /* 🔥 MAIN FIX */
        }

        .mailInputContainer{
          display: flex;
          flex-wrap: wrap; /* responsive */
          justify-content: center;
          gap: 10px;
        }

        .mailInputContainer>input{
          width: 300px;
          max-width: 100%; /* 🔥 overflow prevent */
          height: 30px;
          padding: 10px;
          border: none;
          border-radius: 5px;
        }

        .mailInputContainer>button{
          height: 50px;
          background-color: #0071c2;
          color: white;
          font-weight: 500;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          padding: 0 20px;
        }

        /* 📱 mobile fix */
        @media (max-width: 500px){
          .mail{
            padding: 30px 15px;
          }
        }
        `}
      </style>

      <div className="mail">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">
          Sign up and we'll send the best deals to you
        </span>

        <div className="mailInputContainer">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </>
  )
}

export default EmailList