// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// import { DarkModeContextProvider } from './context/darkModeContext.jsx'
// import { AuthContextProvider } from './conimport axios from "axios";
// // main.jsx
// import axios from "axios";

// axios.defaults.withCredentials = true; // 🔥 yaha likhotext/AuthContext.jsx'



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthContextProvider>
//      <DarkModeContextProvider>
//       <App />
//      </DarkModeContextProvider>
//      </AuthContextProvider>
//   </React.StrictMode>,
// )
 


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import axios from "axios"; // ✅ सही जगह

// 🔥 GLOBAL AXIOS CONFIG
axios.defaults.withCredentials = true;

import { DarkModeContextProvider } from "./context/darkModeContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);