import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Other/Projects";
import Events from "./pages/Other/Events";
import OurTeam from "./pages/Other/OurTeam";
import About from "./pages/About";
import Contact from "./pages/Contact";
import QuestionAndAnswers from "./pages/Other/Q&A";
import ScrollToTop from "./assets/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router basename="/Climate-Action-Project">
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/others/projects" element={<Projects/>}/>
          <Route path="/others/events" element={<Events/>}/>
          <Route path="/others/our-team" element={<OurTeam/>}/>
          <Route path="/others/q&a" element={<QuestionAndAnswers/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
