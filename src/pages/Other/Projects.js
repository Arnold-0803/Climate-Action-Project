import Hero from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import Footer from "../../components/SectionFooter";
import img from "../../photos/image5prime.jpg"

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
      <h1 
        style={{
          fontSize: "4rem",
          textAlign: "center",
          color: "#8dc44d",
          padding: "30px 0"
        }}
      >
        Section Coming Soon...
      </h1>
      <Footer/>
    </div>
  );
}
 
export default Projects;