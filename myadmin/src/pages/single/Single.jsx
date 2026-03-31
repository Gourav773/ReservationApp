// import "./single.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";

// const Single = () => {
//    const { id } = useParams();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//        const res = await axios.get(`http://localhost:8000/auth/users/${id}`);
//         setUser(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchUser();
//   }, [id]);
//   return (

//     <div className="single">
//       <Sidebar />
//       <div className="singleContainer">
//         <Navbar />
//         <div className="top">
//           <div className="left">
//             <div className="editButton">Edit</div>
//             <h1 className="title">Information</h1>
//             {/* <div className="item">
//               <img
//                 src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
//                 alt=""
//                 className="itemImg"
//               />
//               <div className="details">
//                 <h1 className="itemTitle">Jane Doe</h1>
//                 <div className="detailItem">
//                   <span className="itemKey">Email:</span>
//                   <span className="itemValue">janedoe@gmail.com</span>
//                 </div>
//                 <div className="detailItem">
//                   <span className="itemKey">Phone:</span>
//                   <span className="itemValue">+1 2345 67 89</span>
//                 </div>
//                 <div className="detailItem">
//                   <span className="itemKey">Address:</span>
//                   <span className="itemValue">
//                     Elton St. 234 Garden Yd. NewYork
//                   </span>
//                 </div>
//                 <div className="detailItem">
//                   <span className="itemKey">Country:</span>
//                   <span className="itemValue">USA</span>
//                 </div> */}
//                 <div className="item">
//               <img
//                 src={user?.img || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
//                 alt=""
//                 className="itemImg"
//               />

//               <div className="details">
//                 <h1 className="itemTitle">{user?.username}</h1>

//                 <div className="detailItem">
//                   <span className="itemKey">Email:</span>
//                   <span className="itemValue">{user?.email}</span>
//                 </div>

//                 <div className="detailItem">
//                   <span className="itemKey">Phone:</span>
//                   <span className="itemValue">{user?.phone}</span>
//                 </div>

//                 <div className="detailItem">
//                   <span className="itemKey">Country:</span>
//                   <span className="itemValue">{user?.country}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="right">
//             <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
//           </div>
//         </div>
//         <div className="bottom">
//         <h1 className="title">Last Transactions</h1>
//           <List/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Single;

// import "./single.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// // const Single = () => {
// //   const { id } = useParams();
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       try {
// //         console.log("User ID:", id);

// //         const res = await axios.get(
// //           `http://localhost:8000/auth/users/${id}`
// //         );

// //         setUser(res.data);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };

// //     if (id) fetchUser();
// //   }, [id]);

// //   if (!user) return <div>Loading...</div>;
// const Single = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // ✅ add
//   const [open, setOpen] = useState(false);
// const [formData, setFormData] = useState({});

//   useEffect(() => {
//   const fetchUser = async () => {
//     try {
//       console.log("User ID:", id);

//       const res = await axios.get(
//         `http://localhost:8000/auth/users/${id}`
//       );

//       setUser(res.data);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (id) fetchUser();
// }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (!user) return <div>No user found</div>;


// const handleChange = (e) => {
//   setFormData({
//     ...formData,
//     [e.target.name]: e.target.value,
//   });
// };


//   return (
//     <div className="single">
//       <Sidebar />
//       <div className="singleContainer">
//         <Navbar />

//         <div className="top">
//           <div className="left">
//            <div
//   className="editButton"
//   onClick={() => {
//     setOpen(true);
//     setFormData(user);
//   }}
// >
//   Edit
// </div>
//             <h1 className="title">Information</h1>

//             <div className="item">
//               <img
//                 src={
//                   user.img ||
//                   "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//                 }
//                 alt=""
//                 className="itemImg"
//               />

//               <div className="details">
//                 <h1 className="itemTitle">{user.username}</h1>

//                 <div className="detailItem">
//                   <span className="itemKey">Email:</span>
//                   <span className="itemValue">{user.email}</span>
//                 </div>

//                 <div className="detailItem">
//                   <span className="itemKey">Phone:</span>
//                   <span className="itemValue">{user.phone}</span>
//                 </div>

//                 <div className="detailItem">
//                   <span className="itemKey">Country:</span>
//                   <span className="itemValue">{user.country}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="right">
//             <Chart aspect={3 / 1} title="User Spending" />
//           </div>
//         </div>

//         <div className="bottom">
//           <h1 className="title">Last Transactions</h1>
//           <List />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Single;


import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// ✅ Toast
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Single = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Edit modal
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});

  // ✅ Delete modal
  const [deleteOpen, setDeleteOpen] = useState(false);

  // 🔥 Fetch user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/auth/users/${id}`
        );
        setUser(res.data);
      } catch (err) {
        toast.error("Failed to fetch user ❌");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchUser();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user found</div>;

  // 🔹 Handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Update user
  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8000/auth/users/${id}`,
        formData,
        { withCredentials: true }
      );

      setUser(res.data);
      setOpen(false);
      toast.success("User Updated Successfully ✅");

    } catch (err) {
      toast.error("Update failed ❌");
    }
  };

  // 🔹 Delete user
  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:8000/auth/users/${id}`,
        { withCredentials: true }
      );

      toast.success("User Deleted 🗑️");
      setTimeout(() => {
        navigate("/users");
      }, 1500);

    } catch (err) {
      toast.error("Delete failed ❌");
    }
  };

  return (
    <div className="single">
      <ToastContainer position="top-right" autoClose={2000} />

      <Sidebar />
      <div className="singleContainer">
        <Navbar />

        <div className="top">
          <div className="left">

            {/* 🔥 Edit */}
            <div
              className="editButton"
              onClick={() => {
                setOpen(true);
                setFormData(user);
              }}
            >
              Edit
            </div>

            {/* 🔥 Delete */}
            <div
              className="deleteButton"
              onClick={() => setDeleteOpen(true)}
            >
              Delete
            </div>

            <h1 className="title">Information</h1>

            <div className="item">
              <img
  src={user.img || "https://via.placeholder.com/100"}
  alt=""
  className="itemImg"
/>

              <div className="details">
                <h1 className="itemTitle">{user.username}</h1>

                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{user.phone}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{user.country}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <Chart aspect={3 / 1} title="User Spending" />
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>

      {/* ✅ EDIT MODAL */}
      {open && (
        <div className="modal">
          <div className="modalContent">
            <h2>Edit User</h2>

            <input name="username" value={formData.username || ""} onChange={handleChange} />
            <input name="email" value={formData.email || ""} onChange={handleChange} />
            <input name="phone" value={formData.phone || ""} onChange={handleChange} />
            <input name="country" value={formData.country || ""} onChange={handleChange} />

            <div className="modalButtons">
              <button onClick={handleUpdate}>Update</button>
              <button onClick={() => setOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ DELETE MODAL */}
      {deleteOpen && (
        <div className="modal">
          <div className="modalContent">
            <h2>Are you sure?</h2>
            <p>Do you want to delete this user?</p>

            <div className="modalButtons">
              <button onClick={handleDelete}>Yes, Delete</button>
              <button onClick={() => setDeleteOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Single;