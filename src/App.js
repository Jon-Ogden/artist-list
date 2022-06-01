import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./Home";
import Artists from './Artists';
import AddNew from "./AddNew";
import About from "./About";
import Welcome from "./Welcome";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Welcome />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/About" element={<About />} />
        <Route path="/AddNew" element={<AddNew />} />
      </Route>
    </Routes>
  );
}


