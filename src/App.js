import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing components
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

// importing css
import "./styles/home.css"
import "./styles/coins.css"
import "./styles/loader.css"
import "./styles/footer.css"

function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<Home />}/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
