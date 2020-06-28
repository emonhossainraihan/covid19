import React, { useState, useEffect } from "react";
import { fetchDate } from "../../api";
import { Doughnut } from "react-chartjs-2";

function DoughnutComponent({ data }) {
  const [globalData, setGlobalData] = useState({});
  useEffect(() => {
    const fetchDataAPI = async () => {
      setGlobalData(await fetchDate());
    };
    fetchDataAPI();
  }, []);

  const doughnut = globalData?.cases ? (
    <Doughnut
      data={{
        labels: ["Confirmed", "Deaths", "Recovered"],
        datasets: [
          {
            label: "COVID-19",
            backgroundColor: [
              "rgba(26, 16, 83, 0.603)",
              "rgb(255, 99, 132)",
              "rgb(29, 209, 161)",
            ],
            borderColor: "#fff",
            data: [
              globalData?.cases,
              globalData?.deaths,
              globalData?.recovered,
            ],
          },
        ],
      }}
    />
  ) : (
    <div style={{ textAlign: "center", height: "10rem", paddingTop: "4rem" }}>
      <div className="spinner-border spinner-border-lg" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  return doughnut;
}

export default DoughnutComponent;
