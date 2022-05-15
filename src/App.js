import "./App.scss";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Course from "./pages/Course/Course";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import TestSearchBar from "./pages/TestSearchBar/TestSearchBar";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/test" element={<TestSearchBar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
