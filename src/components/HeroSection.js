import image from "../photos/e0d9a6842c04e4e6d7ac6263f8e98c91.jpg";
import "./HeroSectionStyles.css";

const Hero = (props) => {
  return (
    <div className="hero-wrapper">
      <div className="hero-image">
        <img src={image} alt="" />
      </div>
      <div className="hero-content">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. 
          Fuga sint incidunt soluta reiciendis 
          molestias ad nihil voluptatum sed cum 
          aliquid vitae consequuntur impedit 
          veritatis, tempora cupiditate quaerat 
          tenetur quis rem.
        </p>
      </div>
    </div>
  );
}
 
export default Hero;