import "./App.scss";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Course from "./pages/Course/Course";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoutes isProfile={true} redirectPath={"/"}>
              <Profile />
            </ProtectedRoutes>
          }
        />
        <Route path="/course/:id" element={<Course />} />
        <Route
          element={
            <ProtectedRoutes isRegisterSignIn={true} redirectPath={"/"} />
          }
        >
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
