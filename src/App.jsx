import { useState } from "react";
import NavBar from "./components/navbar/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <NavBar onAdminChange={setIsAdmin} />
      <main className="site-main" style={{ paddingTop: 80 }}>
        <Routes>
          <Route path="/" element={<Home isAdmin={isAdmin} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}
