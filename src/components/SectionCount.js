import CountUp from "react-countup";
import { CountData } from "../data/CountData";
import ScrollTrigger from "react-scroll-trigger";
import "./SectionCountStyles.css";
import { useState } from "react";

const CounterElement = (prop) => {

  const [onEnterState, setOnEnterState] = useState(false);
  
  return (
    <ScrollTrigger 
      onEnter={() => setOnEnterState(true)}
      onExit={() => setOnEnterState(false)} 
    >
      <div className="counter-element">
          <div className="counter-content">
            <h3>OUR ACHIEVEMENTS</h3>
            <p>
              WE ARE RESEARCHING AND DEVELOPING
              MANY PROJECTS TO FIGHT AGAINST THE 
              GLOBAL CLIMATE CHANGE TO ENSURE AND
              SAFEGUARD A BETTER TOMORROW.
            </p>
            <div className="donor-btn">
              <a
                href={prop.link}
              >Donate<i className="fa-solid fa-hand-holding-heart"></i>
              </a>
            </div>
          </div>
          <div className="counter-box">
            {CountData.map((item, index) => (
              <div className="counter" key={index}>
                <i className={item.icon}></i>
                <h1>
                  {onEnterState &&
                    <CountUp
                      start={item.start}
                      end={item.end}
                      duration={2.25}
                    >
                    </CountUp>
                  }
                  <span>{item.symbol}</span>
                </h1>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
      </div>
    </ScrollTrigger>
  );
}
 
export default CounterElement;