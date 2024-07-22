import Hero from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import img from "../../photos/image5.jpg"

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Hero
        classN="project"
        image={img}
        heading="Projects We have Done"
        body="Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. 
          Fuga sint incidunt soluta reiciendis 
          molestias ad nihil voluptatum sed cum 
          aliquid vitae consequuntur impedit 
          veritatis, tempora cupiditate quaerat 
          tenetur quis rem.Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. 
          Fuga sint incidunt soluta reiciendis 
          molestias ad nihil voluptatum sed cum 
          aliquid vitae consequuntur impedit 
          veritatis, tempora cupiditate quaerat 
          tenetur quis rem."
      />
    </div>
  );
}
 
export default Projects;