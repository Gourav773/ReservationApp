import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post(
        "http://localhost:8000/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: err.response?.data || "Login Failed",
      });
    }
  };

  return (
    <div className="login">
      <div className="lCard">
        <h2 className="title">Welcome Back 👋</h2>
        <p className="subtitle">Login to your account</p>

        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />

        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />

        <button
          disabled={loading}
          onClick={handleClick}
          className="lButton"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <span className="error">{error}</span>}

        <div className="extra">
          <span onClick={() => navigate("/register")}>Create Account</span>
        </div>
      </div>
    </div>
  );
};

export default Login;// import axios from "axios";
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import "./login.css";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     email: undefined,
//     password: undefined,
//   });

//   const { user , loading, error, dispatch } = useContext(AuthContext);

//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     console.log("handleClick function called")
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });
//     try {
//       const res = await axios.post("http://localhost:8000/api/login", credentials);
//       console.log("API response data:", res.data);
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//       navigate("/")
//     } catch (err) {
//        // console.log(err.response.data)
//       dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
//     }
//   };
 

//   return (
//     <div className="login">
//       <div className="lContainer">
//         <input
//           type="text"
//           placeholder="email"
//           id="email"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <input
//           type="password"
//           placeholder="password"
//           id="password"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <button disabled={loading} onClick={handleClick} className="lButton">
//           Login
//         </button>
//         {error && <span className="error">{error}</span>}
//       </div>
//     </div>
//   );
// };

// export default Login;
// import axios from "axios";
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import "./login.css";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });

//   const { loading, error, dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // Handle input change
//   const handleChange = (e) => {
//     setCredentials((prev) => ({
//       ...prev,
//       [e.target.id]: e.target.value,
//     }));
//   };

//   // Handle login click
//   const handleClick = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });

//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/auth/login",
//         credentials
//       );

//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//       navigate("/");
//     } catch (err) {
//       dispatch({
//         type: "LOGIN_FAILURE",
//         payload: err.response?.data?.message || "Login Failed",
//       });
//     }
//   };

//   return (
//     <div className="login">
//       <div className="lContainer">
//         <h2>Login</h2>

//         <input
//           type="email"
//           placeholder="Enter Email"
//           id="email"
//           onChange={handleChange}
//           className="lInput"
//         />

//         <input
//           type="password"
//           placeholder="Enter Password"
//           id="password"
//           onChange={handleChange}
//           className="lInput"
//         />

//         <button
//           disabled={loading}
//           onClick={handleClick}
//           className="lButton"
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         {error && <span className="error">{error}</span>}
//       </div>
//     </div>
//   );
// };

// export default Login;