import About from "./components/About";
import Contact from "./components/Contact";
import Exprerience from "./components/Exprerience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio />
      <Exprerience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
