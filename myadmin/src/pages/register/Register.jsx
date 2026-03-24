import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    city: "",
    country: "",
    phone: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/auth/register", data);
      alert("Registered Successfully");
      navigate("/login");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="login">
      <div className="lCard">
        <h2>Create Account</h2>

        <input placeholder="Username" id="username" onChange={handleChange} />
        <input placeholder="Email" id="email" onChange={handleChange} />
        <input type="password" placeholder="Password" id="password" onChange={handleChange} />
        <input placeholder="City" id="city" onChange={handleChange} />
        <input placeholder="Country" id="country" onChange={handleChange} />
        <input placeholder="Phone" id="phone" onChange={handleChange} />

        <button onClick={handleClick}>Register</button>
 <p className="switch">
          Already have account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;

// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./register.scss";

// const Register = () => {
//   const [data, setData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setData((prev) => ({
//       ...prev,
//       [e.target.id]: e.target.value,
//     }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:8000/auth/register", data);
//       alert("Registered Successfully");
//       navigate("/login");
//     } catch (err) {
//       alert("Registration Failed");
//     }
//   };

//   return (
//     <div className="loginPage">
//       <div className="loginBox">
//         <h2>Register</h2>

//         <input placeholder="Username" id="username" onChange={handleChange} />
//         <input placeholder="Email" id="email" onChange={handleChange} />
//         <input
//           type="password"
//           placeholder="Password"
//           id="password"
//           onChange={handleChange}
//         />

//         <button onClick={handleClick}>Register</button>

//         <p className="switch">
//           Already have account?{" "}
//           <span onClick={() => navigate("/login")}>Login</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;