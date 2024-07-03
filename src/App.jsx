import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Works from "./components/Works";

function App() {
  console.info("Developed by mokkun🎉");
  return (
    <div className="App">
      <Hero />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
