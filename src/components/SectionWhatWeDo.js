import { WhatWeDoData } from "../data/WhatWeDoData";
import "./SectionWhatWeDoStyles.css";

const WhatWeDo = () => {
  return (
    <div className="cards-wrapper">
      <h3>What We stand For</h3>
      <div className="box-card">
        {WhatWeDoData.map((item, index) => (
          <div className="card" key={index}>
            <i className={item.icon}></i>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
            <a href={item.learnMore}>Learn More
              <i className="fa-solid fa-chevron-right"></i>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default WhatWeDo;