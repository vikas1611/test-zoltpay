import React from "react";
import "./home.scss";
import header from "./../../../features/reusableComponents/header/Header";
import img1 from "./../../../assets/images/Text.png";
import img2 from "./../../../assets/images/illustration-man.png";
import img3 from "./../../../assets/images/icons/download.png";
import img4 from "./../../../assets/images/icons/kyc.png";
import img5 from "./../../../assets/images/icons/transaction.png";
import img6 from "./../../../assets/images/icons/buy_sell.png";
import img7 from "./../../../assets/images/icons/exchange.png";

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className=" zp-main ">
        <div className=" zp-topCover ">
          <div className="zp-topCover-leftimg">
            <img style={{ paddingTop: "40px" }} src={img1} />
          </div>
          <div className="zp-topCover-rightimg">
            <img src={img2} />
          </div>
        </div>

        <div className="zp-topCover-bottom">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <div className="zp-currencyRateContainer">
          <div className="zp-currencyRateBox">
            <div className="zp-currencyRateBoxInnerTop">
              <div className="zp-currencyRateBoxInnerTopLeft">ETH/INR</div>
              <div className="zp-currencyRateBoxInnerTopRight">-1.90%</div>
            </div>
            <div className="zp-currencyRateBoxInnerMid">0.00114532</div>
            <div className="zp-currencyRateBoxInnerBottom">
              Volume: 2298.209932345
            </div>
          </div>
          <div className="zp-currencyRateBox">
            <div className="zp-currencyRateBoxInnerTop">
              <div className="zp-currencyRateBoxInnerTopLeft">ETH/INR</div>
              <div className="zp-currencyRateBoxInnerTopRight">-1.90%</div>
            </div>
            <div className="zp-currencyRateBoxInnerMid">0.00114532</div>
            <div className="zp-currencyRateBoxInnerBottom">
              Volume: 2298.209932345
            </div>
          </div>
          <div className="zp-currencyRateBox">
            <div className="zp-currencyRateBoxInnerTop">
              <div className="zp-currencyRateBoxInnerTopLeft">ETH/INR</div>
              <div className="zp-currencyRateBoxInnerTopRight">-1.90%</div>
            </div>
            <div className="zp-currencyRateBoxInnerMid">0.00114532</div>
            <div className="zp-currencyRateBoxInnerBottom">
              Volume: 2298.209932345
            </div>
          </div>
          <div className="zp-currencyRateBox">
            <div className="zp-currencyRateBoxInnerTop">
              <div className="zp-currencyRateBoxInnerTopLeft">ETH/INR</div>
              <div className="zp-currencyRateBoxInnerTopRight">-1.90%</div>
            </div>
            <div className="zp-currencyRateBoxInnerMid">0.00114532</div>
            <div className="zp-currencyRateBoxInnerBottom">
              Volume: 2298.209932345
            </div>
          </div>
          <div className="zp-currencyRateBox">
            <div className="zp-currencyRateBoxInnerTop">
              <div className="zp-currencyRateBoxInnerTopLeft">ETH/INR</div>
              <div className="zp-currencyRateBoxInnerTopRight">-1.90%</div>
            </div>
            <div className="zp-currencyRateBoxInnerMid">0.00114532</div>
            <div className="zp-currencyRateBoxInnerBottom">
              Volume: 2298.209932345
            </div>
          </div>
          <div className="zp-currencyRateBox">
            <div className="zp-currencyRateBoxInnerTop">
              <div className="zp-currencyRateBoxInnerTopLeft">ETH/INR</div>
              <div className="zp-currencyRateBoxInnerTopRight">-1.90%</div>
            </div>
            <div className="zp-currencyRateBoxInnerMid">0.00114532</div>
            <div className="zp-currencyRateBoxInnerBottom">
              Volume: 2298.209932345
            </div>
          </div>
        </div>
        <div className="zp-ZpAccountheader">
          GET YOUR{" "}
          <span style={{ fontWeight: "500", color: "#20cd9f" }}>
            {" "}
            ZOLTPAY ACCOUNT{" "}
          </span>{" "}
          NOW!
        </div>
        <div className="zp-createAccountContainer">
          <div className="zp-createAccountBox">
            <div className="zp-createAccountImg">
              <img src={img3} />
            </div>
            <div className="zp-createAccountContent">
              Use your mobile Phone number & register yourself using an
              OTP.Setup your zolpay pin to transct securly
            </div>
          </div>
          <div className="zp-createAccountBox">
            <div className="zp-createAccountImg">
              <img src={img4} />
            </div>
            <div className="zp-createAccountContent">
              Use your mobile Phone number & register yourself using an
              OTP.Setup your zolpay pin to transct securly
            </div>
          </div>
          <div className="zp-createAccountBox">
            <div className="zp-createAccountImg">
              <img src={img5} />
            </div>
            <div className="zp-createAccountContent">
              Use your mobile Phone number & register yourself using an
              OTP.Setup your zolpay pin to transct securly
            </div>
          </div>
          <div className="zp-createAccountBox">
            <div className="zp-createAccountImg">
              <img src={img6} />
            </div>
            <div className="zp-createAccountContent">
              Use your mobile Phone number & register yourself using an
              OTP.Setup your zolpay pin to transct securly
            </div>
          </div>
          <div className="zp-createAccountBox">
            <div className="zp-createAccountImg">
              <img src={img7} />
            </div>
            <div className="zp-createAccountContent">
              Use your mobile Phone number & register yourself using an
              OTP.Setup your zolpay pin to transct securly
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
