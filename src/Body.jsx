import "./Body.css";
import React, { useState, useEffect, useContext } from "react";
import { CurrAccContext } from "./App";
import List from "./Body/List";
import CreateList from "./Body/CreateList";
import {
  faBowlFood,
  faCar,
  faFilm,
  faLightbulb,
  faHome,
  faHeartbeat,
  faGraduationCap,
  faShoppingCart,
  faPlane,
  faShieldAlt,
  faPiggyBank,
  faChartLine,
  faGift,
  faSmile,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

function Body({ setData, isLogin, setCurrAcc }) {
  const { currAcc } = useContext(CurrAccContext);
  console.log("currACc");
  console.log(currAcc);

  //for amount
  const [amount, setAmount] = useState("0");

  //for date
  const [date, setDate] = useState("");

  //for data
  const [tempData, setTempData] = useState(currAcc.tempData || []);

  //set main data
  useEffect(() => {
    if (isLogin) {
      setCurrAcc((acc) => ({ ...acc, tempData }));
    }
  }, [tempData]);

  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //will render when mounts
  useEffect(() => {
    //calc date
    const today = new Date();
    const day = today.getDate().toString().padStart(2, "0");
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    const formatDate = `${day} ${month} ${year}`;
    setDate(formatDate);
  }, []);

  return (
    <>
      <div className="main-container-body">
        <div className="btn-container">
          <button className="btn- btn-Today">Today</button>
          <button className="btn- btn-Month">Month</button>
        </div>
        <div className="today-container">
          <div className="lists">
            {/* List */}
            <List
              date={date}
              tempData={currAcc.tempData || tempData}
              setTempData={setTempData}
            />
          </div>
          <div className="create-list">
            <CreateList setTempData={setTempData} months={months} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
