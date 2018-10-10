import React from "react";
import "./header.scss";
import imgH from "./../../../assets/images/icons/logo_zoltpay.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="zp-header-main">
        <div className="zp-header-img">
          <img style={{ cursor: "pointer" }} src={imgH} />
        </div>
        <div className="zp-header-button">
          <button className="zp-header-buttonCss">HOME</button>
          <button className="zp-header-buttonCss">EXCHANGES</button>
          <button className="zp-header-buttonCss">LENDING</button>
          <button className="zp-header-buttonCss">SUPPORTS</button>
          <button className="zp-header-buttonCreate">CREATE AN ACCOUNT</button>
        </div>
      </div>
    );
  }
}

export default Header;
