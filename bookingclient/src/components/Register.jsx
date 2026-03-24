// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [data, setData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "http://localhost:8000/api/auth/register",
//         data
//       );
//       alert("Registered Successfully ✅");
//       navigate("/login");
//     } catch (err) {
//       alert("Error in Register");
//     }
//   };

//   return (
//     <div className="login">
//       <input id="username" placeholder="username" onChange={handleChange} />
//       <input id="email" placeholder="email" onChange={handleChange} />
//       <input
//         id="password"
//         type="password"
//         placeholder="password"
//         onChange={handleChange}
//       />
//       <button onClick={handleClick}>Register</button>
//     </div>
//   );
// };

// export default Register;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css"; // same css reuse karenge

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post("http://localhost:8000/auth/register", data);

      alert("Registered Successfully ✅");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="lCard">
        <h2 className="title">Create Account 🚀</h2>
        <p className="subtitle">Join us today</p>

        <input
          type="text"
          placeholder="Enter username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />

        <input
          type="email"
          placeholder="Enter email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />

        <input
          type="password"
          placeholder="Enter password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />

        <button
          onClick={handleClick}
          disabled={loading}
          className="lButton"
        >
          {loading ? "Creating Account..." : "Register"}
        </button>

        {error && <span className="error">{error}</span>}

        <div className="extra">
          <span onClick={() => navigate("/login")}>
            Already have an account? Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;