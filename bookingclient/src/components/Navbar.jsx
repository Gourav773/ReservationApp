// import "./navbar.css";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// const Navbar = () => {
//   const navigate = useNavigate()
//   const { user } = useContext(AuthContext);
  
//    const handleLogin = async ()=>{
//         navigate("/login")
//    }
//    const handleReserved = () => {
//     navigate("/reserved");
//   };

//   const handleRegister = ()=>{

//   }
//   return (
//     <div className="navbar">
//       <div className="navContainer">
//         <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
//           <span className="logo">BookMe.in</span>
//         </Link>
//         {user? <div className="navItems">
//             <button className="navButton" onClick={handleReserved}>
//               Reserved
//             </button>
//             <span className="username">{user.username}</span>
//           </div> : (
//           <div className="navItems">
//             <button className="navButton" onClick={handleRegister}>Register</button>
//             <button className="navButton" onClick={handleLogin}> Login</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import "./navbar.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { user, dispatch } = useContext(AuthContext);

//   // Navigate to login
//   const handleLogin = () => {
//     navigate("/login");
//   };

//   // Navigate to register
//   const handleRegister = () => {
//     navigate("/register");
//   };

//   // Navigate to reserved page
//   const handleReserved = () => {
//     navigate("/reserved");
//   };

//   // Logout function
//   const handleLogout = () => {
//     dispatch({ type: "LOGOUT" });
//     navigate("/login");
//   };

//   return (
//     <div className="navbar">
//       <div className="navContainer">
        
//         {/* Logo */}
//         <Link to="/" className="logoLink">
//           <span className="logo">BookMe.in</span>
//         </Link>

//         {/* Right side */}
//         {user ? (
//           <div className="navItems">
//             <button className="navButton" onClick={handleReserved}>
//               Reserved
//             </button>

//             <span className="username">{user.username}</span>

//             <button className="navButton logout" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div className="navItems">
//             <button className="navButton" onClick={handleRegister}>
//               Register
//             </button>

//             <button className="navButton" onClick={handleLogin}>
//               Login
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import { Link } from "react-router-dom";
import { useState } from "react";
import "../components/navbar.css";

const Navbar = ({ user, handleLogout, handleLogin, handleRegister, handleReserved }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navContainer">

        {/* Logo */}
        <Link to="/" className="logoLink">
          <span className="logo">BookMe.in</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Right Side */}
        <div className={`navItems ${menuOpen ? "active" : ""}`}>
          {user ? (
            <>
              <button className="navButton" onClick={handleReserved}>
                Reserved
              </button>

              <span className="username">{user.username}</span>

              <button className="navButton logout" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="navButton" onClick={handleRegister}>
                Register
              </button>

              <button className="navButton" onClick={handleLogin}>
                Login
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;