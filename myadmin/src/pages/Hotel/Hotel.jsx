// import "./hotel.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import { useLocation } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import { useState } from "react";
// import axios from "axios";

// const Hotel = () => {
//   const location = useLocation();
//   const id = location.pathname.split("/")[2];

//   const { data, loading, reFetch } = useFetch(
//     `http://localhost:8000/auth/hotels/${id}`
//   );

//   const [deleteOpen, setDeleteOpen] = useState(false);
//   const [editOpen, setEditOpen] = useState(false);
//   const [roomOpen, setRoomOpen] = useState(false);
//   const [slide, setSlide] = useState(0);

//   const [editData, setEditData] = useState({});
//   const [roomData, setRoomData] = useState({});

//   /* DELETE */
//   const handleDelete = async () => {
//     await axios.delete(`http://localhost:8000/auth/hotels/${id}`);
//     alert("Deleted ✅");
//   };

//   /* EDIT */
//   const handleEdit = async () => {
//     await axios.put(
//       `http://localhost:8000/auth/hotels/${id}`,
//       editData
//     );
//     setEditOpen(false);
//     reFetch();
//   };

//   /* ADD ROOM */
//   const handleAddRoom = async () => {
//     await axios.post(
//       `http://localhost:8000/auth/addroom/${id}`,
//       roomData
//     );
//     setRoomOpen(false);
//     reFetch();
//   };

//   return (
//     <div className="hotel">
//       <Sidebar />
//       <div className="hotelContainer">
//         <Navbar />

//         {loading ? (
//           "Loading..."
//         ) : (
//           <>
//             {/* IMAGE SLIDER */}
//             <div className="slider">
//               <img
//                 src={
//                   data.photos?.[slide] ||
//                   "https://via.placeholder.com/600"
//                 }
//                 alt=""
//               />

//               <div className="controls">
//                 <button onClick={() => setSlide(slide - 1)}>
//                   ◀
//                 </button>
//                 <button onClick={() => setSlide(slide + 1)}>
//                   ▶
//                 </button>
//               </div>
//             </div>

//             <div className="top">
//               <div className="left">
//                 <div
//                   className="editButton"
//                   onClick={() => {
//                     setEditData(data);
//                     setEditOpen(true);
//                   }}
//                 >
//                   Edit
//                 </div>

//                 <div
//                   className="deleteButton"
//                   onClick={() => setDeleteOpen(true)}
//                 >
//                   Delete
//                 </div>

//                 <h1 className="title">{data.name}</h1>

//                 <div className="item">
//                   <img
//                     src={
//                       data.photos?.[0] ||
//                       "https://via.placeholder.com/150"
//                     }
//                     className="itemImg"
//                   />

//                   <div className="details">
//                     <div className="detailItem">
//                       <b>Type:</b> {data.type}
//                     </div>
//                     <div className="detailItem">
//                       <b>City:</b> {data.city}
//                     </div>
//                     <div className="detailItem">
//                       <b>Price:</b> ₹{data.cheapestprice}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ROOMS */}
//             <div className="bottom">
//               <div className="titleRow">
//                 <h2>Rooms</h2>

//                 <button
//                   className="addRoomBtn"
//                   onClick={() => setRoomOpen(true)}
//                 >
//                   + Add Room
//                 </button>
//               </div>

//               {data.rooms?.map((room) => (
//                 <div key={room._id} className="roomCard">
//                   {room.title} • ₹{room.price}
//                 </div>
//               ))}
//             </div>

//             {/* DELETE MODAL */}
//             {deleteOpen && (
//               <div className="modal">
//                 <div className="modalContent">
//                   <h3>Delete?</h3>
//                   <button onClick={handleDelete}>Yes</button>
//                   <button onClick={() => setDeleteOpen(false)}>
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* EDIT MODAL */}
//             {editOpen && (
//               <div className="modal">
//                 <div className="modalContent">
//                   <input
//                     placeholder="Name"
//                     onChange={(e) =>
//                       setEditData({
//                         ...editData,
//                         name: e.target.value,
//                       })
//                     }
//                   />
//                   <input
//                     placeholder="City"
//                     onChange={(e) =>
//                       setEditData({
//                         ...editData,
//                         city: e.target.value,
//                       })
//                     }
//                   />

//                   <button onClick={handleEdit}>Update</button>
//                   <button onClick={() => setEditOpen(false)}>
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* ROOM MODAL */}
//             {roomOpen && (
//               <div className="modal">
//                 <div className="modalContent">
//                   <input
//                     placeholder="Title"
//                     onChange={(e) =>
//                       setRoomData({
//                         ...roomData,
//                         title: e.target.value,
//                       })
//                     }
//                   />
//                   <input
//                     placeholder="Price"
//                     onChange={(e) =>
//                       setRoomData({
//                         ...roomData,
//                         price: e.target.value,
//                       })
//                     }
//                   />

//                   <button onClick={handleAddRoom}>
//                     Add Room
//                   </button>
//                   <button onClick={() => setRoomOpen(false)}>
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Hotel;

import "./hotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import axios from "axios";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading, reFetch } = useFetch(
    `http://localhost:8000/auth/hotels/${id}`
  );

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [roomOpen, setRoomOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  const [editData, setEditData] = useState({});
  const [roomData, setRoomData] = useState({});

  /* SLIDER FIX */
  const handleSlide = (dir) => {
    if (!data.photos?.length) return;

    if (dir === "left") {
      setSlide(slide === 0 ? data.photos.length - 1 : slide - 1);
    } else {
      setSlide(slide === data.photos.length - 1 ? 0 : slide + 1);
    }
  };

  /* DELETE */
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/auth/hotels/${id}`);
      alert("Deleted ✅");

      // 🔥 redirect after delete
      window.location.href = "/hotels";

    } catch (err) {
      console.log(err);
    }
  };

  /* EDIT */
  const handleEdit = async () => {
    try {
      await axios.put(
        `http://localhost:8000/auth/hotels/${id}`,
        editData,
        { withCredentials: true } // 🔥 MUST

      );

      alert("Updated ✅");
      setEditOpen(false);
      reFetch();

    } catch (err) {
      console.log(err);
    }
  };

  /* ADD ROOM */
  const handleAddRoom = async () => {
    try {
      await axios.post(
        `http://localhost:8000/auth/addroom/${id}`,
        roomData
      );

      alert("Room Added ✅");
      setRoomOpen(false);
      reFetch();

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="hotel">
      <Sidebar />

      <div className="hotelContainer">
        <Navbar />

        {loading ? (
          "Loading..."
        ) : (
          <>
            {/* HERO */}
            <div className="hero">
              <img
                src={
                  data.photos?.[slide] ||
                  "https://via.placeholder.com/800"
                }
                alt=""
              />

              <div className="overlay">
                <h1>{data.name}</h1>
                <p>{data.city} • {data.type}</p>
              </div>

              <div className="sliderControls">
                <button onClick={() => handleSlide("left")}>◀</button>
                <button onClick={() => handleSlide("right")}>▶</button>
              </div>

              <div className="actions">
                <button
                  className="edit"
                  onClick={() => {
                    setEditData({
                      name: data.name,
                      city: data.city,
                      type: data.type,
                      address: data.address,
                      cheapestprice: data.cheapestprice,
                    });
                    setEditOpen(true);
                  }}
                >
                  Edit
                </button>

                <button
                  className="delete"
                  onClick={() => setDeleteOpen(true)}
                >
                  Delete
                </button>
              </div>
            </div>

            {/* INFO */}
            <div className="infoGrid">
              <div className="infoBox">
                <span>Price</span>
                <h3>₹{data.cheapestprice}</h3>
              </div>

              <div className="infoBox">
                <span>Distance</span>
                <h3>{data.distance}</h3>
              </div>

              <div className="infoBox">
                <span>Address</span>
                <h3>{data.address}</h3>
              </div>
            </div>

            {/* ADD ROOM */}
            <div className="addRoom">
              <button onClick={() => setRoomOpen(true)}>
                + Add Room
              </button>
            </div>

            {/* ROOMS */}
            <div className="rooms">
              {data.rooms?.length > 0 ? (
                data.rooms.map((room) => (
                  <div key={room._id} className="roomCard">
                    <h4>{room.title}</h4>
                    <p>{room.desc}</p>
                    <div className="price">₹{room.price}</div>
                  </div>
                ))
              ) : (
                <p>No Rooms Added</p>
              )}
            </div>

            {/* DELETE MODAL */}
            {deleteOpen && (
              <div className="modal">
                <div className="modalContent">
                  <h3>Delete Hotel?</h3>

                  <div className="modalButtons">
                    <button className="confirmDelete" onClick={handleDelete}>
                      Yes Delete
                    </button>
                    <button onClick={() => setDeleteOpen(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* EDIT MODAL */}
            {editOpen && (
              <div className="modal">
                <div className="modalContent">
                  <h3>Edit Hotel</h3>

                  <input
                    placeholder="Name"
                    value={editData.name || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, name: e.target.value })
                    }
                  />

                  <input
                    placeholder="Type"
                    value={editData.type || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, type: e.target.value })
                    }
                  />

                  <input
                    placeholder="City"
                    value={editData.city || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, city: e.target.value })
                    }
                  />

                  <input
                    placeholder="Address"
                    value={editData.address || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, address: e.target.value })
                    }
                  />

                  <input
                    placeholder="Distance"
                    value={editData.distance || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, distance: e.target.value })
                    }
                  />

                  <input
                    placeholder="Title"
                    value={editData.title || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, title: e.target.value })
                    }
                  />

                  <input
                    placeholder="Description"
                    value={editData.desc || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, desc: e.target.value })
                    }
                  />

                  <input
                    placeholder="Price"
                    type="number"
                    value={editData.cheapestprice || ""}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        cheapestprice: Number(e.target.value),
                      })
                    }
                  />

                  <div className="modalButtons">
                    <button onClick={handleEdit}>Update</button>
                    <button onClick={() => setEditOpen(false)}>Cancel</button>
                  </div>
                </div>
              </div>
            )}
            {/* ROOM MODAL */}
            {roomOpen && (
              <div className="modal">
                <div className="modalContent">
                  <h3>Add Room</h3>

                  <input
                    placeholder="Room Title"
                    onChange={(e) =>
                      setRoomData({ ...roomData, title: e.target.value })
                    }
                  />

                  <input
                    placeholder="Price"
                    type="number"
                    onChange={(e) =>
                      setRoomData({
                        ...roomData,
                        price: Number(e.target.value),
                      })
                    }
                  />

                  <input
                    placeholder="Max People"
                    type="number"
                    onChange={(e) =>
                      setRoomData({
                        ...roomData,
                        maxPeople: Number(e.target.value),
                      })
                    }
                  />

                  <input
                    placeholder="Description"
                    onChange={(e) =>
                      setRoomData({ ...roomData, desc: e.target.value })
                    }
                  />

                  <div className="modalButtons">
                    <button onClick={handleAddRoom}>Add Room</button>
                    <button onClick={() => setRoomOpen(false)}>Cancel</button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Hotel;