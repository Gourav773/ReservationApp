// import "./new.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { useState } from "react";
// import axios from 'axios'
// const New = ({ inputs, title }) => {
//   const [file, setFile] = useState(null);
//   const [info, setInfo] = useState({});

//   const handleChange = (e) => {
//     setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }))
//   }

//   const handleClick = async e =>{
//     console.log('clicking.......')
//      e.preventDefault();
//     const data = new FormData()
//     data.append('file', file);
//     data.append('upload_preset', "upload")
//     try {
//       const uploadRes = await axios.post('https://api.cloudinary.com/v1_1/ankitmewada/image/upload', data)
//       //console.log('working')
//       //console.log(uploadRes.data)
//       //console.log(uploadRes)
//       const {url} = uploadRes.data
//       const newUser = {
//          ...info,
//          img:url
//       }
//       console.log(newUser)
// //       const res = await axios.post('http://localhost:8000/api/register', newUser)
// //      // console.log(res)
// //     } catch (err) {
// //   console.log(err.response?.data || err.message)
// // }

// //   }

//  await axios.post(
//       "http://localhost:8000/auth/register",
//       newUser,
//       { withCredentials: true }
//     );

//     alert("User Registered Successfully ✅");

//   } catch (err) {
//     console.log(err.response?.data || err.message);
//   }
// };


//   return (
//     <div className="new">
//       <Sidebar />
//       <div className="newContainer">
//         <Navbar />
//         <div className="top">
//           <h1>{title}</h1>
//         </div>
//         <div className="bottom">
//           <div className="left">
//             <img
//               src={
//                 file
//                   ? URL.createObjectURL(file)
//                   : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//               }
//               alt=""
//             />
//           </div>
//           <div className="right">
//             <form>
//               <div className="formInput">
//                 <label htmlFor="file">
//                   Image: <DriveFolderUploadOutlinedIcon className="icon" />
//                 </label>
//                 <input
//                   type="file"
//                   id="file"
//                   onChange={(e) => setFile(e.target.files[0])}
//                   style={{ display: "none" }}
//                 />
//               </div>

//               {inputs.map((input) => (
//                 <div className="formInput" key={input.id}>
//                   <label>{input.label}</label>
//                   <input onChange={handleChange} type={input.type} placeholder={input.placeholder} id={input.id}/>
//                 </div>
//               ))}
//               <button onClick={handleClick}>Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default New;


import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

const handleClick = async (e) => {
  e.preventDefault();

  if (!file) {
    alert("Please select an image ❗");
    return;
  }

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");

     try {
    const uploadRes = await axios.post(
      "https://api.cloudinary.com/v1_1/ankitmewada/image/upload",
      data
    );

    const { url } = uploadRes.data;

    const newUser = {
      ...info,
      img: url,
    };

      await axios.post(
        "http://localhost:8000/auth/register",
        newUser,
        { withCredentials: true }
      );

      alert("User Registered Successfully ✅");
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>

        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>

          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}

              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ PropTypes FIX
New.propTypes = {
  inputs: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default New;