import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import DiscoveryAndCoaches from "./pages/discoveryCoaches";
import MainLayout from "./layout/MainLayout";
import Page8 from "./Components2/Page8/Page8";
import Navbar from "./Components2/Header/Navbar";
import SecondPage from "./Components2/Page2/SecondPage";
import Page3 from "./Components2/Page3/Page3";
import Page7 from "./Components2/Page7/Page7";
import Header from "./Components2/Header/Header";
import Page4 from "./Components2/Page4/Page4";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainLayout />}> */}
          <Route index element={<Home />} />
          <Route path="discovery-coaches" element={<DiscoveryAndCoaches />} />

          <Route path="/subscriptions" element={<Page8 />} />
          <Route path="/contact" element={<SecondPage />} />
          <Route path="/testimonials" element={< Page4/>} />
          <Route path="/faqs" element={<Page3 />} />
          <Route path="/signin" element={<Page7 />} />
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
