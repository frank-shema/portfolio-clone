import { Route, Routes } from "react-router";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Home_page";
import Projectpage from "./pages/Project_page";
import Aboutpage from "./pages/About_page";
import Contactpage from "./pages/Contact_page";
// aos animation library
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 500 });
  }, []);
  return (
    <div className="bg-[#282C33]">
      {/* react-router-dom */}
      <Navbar />
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projectpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
