import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import ContactUs from "./pages/ContactUs"
import Services from "./pages/Services"
import FAQ from "./pages/FAQ"
import AboutUs from "./pages/AboutUs"
import Header from "./components/Header"


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App