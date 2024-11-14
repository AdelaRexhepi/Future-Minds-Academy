import { Route, Routes } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import ScrollToView from "./components/ScrollToView";

function App() {
  return (
    <>
      <ScrollToView />

      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
