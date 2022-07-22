import "./App.css";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Landingpage from "./screens/Landing Page/Landingpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./components/My Notes/MyNotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Landingpage />} />
      <Route path="/mynotes" element={<MyNotes />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
