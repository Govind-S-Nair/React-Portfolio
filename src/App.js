import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import resumeData from './ResumeData'


function App() {
  return (
    <div>
      <Navbar />
      <Home resumeData = {resumeData}/>
      <About resumeData = {resumeData}/>
      <Skills />
    </div>
  );
}

export default App;
