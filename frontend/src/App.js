import "./App.css";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Landingpage from "./screens/Landingpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./components/My Notes/MyNotes";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";
import CreateNote from "./screens/CreateNote";
import SingleNote from "./screens/SingleNote";
import ProfileScreen from "./screens/ProfileScreen";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <Routes>
        <Route exact path="/" element={<Landingpage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/createnote" element={<CreateNote />} />
        <Route exact path="/profile" element={<ProfileScreen />} />
        <Route exact path="/notes/:id" element={<SingleNote />} />
        <Route path="/mynotes" element={<MyNotes search={search} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
