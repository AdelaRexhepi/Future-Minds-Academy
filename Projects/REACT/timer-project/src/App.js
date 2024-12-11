import { Route, Routes } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import ScrollToView from "./components/ScrollToView";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <ScrollToView />

      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
