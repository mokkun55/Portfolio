import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Test from "./components/Test";
import Works from "./components/Works";

function App() {
  return (
    <div className="App">
      {/* <Test /> */}
      <Hero />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
