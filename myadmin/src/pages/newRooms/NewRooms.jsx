// import "./newrooms.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { useState } from "react";
// import axios from 'axios'
// import { roomInputs } from "../../formSource";
// import useFetch from "../../hooks/useFetch";
// const NewRooms = () => {
//   const [rooms, setRooms] = useState([]);
//   const [info, setInfo] = useState({});
//   const [hotelid, setHotelid] = useState()

//   const { data, loading, error } = useFetch("http://localhost:8000/api/hotels")
//   //console.log(data)
//   const handleChange = (e) => {
//     setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }))
//   }

//   const handleClick = async e => {
//     e.preventDefault();
//     const roomNumbers = rooms.split(",").map(room => ({ number: room }))
//     try {
//       await axios.post(`http://localhost:8000/api/addroom/${hotelid}`,{...info , roomNumbers})

//     } catch (err) {
//       console.log(err)
//     }

//   }

//   return (
//     <div className="new">
//       <Sidebar />
//       <div className="newContainer">
//         <Navbar />
//         <div className="top">
//           <h1>Add New Room</h1>
//         </div>
//         <div className="bottom">

//           <div className="right">
//             <form>
//               {roomInputs.map((input) => (
//                 <div className="formInput">
//                   <label>{input.label}</label>
//                   <input onChange={handleChange} type={input.type} placeholder={input.placeholder} id={input.id} />
//                 </div>
//               ))}
//               <div className="formInput" >
//                 <label>Rooms</label>
//                 <textarea onChange={e => setRooms(e.target.value)} placeholder="Give comma between room numbers"></textarea>
//               </div>

//               <div className="formInput" >
//                 <label>choose a hotel</label>
//                 <select name="" id="hotelid" onChange={(e) => setHotelid(e.target.value)}>
//                   {loading ? "loading " : data && data.map((hotel) => (
//                     <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
//                   ))}
//                 </select>
//               </div>
//               <button onClick={handleClick}>Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewRooms;


import "./newrooms.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";

const NewRooms = () => {
  const [rooms, setRooms] = useState("");
  const [info, setInfo] = useState({});
  const [hotelid, setHotelid] = useState("");

  // ✅ FIXED API (proxy use)
  const { data, loading } = useFetch("http://localhost:8000/auth/allhotels");

  // 🔥 INPUT HANDLE
  const handleChange = (e) => {
    let value = e.target.value;

    // number conversion
    if (e.target.type === "number") {
      value = Number(value);
    }

    setInfo((prev) => ({
      ...prev,
      [e.target.id]: value,
    }));
  };

  // 🔥 SUBMIT
  const handleClick = async (e) => {
    e.preventDefault();

    // roomNumbers convert
    const roomNumbers = rooms.split(",").map((room) => ({
      number: Number(room.trim()),
    }));

    try {
      await axios.post( `http://localhost:8000/auth/addroom/${hotelid}`, {
        ...info,
        roomNumbers,
      });

      alert("Room Added Successfully ✅");

      // reset form
      setRooms("");
      setInfo({});
      setHotelid("");

    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);
    }
  };

  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1>Add New Room</h1>
        </div>

        <div className="bottom">
          <div className="right">
            <form>

              {/* INPUT FIELDS */}
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    onChange={handleChange}
                  />
                </div>
              ))}

              {/* ROOM NUMBERS */}
              <div className="formInput">
                <label>Room Numbers</label>
                <textarea
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="Enter like: 101,102,103"
                />
              </div>

              {/* HOTEL SELECT */}
              <div className="formInput">
                <label>Select Hotel</label>

                <select onChange={(e) => setHotelid(e.target.value)}>
                  <option value="">Select Hotel</option>

                  {loading ? (
                    <option>Loading...</option>
                  ) : (
                    data?.map((hotel) => (
                      <option key={hotel._id} value={hotel._id}>
                        {hotel.name}
                      </option>
                    ))
                  )}
                </select>
              </div>

              {/* SUBMIT */}
              <button onClick={handleClick}>Add Room</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRooms;