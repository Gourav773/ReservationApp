import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { hotelInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
import NewHotel from "./pages/newhotel/NewHotel";
import NewRooms from "./pages/newRooms/NewRooms";
import Register from "./pages/register/Register";

// function App() {
//   const { darkMode } = useContext(DarkModeContext);
  
//   const ProtectedRoute = ({children})=>{
//     const {user} = useContext(AuthContext);
//     if(!user){
//       return <Navigate to="/login"/>
//     }else{
//       return children;
//     }
//   }
//   return (
//     <div className={darkMode ? "app dark" : "app"}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/">
//           <Route path="register" element={<Register />} />
// <Route
//   path="login"
//   element={user ? <Navigate to="/" /> : <Login />}
// />
//             <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
           
//             <Route path="users">
//               <Route index element={<ProtectedRoute><List columns={userColumns}/></ProtectedRoute>} />
//               <Route path=":userId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
//               <Route
//                 path="new"
//                 element={<New inputs={userInputs} title="Add New User" />}
//               />
//             </Route>
//             <Route path="/hotels">
//               <Route index element={<ProtectedRoute><List columns={hotelColumns}/></ProtectedRoute>} />
//               <Route path=":productId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
//               <Route
//                 path="new"
//                 element={<NewHotel   />}
//               />
//             </Route>
//             <Route path="/rooms">
//               <Route index element={<ProtectedRoute><List columns={roomColumns}/></ProtectedRoute>} />
//               <Route path=":productId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
//               <Route
//                 path="new"
//                 element={<NewRooms   />}
//               />
//             </Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

function App() {
  const { darkMode } = useContext(DarkModeContext);

  // ✅ ADD THIS
  const { user } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">

            {/* ✅ REGISTER */}
            <Route path="register" element={<Register />} />

            {/* ✅ LOGIN FIX */}
            <Route
              path="login"
              element={user ? <Navigate to="/" /> : <Login />}
            />

            {/* ✅ HOME */}
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            {/* USERS */}
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            {/* HOTELS */}
            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route path="new" element={<NewHotel />} />
            </Route>

            {/* ROOMS */}
            <Route path="rooms">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={roomColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route path="new" element={<NewRooms />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;