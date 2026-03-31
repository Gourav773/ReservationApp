// import axios from "axios";
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import "./login.scss";

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
//       const res = await axios.post("http://localhost:8000/auth/login", credentials, {
//   withCredentials: true
// })
//       console.log("API response data:", res.data);
     
//       if(res.data.isAdmin){
//         dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//         navigate("/")
//       }else{
//         dispatch({ type: "LOGIN_FAILURE", payload: {message:"You are not authorized"} });
//       }
     
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

import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

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
  credentials,
  { withCredentials: true } // 🔥 MUST
);

      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: "You are not authorized",
        });
      }
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: err.response?.data || "Login Failed",
      });
    }
  };

  return (
    <div className="loginPage">
      <div className="loginBox">
        <h2>Admin Login</h2>
        <p>Welcome back 👋</p>

        <input
          type="email"
          placeholder="Enter email"
          id="email"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Enter password"
          id="password"
          onChange={handleChange}
        />

        <button onClick={handleClick} disabled={loading}>
          {loading ? "Logging..." : "Login"}
        </button>

        {error && <span className="error">{error}</span>}

        <p className="switch">
          Not registered?{" "}
          <span onClick={() => navigate("/register")}>Create account</span>
        </p>
      </div>
    </div>
  );
};

export default Login;