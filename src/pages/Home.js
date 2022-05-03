import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg2.png";
import logo from "../images/airbnbRed.png";
import {ConnectButton} from "web3uikit";
const Home = () => {

  return (
    <>
      <div className="container" style={{backgroundImage: `url({$bg})`}}>
        <div className="containerGradient">
          <div className="topBanner">
            <div>
              <img className="logo" src="{logo}" alt="logo"></img>
            </div>
            <div className="tabs">
              <div className="selected"> Places to stay</div>
              <div>Experiences</div>
              <div>Online Experiences</div>
            </div>
            <div className="lrContainers">
            <ConnectButton />

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
