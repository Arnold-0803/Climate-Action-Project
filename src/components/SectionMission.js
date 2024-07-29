import "./SectionMissionStyles.css";

const Mission = (props) => {
  return (
    <div className="mission-section">
      <h3>Our Mission</h3>
      <div className="container">
        <div className="content">
          <p>Lorem ipsum dolor sit 
            amet consectetur adipisicing 
            elit. Iusto corrupti dolor, 
            dolorum cum ratione quidem, 
            incidunt tempore deserunt facilis 
            molestiae eligendi officiis 
            cupiditate provident voluptate 
            amet deleniti earum saepe nemo.
          </p>
          <ul className="mission-list">
            <li>Lorem ipsum dolor sit amet elit.
            </li>
            <li>Lorem ipsum dolor sit amet elit.
            </li>
            <li>Lorem ipsum dolor sit amet elit.
            </li>
          </ul>
          <div className="btn">
            <a href="#join">Join Movement</a>
            <a href="#learn">Learn More</a>
          </div>
        </div>
        <div className="image">
          <img src={props.img} alt="" />
        </div>
        </div>
    </div>
  );
}
 
export default Mission;