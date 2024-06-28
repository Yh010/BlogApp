import { Route, Routes } from "react-router-dom";

import { Blog } from "./pages/Blog";
import { Signin } from "./pages/SignIn";
import { Signup } from "./pages/SignUp";
import { AllBlogs } from "./pages/AllBlogs";
import { PublishBlog } from "./pages/PublishBlog";
import { Navbar } from "./components/Navbar";
import { LnadingPage } from "./pages/LandingPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LnadingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/publish" element={<PublishBlog />} />
      </Routes>
    </>
  );
}

export default App;
