import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Particles from "react-particles-js"
import AboutMe from "./components/AboutMe"
import Services from "./components/Services"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"

function App() {
  return (  
    <>
    <Particles 
    className="particles-canvas"
    params={{
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 900
          }
        },
        shape: {
          type: "circle",
          stroke: {
            width: 6,
            color: "#f9ab00"
          }
        }
      }
    }}
    />
    <Navbar />
    <Header />
    <AboutMe />
    <Services />
    <Experience />
    <Portfolio />
    </>
  );
}

export default App;
