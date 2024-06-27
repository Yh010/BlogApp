import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Blog } from "./pages/Blog";
import { Signin } from "./pages/SignIn";
import { Signup } from "./pages/SignUp";
import { AllBlogs } from "./pages/AllBlogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<AllBlogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
