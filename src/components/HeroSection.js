import "./HeroSectionStyles.css";

const Hero = (props) => {
  return (
    <div className={props.classN}>
      <div className="hero-wrapper">
        <div className="hero-image">
          <img src={props.image} alt="" />
        </div>
        <div className="hero-content">
          <h3>{props.heading}</h3>
          <p>{props.body}</p>
        </div>
        <div className="gradient"></div>
      </div>
    </div>
  );
}
 
export default Hero;