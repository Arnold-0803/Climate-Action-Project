import Hero from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import img from "../../photos/image3prime.jpg";

const Events = () => {
  return (
    <div>
      <Navbar/>
      <Hero
        classN="event"
        image={img}
        heading="Upcoming Events"
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
 
export default Events;