// import "./sidebar.scss";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import StoreIcon from "@mui/icons-material/Store";
// import InsertChartIcon from "@mui/icons-material/InsertChart";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import { Link, useNavigate } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
// import axios from "axios";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useState } from "react";
// import { AuthContext } from "../../context/AuthContext";

// const Sidebar = () => {
 
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//  const { dispatch } = useContext(DarkModeContext);
//   const { dispatch: authDispatch } = useContext(AuthContext);
//   const navigate = useNavigate();


//   const handleLogout = async () => {
//     try {
//       await axios.post("http://localhost:8000/auth/logout");
//       authDispatch({ type: "LOGOUT" });
//       navigate("/login");
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
//       <div className="top">
//         <MenuIcon
//           className="menuIcon"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         />

//         <Link to="/" style={{ textDecoration: "none" }}>
//           <span className="logo">BookMe.in</span>
//         </Link>
//       </div>

//       <hr />
//       <div className="center">
//         <ul>
//           <p className="title">MAIN</p>
          
//           <li>
//             <DashboardIcon className="icon" />
//             <span>Dashboard</span>
//           </li>
//           <p className="title">LISTS</p>
//           <Link to="/users" style={{ textDecoration: "none" }}>
//             <li>
//               <PersonOutlineIcon className="icon" />
//               <span>Users</span>
//             </li>
//           </Link>
//           <Link to="/hotels" style={{ textDecoration: "none" }}>
//             <li>
//               <StoreIcon className="icon" />
//               <span>Hotels</span>
//             </li>
//           </Link>
//           <Link to="/rooms" style={{textDecoration:"none"}}>
//           <li>
//             <CreditCardIcon className="icon" />
//             <span>Rooms</span>
//           </li>
//           </Link>
//           <li>
          
//             <LocalShippingIcon className="icon" />
//             <span>Delivery</span>
//           </li>
//           <p className="title">USEFUL</p>
//           <li>
//             <InsertChartIcon className="icon" />
//             <span>Stats</span>
//           </li>
//           <li>
//             <NotificationsNoneIcon className="icon" />
//             <span>Notifications</span>
//           </li>
//           <p className="title">SERVICE</p>
//           <li>
//             <SettingsSystemDaydreamOutlinedIcon className="icon" />
//             <span>System Health</span>
//           </li>
//           <li>
//             <PsychologyOutlinedIcon className="icon" />
//             <span>Logs</span>
//           </li>
//           <li>
//             <SettingsApplicationsIcon className="icon" />
//             <span>Settings</span>
//           </li>
//           <p className="title">USER</p>
//           <li>
//             <AccountCircleOutlinedIcon className="icon" />
//             <span>Profile</span>
//           </li>
//         <li onClick={handleLogout} style={{ cursor: "pointer" }}>
//   <ExitToAppIcon className="icon" />
//   <span>Logout</span>
// </li>
//         </ul>
//       </div>
//       <div className="bottom">
//         <div
//           className="colorOption"
//           onClick={() => dispatch({ type: "LIGHT" })}
//         ></div>
//         <div
//           className="colorOption"
//           onClick={() => dispatch({ type: "DARK" })}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



////////////////////////////////////////////////////////////////



import "./sidebar.scss";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { dispatch: authDispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/auth/logout");
      authDispatch({ type: "LOGOUT" });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* 🔥 Toggle Button */}
      <button className="menuBtn" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </button>

      {/* 🔥 Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      <div className={`sidebar ${open ? "active" : ""}`}>
        <div className="top">
          <Link to="/" className="link">
            <span className="logo">BookMe.in</span>
          </Link>
        </div>

        <hr />

        <div className="center">
          <ul>
            <p className="title">MAIN</p>

            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>

            <p className="title">LISTS</p>

            <Link to="/users" className="link">
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Users</span>
              </li>
            </Link>

            <Link to="/hotels" className="link">
              <li>
                <StoreIcon className="icon" />
                <span>Hotels</span>
              </li>
            </Link>

            <Link to="/rooms" className="link">
              <li>
                <CreditCardIcon className="icon" />
                <span>Rooms</span>
              </li>
            </Link>

            <li>
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>

            <p className="title">USEFUL</p>

            <li>
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </li>

            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>

            <p className="title">SERVICE</p>

            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>System Health</span>
            </li>

            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Logs</span>
            </li>

            <li>
              <SettingsApplicationsIcon className="icon" />
              <span>Settings</span>
            </li>

            <p className="title">USER</p>

            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>

            <li onClick={handleLogout} style={{ cursor: "pointer" }}>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>

        <div className="bottom">
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;