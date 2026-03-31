// import {
//   faBed,
//   faCalendarDays,
//   faCar,
//   faPerson,
//   faPlane,
//   faTaxi,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./header.css";
// import { DateRange } from "react-date-range";
// import { useContext, useState } from "react";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { format } from "date-fns";
// import { useNavigate } from "react-router-dom";
// import { SearchContext } from "../context/SearchContext";
// import { AuthContext } from "../context/AuthContext";

// const Header = ({ type }) => {
//   const [destination, setDestination] = useState("");
//   const [openDate, setOpenDate] = useState(false);
//   const [dates, setDates] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);
//   const [openOptions, setOpenOptions] = useState(false);
//   const [options, setOptions] = useState({
//     adult: 1,
//     children: 0,
//     room: 1,
//   });

//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);


//   const handleOption = (name, operation) => {
//     setOptions((prev) => {
//       return {
//         ...prev,
//         [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
//       };
//     });
//   };

//   const { dispatch } = useContext(SearchContext);

//   const handleSearch = () => {
//     dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
//     navigate("/hotels", { state: { destination, dates, options } });
//   };

//   return (
//     <div className="header">
//       <div
//         className={
//           type === "list" ? "headerContainer listMode" : "headerContainer"
//         }
//       >
//         <div className="headerList">
//           <div className="headerListItem active">
//             <FontAwesomeIcon icon={faBed} />
//             <span>Stays</span>
//           </div>
//           <div className="headerListItem">
//             <FontAwesomeIcon icon={faPlane} />
//             <span>Flights</span>
//           </div>
//           <div className="headerListItem">
//             <FontAwesomeIcon icon={faCar} />
//             <span>Car rentals</span>
//           </div>
//           <div className="headerListItem">
//             <FontAwesomeIcon icon={faBed} />
//             <span>Attractions</span>
//           </div>
//           <div className="headerListItem">
//             <FontAwesomeIcon icon={faTaxi} />
//             <span>Airport taxis</span>
//           </div>
//         </div>
//         {type !== "list" && (
//           <>
//             <h1 className="headerTitle">
//               A lifetime of discounts? It's Genius.
//             </h1>
//             <p className="headerDesc">
//               Get rewarded for your travels – unlock instant savings of 10% or
//               more with a free Lamabooking account
//             </p>
//             {!user && <button className="headerBtn">Sign in / Register</button>}
//             <div className="headerSearch">
//               <div className="headerSearchItem">
//                 <FontAwesomeIcon icon={faBed} className="headerIcon" />
//                 <input
//                   type="text"
//                   placeholder="Where are you going?"
//                   className="headerSearchInput"
//                   onChange={(e) => setDestination(e.target.value)}
//                 />
//               </div>
//               <div className="headerSearchItem">
//                 <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
//                 <span
//                   onClick={() => setOpenDate(!openDate)}
//                   className="headerSearchText"
//                 >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
//                   dates[0].endDate,
//                   "MM/dd/yyyy"
//                 )}`}</span>
//                 {openDate && (
//                   <DateRange
//                     editableDateInputs={true}
//                     onChange={(item) => setDates([item.selection])}
//                     moveRangeOnFirstSelection={false}
//                     ranges={dates}
//                     className="date"
//                     minDate={new Date()}
//                   />
//                 )}
//               </div>
//               <div className="headerSearchItem">
//                 <FontAwesomeIcon icon={faPerson} className="headerIcon" />
//                 <span
//                   onClick={() => setOpenOptions(!openOptions)}
//                   className="headerSearchText"
//                 >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
//                 {openOptions && (
//                   <div className="options">
//                     <div className="optionItem">
//                       <span className="optionText">Adult</span>
//                       <div className="optionCounter">
//                         <button
//                           disabled={options.adult <= 1}
//                           className="optionCounterButton"
//                           onClick={() => handleOption("adult", "d")}
//                         >
//                           -
//                         </button>
//                         <span className="optionCounterNumber">
//                           {options.adult}
//                         </span>
//                         <button
//                           className="optionCounterButton"
//                           onClick={() => handleOption("adult", "i")}
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                     <div className="optionItem">
//                       <span className="optionText">Children</span>
//                       <div className="optionCounter">
//                         <button
//                           disabled={options.children <= 0}
//                           className="optionCounterButton"
//                           onClick={() => handleOption("children", "d")}
//                         >
//                           -
//                         </button>
//                         <span className="optionCounterNumber">
//                           {options.children}
//                         </span>
//                         <button
//                           className="optionCounterButton"
//                           onClick={() => handleOption("children", "i")}
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                     <div className="optionItem">
//                       <span className="optionText">Room</span>
//                       <div className="optionCounter">
//                         <button
//                           disabled={options.room <= 1}
//                           className="optionCounterButton"
//                           onClick={() => handleOption("room", "d")}
//                         >
//                           -
//                         </button>
//                         <span className="optionCounterNumber">
//                           {options.room}
//                         </span>
//                         <button
//                           className="optionCounterButton"
//                           onClick={() => handleOption("room", "i")}
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <div className="headerSearchItem">
//                 <button className="headerBtn" onClick={handleSearch}>
//                   Search
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;
///////////////////////////////////////////////////////////////////////////////////////////////////////
// import {
//   faBed,
//   faCalendarDays,
//   faCar,
//   faPerson,
//   faPlane,
//   faTaxi,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { DateRange } from "react-date-range";
// import { useContext, useState } from "react";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import { format } from "date-fns";
// import { Link, useNavigate } from "react-router-dom";
// import { SearchContext } from "../context/SearchContext";
// import { AuthContext } from "../context/AuthContext";

// const Header = ({ type }) => {
//   const [destination, setDestination] = useState("");
//   const [openDate, setOpenDate] = useState(false);
//   const [dates, setDates] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);
//   const [openOptions, setOpenOptions] = useState(false);
//   const [options, setOptions] = useState({
//     adult: 1,
//     children: 0,
//     room: 1,
//   });

//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);
//   const { dispatch } = useContext(SearchContext);

//   const handleOption = (name, operation) => {
//     setOptions((prev) => ({
//       ...prev,
//       [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
//     }));
//   };

//   const handleSearch = () => {
//     dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
//     navigate("/hotels", { state: { destination, dates, options } });
//   };

//   return (
//     <>
//       {/* 🔥 CSS INSIDE */}
//       <style>{`
//         .header {
//           background: linear-gradient(135deg, #003580, #0071c2);
//           color: white;
//           display: flex;
//           justify-content: center;
//         }

//         .headerContainer {
//           width: 100%;
//           max-width: 1200px;
//           margin: 20px;
//         }

//         .headerList {
//           display: flex;
//           gap: 20px;
//           flex-wrap: wrap;
//           margin-bottom: 40px;
//         }

//         .headerListItem {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 8px 14px;
//           border-radius: 25px;
//           cursor: pointer;
//           transition: 0.3s;
//         }

//         .headerListItem:hover {
//           background: rgba(255,255,255,0.2);
//         }

//         .headerListItem.active {
//           border: 2px solid white;
//           background: rgba(255,255,255,0.2);
//         }

//         .headerTitle {
//           font-size: 40px;
//           font-weight: bold;
//         }

//         .headerDesc {
//           margin: 15px 0;
//           opacity: 0.9;
//         }

//         .headerBtn {
//           background: #ff7a00;
//           border: none;
//           padding: 10px 20px;
//           color: white;
//           font-weight: 600;
//           border-radius: 6px;
//           cursor: pointer;
//           transition: 0.3s;
//         }

//         .headerBtn:hover {
//           background: #e66a00;
//         }

//         .headerSearch {
//           background: white;
//           border: 3px solid #ffb700;
//           border-radius: 12px;
//           padding: 10px;
//           display: flex;
//           gap: 10px;
//           flex-wrap: wrap;
//           box-shadow: 0 5px 20px rgba(0,0,0,0.2);
//           margin-top: 20px;
//         }

//         .headerSearchItem {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           flex: 1;
//           min-width: 180px;
//           color: gray;
//         }

//         .headerIcon {
//           color: #0071c2;
//         }

//         .headerSearchInput {
//           border: none;
//           outline: none;
//           width: 100%;
//         }

//         .headerSearchText {
//           cursor: pointer;
//         }

//         .options {
//           position: absolute;
//           top: 60px;
//           background: white;
//           color: black;
//           border-radius: 10px;
//           padding: 15px;
//           box-shadow: 0 0 10px rgba(0,0,0,0.2);
//           z-index: 10;
//         }

//         .optionItem {
//           display: flex;
//           justify-content: space-between;
//           margin: 10px 0;
//         }

//         .optionCounter {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }

//         .optionCounterButton {
//           width: 30px;
//           height: 30px;
//           border: 1px solid #0071c2;
//           background: white;
//           color: #0071c2;
//           cursor: pointer;
//           border-radius: 5px;
//         }

//         .date {
//           position: absolute;
//           top: 60px;
//           z-index: 10;
//         }

//         @media (max-width: 768px) {
//           .headerTitle {
//             font-size: 26px;
//           }

//           .headerSearch {
//             flex-direction: column;
//           }

//           .headerBtn {
//             width: 100%;
//           }
//         }
//       `}</style>

//       <div className="header">
//         <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
          
//           {/* 🔹 TOP MENU */}
//           <div className="headerList">
//             <div className="headerListItem active">
//               <FontAwesomeIcon icon={faBed} />
//               <span>Stays</span>
//             </div>
           
//               <Link to="/flight">
//               <div className="headerListItem" >
//               <FontAwesomeIcon icon={faPlane} />
//               <span>Flights</span>
//             </div></ Link>
//             <div className="headerListItem">
//               <FontAwesomeIcon icon={faCar} />
//               <span>Car rentals</span>
//             </div>
//             <div className="headerListItem">
//               <FontAwesomeIcon icon={faBed} />
//               <span>Attractions</span>
//             </div>
//             <div className="headerListItem">
//               <FontAwesomeIcon icon={faTaxi} />
//               <span>Airport taxis</span>
//             </div>
//           </div>

//           {type !== "list" && (
//             <>
//               <h1 className="headerTitle">Find your next stay</h1>
//               <p className="headerDesc">
//                 Search deals on hotels, homes, and much more...
//               </p>

//               {!user && <button className="headerBtn">Sign in / Register</button>}

//               {/* 🔍 SEARCH BOX */}
//               <div className="headerSearch">

//                 {/* DESTINATION */}
//                 <div className="headerSearchItem">
//                   <FontAwesomeIcon icon={faBed} className="headerIcon" />
//                   <input
//                     type="text"
//                     placeholder="Where are you going?"
//                     className="headerSearchInput"
//                     onChange={(e) => setDestination(e.target.value)}
//                   />
//                 </div>

//                 {/* DATE */}
//                 <div className="headerSearchItem">
//                   <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
//                   <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
//                     {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
//                       dates[0].endDate,
//                       "MM/dd/yyyy"
//                     )}`}
//                   </span>

//                   {openDate && (
//                     <DateRange
//                       editableDateInputs={true}
//                       onChange={(item) => setDates([item.selection])}
//                       ranges={dates}
//                       minDate={new Date()}
//                       className="date"
//                     />
//                   )}
//                 </div>

//                 {/* OPTIONS */}
//                 <div className="headerSearchItem">
//                   <FontAwesomeIcon icon={faPerson} className="headerIcon" />
//                   <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
//                     {`${options.adult} adult · ${options.children} children · ${options.room} room`}
//                   </span>

//                   {openOptions && (
//                     <div className="options">
//                       {["adult", "children", "room"].map((item) => (
//                         <div className="optionItem" key={item}>
//                           <span>{item}</span>
//                           <div className="optionCounter">
//                             <button
//                               disabled={options[item] <= (item === "children" ? 0 : 1)}
//                               onClick={() => handleOption(item, "d")}
//                               className="optionCounterButton"
//                             >-</button>

//                             <span>{options[item]}</span>

//                             <button
//                               onClick={() => handleOption(item, "i")}
//                               className="optionCounterButton"
//                             >+</button>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* SEARCH BUTTON */}
//                 <div className="headerSearchItem">
//                   <button className="headerBtn" onClick={handleSearch}>
//                     Search
//                   </button>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;






/////////////////////////////////////////////////////////////////////////////////
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(SearchContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
    }));
  };

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <>
      {/* 🔥 CSS INSIDE */}
      <style>{`
        .header {
          background: linear-gradient(135deg, #003580, #0071c2);
          color: white;
          display: flex;
          justify-content: center;
        }

        .headerContainer {
          width: 100%;
          max-width: 1200px;
          margin: 20px;
        }

        .headerList {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .headerListItem {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 25px;
          cursor: pointer;
          transition: 0.3s;
          font-weight: bold;
          color: white;
        }

        .headerListItem:hover {
          background: rgba(255,255,255,0.2);
        }

        .headerListItem.active {
          border: 2px solid white;
          background: rgba(255,255,255,0.2);
        }

        .headerLink {
          text-decoration: none;
          color: inherit;
        }

        .headerTitle {
          font-size: 40px;
          font-weight: bold;
        }

        .headerDesc {
          margin: 15px 0;
          opacity: 0.9;
        }

        .headerBtn {
          background: #ff7a00;
          border: none;
          padding: 10px 20px;
          color: white;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s;
        }

        .headerBtn:hover {
          background: #e66a00;
        }

        .headerSearch {
          background: white;
          border: 3px solid #ffb700;
          border-radius: 12px;
          padding: 10px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
          margin-top: 20px;
        }

        .headerSearchItem {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
          min-width: 180px;
          color: gray;
        }

        .headerIcon {
          color: #0071c2;
        }

        .headerSearchInput {
          border: none;
          outline: none;
          width: 100%;
        }

        .headerSearchText {
          cursor: pointer;
        }

        .options {
          position: absolute;
          top: 60px;
          background: white;
          color: black;
          border-radius: 10px;
          padding: 15px;
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
          z-index: 10;
        }

        .optionItem {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
        }

        .optionCounter {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .optionCounterButton {
          width: 30px;
          height: 30px;
          border: 1px solid #0071c2;
          background: white;
          color: #0071c2;
          cursor: pointer;
          border-radius: 5px;
        }

        .date {
          position: absolute;
          top: 60px;
          z-index: 10;
        }

        @media (max-width: 768px) {
          .headerTitle {
            font-size: 26px;
          }

          .headerSearch {
            flex-direction: column;
          }

          .headerBtn {
            width: 100%;
          }
        }
      `}</style>

      <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
          
          {/* 🔹 TOP MENU */}
          <div className="headerList">
            {/* Stays */}
            <Link to="/hotels" className="headerLink">
              <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
              </div>
            </Link>

            {/* Flights */}
            <Link to="/flight" className="headerLink">
              <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
              </div>
            </Link>

            {/* Car rentals */}
            <Link to="/cars" className="headerLink">
              <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>
              </div>
            </Link>

            {/* Attractions */}
            <Link to="/attractions" className="headerLink">
              <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
              </div>
            </Link>

            {/* Airport taxis */}
            <Link to="/taxis" className="headerLink">
              <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport taxis</span>
              </div>
            </Link>
          </div>

          {type !== "list" && (
            <>
              <h1 className="headerTitle">Find your next stay</h1>
              <p className="headerDesc">
                Search deals on hotels, homes, and much more...
              </p>

              {!user && <button className="headerBtn">Sign in / Register</button>}

              {/* 🔍 SEARCH BOX */}
              <div className="headerSearch">
                {/* DESTINATION */}
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>

                {/* DATE */}
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                    {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                      dates[0].endDate,
                      "MM/dd/yyyy"
                    )}`}
                  </span>

                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      ranges={dates}
                      minDate={new Date()}
                      className="date"
                    />
                  )}
                </div>

                {/* OPTIONS */}
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
                    {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                  </span>

                  {openOptions && (
                    <div className="options">
                      {["adult", "children", "room"].map((item) => (
                        <div className="optionItem" key={item}>
                          <span>{item}</span>
                          <div className="optionCounter">
                            <button
                              disabled={options[item] <= (item === "children" ? 0 : 1)}
                              onClick={() => handleOption(item, "d")}
                              className="optionCounterButton"
                            >-</button>

                            <span>{options[item]}</span>

                            <button
                              onClick={() => handleOption(item, "i")}
                              className="optionCounterButton"
                            >+</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* SEARCH BUTTON */}
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;