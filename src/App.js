// import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/composed-components/Header";
// import {About} from "./pages/About"
// import { Contact} from "./pages/Contact";
// import { ErrorPage} from "./pages/ErrorPage";
import { Home} from "./pages/Home";
// import { OurBlog} from "./pages/OurBlog";
// import { OurTeam} from "./pages/OurTeam";
// import { Projects} from "./pages/Projects";
// import { Testimonials} from "./pages/Testimonials";
// import { Services} from "./pages/Services";
// import { ScrollToTopButton } from "./components/atomic-components/ScrollToTopBtn";
import { Footer } from "./components/composed-components/Footer";

import "./styles/base.css";
import "./styles/style.css";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        

          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About/>} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/join" element={<OurBlog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<OurTeam />} />
              <Route path="/testimonals" element={<Testimonials />} />
              <Route path="/errorpage" element={<ErrorPage />} /> */}
            </Routes>
          </main>

          <Footer />
          {/* <ScrollToTopButton /> */}

       
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
