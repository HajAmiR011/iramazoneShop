import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Blogs from "./pages/Blogs/Blogs";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import UpdateBlogs from "./pages/Blogs/UpdateBlogs";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/update/:id" element={<UpdateBlogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
