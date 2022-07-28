import "./App.css";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Landingpage from "./screens/Landingpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./components/My Notes/MyNotes";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Landingpage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/register" element={<RegisterPage />} />
      <Route path="/mynotes" element={<MyNotes />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
