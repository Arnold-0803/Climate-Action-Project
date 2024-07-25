import Hero from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSecrion from "../components/SectionAbout";
import Footer from "../components/SectionFooter";
import img from "../photos/image2prime.jpg"

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero
        classN="about"
        image={img}
        heading="Know About Us"
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
      <AboutSecrion
        iconMission= "fa-solid fa-earth-africa" 
        iconVision="fa-solid fa-eye"
        iconWhyUs="fa-solid fa-people-group"
        body="Lorem ipsum dolor sit amet
          consectetur adipisicing elit. 
          Et suscipit necessitatibus iste maiores, 
          molestias provident dolorem odio accusamus 
          quidem nulla sed natus minus architecto 
          consequuntur aspernatur officiis incidunt 
          dolores facere.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. 
          Et suscipit necessitatibus iste maiores, 
          molestias provident dolorem odio accusamus 
          consectetur adipisicing elit."
      />
      <Footer/>
    </div>
  );
}
 
export default About;