import Hero from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ContactUs from "../components/SectionContactUs";
import img from "../photos/image5.jpg"

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero
        classN="contact"
        image={img}
        heading="Contact Us"
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
      <ContactUs/>
    </div>
  );
}
 
export default Contact;