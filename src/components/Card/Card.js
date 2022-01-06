import React from "react";
import "./Card.css";
import CountUp from "react-countup";
import conf from "../../assests/images/covid.png";
import active from "../../assests/images/active.png";
import recovered from "../../assests/images/recovered.png";
import dth from "../../assests/images/deathicon.png";

function Card({ totalData }) {
  return (
    <div className="cardCont mb-5">
      <div className="card cardMap">
        <div className="card-body text-center">
          <h5 className="card-title">Confirmed</h5>
          <hr />
          <img src={conf} alt="CONFIRMED" className="cardImg" />
          <br />
          <i className="fas fa-arrow-up cardIcon"></i>
          <CountUp
            className="count"
            start={0}
            end={totalData.deltaconfirmed}
            duration={2.75}
            separator=","
          />
          <h2 className="text-warning">{totalData.confirmed}</h2>
        </div>
      </div>
      <div className="card cardMap">
        <div className="card-body text-center">
          <h5 className="card-title">Active</h5>
          <hr />
          <img src={active} alt="ACTIVE" className="cardImg" />
          <br />
          <h2 className="text-danger mt-4">{totalData.active}</h2>
        </div>
      </div>
      <div className="card cardMap">
        <div className="card-body text-center">
          <h5 className="card-title">Recovered</h5>
          <hr />
          <img src={recovered} alt="RECOVERED" className="cardImg" />
          <br />
          <i className="fas fa-arrow-up cardIcon"></i>
          <CountUp
            className="count"
            start={0}
            end={totalData.deltarecovered}
            duration={2.75}
            separator=","
          />
          <h2 className="text-success">{totalData.recovered}</h2>
        </div>
      </div>
      <div className="card cardMap">
        <div className="card-body text-center">
          <h5 className="card-title">Deaths</h5>
          <hr />
          <img src={dth} alt="DTHS ICON" className="cardImg" />
          <br />
          <i className="fas fa-arrow-up cardIcon"></i>
          <CountUp
            className="count"
            start={0}
            end={totalData.deltadeaths}
            duration={2.75}
            separator=","
          />
          <h2 className="text-secondary">{totalData.deaths}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
