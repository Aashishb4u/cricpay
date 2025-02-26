import { Routes, Route, useLocation } from "react-router-dom";
import JoinEvent from "./components/JoinEvent/JoinEvent";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";
import TechnicalController from "./pages/Technical-Controller";
import AboutUs from "./pages/About us";
import ApiIntegration from "./pages/Api-Integration";
import CryptoCurrency from "./pages/Crypto-currency";
import Vision from "./pages/Vision";
import Footer from './components/Footer/footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/newsletter" && <NavBar />}
      <div className={location.pathname !== "/newsletter" ? "mt-20":"mt-0"}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsletter"  />
          <Route path="/features/" element={<Features></Features>} />
          <Route path="/technical-connector" element={<TechnicalController></TechnicalController>} />
          <Route path="/about" element={<AboutUs></AboutUs>} />
          <Route path="/api-integration" element={<ApiIntegration></ApiIntegration>} />
          <Route path="/cryptocurrency" element={<CryptoCurrency></CryptoCurrency>} />
          <Route path="/our-vision" element={<Vision></Vision>}></Route>
        </Routes>
      </div>

      <div>
        <JoinEvent />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default App;