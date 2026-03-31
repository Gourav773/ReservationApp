import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import List from "./Pages/List";
import Hotels from "./Pages/Hotels";
import Login from "./components/Login";
import Register from "./components/Register";
import Reserved from "./components/Reserved";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotels />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reserved" element={<Reserved />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;