import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Footer from "../Components/footer/footer";
import WorkExperience from "../Pages/WorkExperience";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <WorkExperience/>
      <Projects />
      <Footer />
    </>
  );
}

export default App;
