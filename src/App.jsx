import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ServicesListContainer from "./components/ServiceList/ServicesListContainer";
import Footer from "./components/Footer/Footer";
import OurFleetContainer from "./components/OurFleet/OurFleetContainer";
import WhyChooseUsContainer from "./components/WhyChooseUs/WhyChooseUsContainer";
import FrequentQuestionsContainer from "./components/FrequentQuestions/FrequentQuestionsContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesListContainer />} />
          <Route path="/nuestraFlota" element={<OurFleetContainer />} />
          <Route
            path="/preguntasFrecuentes"
            element={<FrequentQuestionsContainer />}
          />
          <Route path="/nosotros" element={<WhyChooseUsContainer />} />
          <Route path="*" element={<h1>la ruta no existe</h1>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
