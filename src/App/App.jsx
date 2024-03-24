import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavBar from "../Components/nav/NavBar";
import Loader from "../Components/Loader";

const About = lazy(() => import("../Pages/About"));
const Footer = lazy(() => import("../Components/footer/footer"));
const Hero = lazy(() => import("../Pages/Hero"));
const Projects = lazy(() => import("../Pages/Projects"));
const WorkExperience = lazy(() => import("../Pages/WorkExperience"));

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Hero />
                <About />
                <Footer />
              </>
            }
          ></Route>
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
