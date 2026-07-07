import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./homePage";
import Project from "./Project";
import ContactPage from "./Contactpage";
import StockPortfolio from "./Stockportfolio";
import ClothingStore from "./Clothingstore";

// Mainframe is now the routing root. Each homepage icon (see homePage.tsx's
// homeIcons list) corresponds 1:1 with a Route path below — keep those two
// lists in sync when adding/removing a destination.
const Mainframe = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage welcomeText="welcome to my website!" />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/stock-portfolio" element={<StockPortfolio />} />
        <Route path="/clothing-store" element={<ClothingStore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Mainframe;