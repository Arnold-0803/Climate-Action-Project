import Hero from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import img from "../../photos/image4prime.jpg"

const QuestionAndAnswers = () => {
  return (
    <div>
      <Navbar/>
      <Hero
        classN="q-a"
        image={img}
        heading="Mostly Asked Questions"
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
 
export default QuestionAndAnswers;