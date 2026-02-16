import NavBar from "./components/navbar/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <main className="site-main">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
    </>
  );
}

export default App;
