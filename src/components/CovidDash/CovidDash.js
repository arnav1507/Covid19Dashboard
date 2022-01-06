import React, { useState, useEffect } from "react";
import "./CovidDash.css";
import Table from "../Table/Table";
import Card from "../Card/Card";

function CovidDash() {
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    setData(actualData.statewise);
    setTotalData(actualData.statewise[0]);
    console.log(actualData.statewise[0]);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <h1 className="mb-5 text-center">
          <span className="india">
            <b>
              <u>
                <em>INDIA</em>
              </u>
            </b>
          </span>{" "}
          <span className="restHead">COVID-19 DASHBOARD</span>
        </h1>

        <Card totalData={totalData} />
        <Table data={data} />
        <h5 className="mt-3 mb-3 text-center">
          <i class="fas fa-code devIcon"></i>
          <span className="author">
            <b> Arnav</b>
          </span>
        </h5>
      </div>
    </>
  );
}

export default CovidDash;
