import {} from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section/Section";
function App() {
  return (
    <div className="bg-cyan-100 w-full h-full">
      <Navbar />
      <Section />
    </div>
  );
}

export default App;
