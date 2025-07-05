import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
};

export default App;
