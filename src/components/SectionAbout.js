import "./SectionAboutStyles.css";

const AboutSecrion = (props) => {
  return (
    <div className="about-wrapper">
      <div className="content-box">
        <h3><i className={props.iconMission}></i> Our Mision</h3>
        <p>{props.body}</p>
      </div>
      <div className="content-box">
        <h3><i className={props.iconVision}></i> Our Vision</h3>
        <p>{props.body}</p>
      </div>
      <div className="content-box">
        <h3><i className={props.iconWhyUs}></i> Why Choose Us</h3>
        <p>{props.body}</p>
      </div>
    </div>
  );
}
 
export default AboutSecrion;