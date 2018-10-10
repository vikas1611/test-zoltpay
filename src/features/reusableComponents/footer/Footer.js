import React from "react";
import "./footer.scss";
import imgH from "./../../../assets/images/icons/logo_zoltpay.png";
import img9 from "./../../../assets/images/icons/android_download.png";
import img10 from "./../../../assets/images/icons/ios_download.png";
import img11 from "./../../../assets/images/icons/fb.png";
import img12 from "./../../../assets/images/icons/instagram.png";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="zp-footerMain">
        <header className="zp-footer-Header">
          <h6>COMPANY</h6>
        </header>

        <div className="zp-footer-listMain">
          <div className="zp-footer-list">
            <ul className="zp-footer-listUi">
              <li className=" zp-footer-listLi">About Us</li>
              <li className=" zp-footer-listLi">Zolpay FAQs</li>
              <li className=" zp-footer-listLi">Support</li>
            </ul>
          </div>
          <div className="zp-footer-list">
            <ul className="zp-footer-listUi">
              <li className=" zp-footer-listLi">News</li>
              <li className=" zp-footer-listLi">Blog</li>
              <li className=" zp-footer-listLi">AML</li>
            </ul>
          </div>
          <div className="zp-footer-list">
            <ul className="zp-footer-listUi">
              <li className=" zp-footer-listLi">Privacy Policy</li>
              <li className=" zp-footer-listLi">Terms Of Use</li>
            </ul>
          </div>
          <div className="zp-footer-Address">
            <p>
              PKC IT Company Private Limited <br /> Gurugram, <br /> Haryana
              122001 India.
            </p>
          </div>
          <div className="zp-footer-Support">
            <p>
              Support@Zoltpay.com <br /> Customer Support: +91- 9798898998
            </p>
          </div>
          <div className="zp-footer-logo">
            <div className="zp-footer-logoInner">
              <img style={{ width: "140px" }} src={imgH} />
            </div>

            <div className="zp-footer-logoBottom">
              24hr Volume:{" "}
              <span style={{ color: "#20cd9f" }}>
                4356 ETH/345 XRP/234 USD/23455433443 INR
              </span>
            </div>
          </div>
        </div>
        <div className="zp-footer-bottom">
          <div className="zp-footer-bottomButton">
            <a
              href="https://play.google.com/store/apps/details?id=com.zoltpay&amp;hl=en"
              target="_blank"
            >
              <img style={{ width: "150px", cursor: "pointer" }} src={img9} />
            </a>

            <img style={{ width: "160px", cursor: "pointer" }} src={img10} />
          </div>
          <div className="zp-footer-bottomSocial">
            <img style={{ width: "50px", cursor: "pointer" }} src={img11} />
            <img style={{ width: "50px", cursor: "pointer" }} src={img12} />
            <img style={{ width: "50px", cursor: "pointer" }} src={img11} />
            <img style={{ width: "50px", cursor: "pointer" }} src={img12} />
          </div>
          <div className="zp-footer-bottomText">
            <p>@ 2018 All right reserved. PKC IT Service Private Limited</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
