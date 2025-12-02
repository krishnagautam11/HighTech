import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {TopBar} from "./components/TopBar/TopBar"
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { OurBlog } from "./pages/OurBlog";
import { OurTeam } from "./pages/OurTeam";
import { Testimonials } from "./pages/Testimonials";
import { ErrorPage } from "./pages/ErrorPage";
import { ScrollToTopButton } from "./components/ScrollToTop/ScrollToTopBtn";
import { Footer } from "./components/Footer/Footer";

import "./styles/base.css";
import "./styles/style.css";


function App() {
  return (

      <BrowserRouter>

        <TopBar />
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<OurBlog />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/testimonial" element={<Testimonials />} />

            {/* <Route path="/errorpage" element={<ErrorPage />} /> */}
             <Route path="*" element={<ErrorPage />} />

          </Routes>
        </main>

        <Footer />
        <ScrollToTopButton />


      </BrowserRouter>
  );
}

export default App;
