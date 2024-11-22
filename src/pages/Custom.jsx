import React from "react";
import "./Custom.css";

const Custom = () => {
  return (
    <>
      <div className="custom">
        <h3>Custom Requests</h3>

        <div>
          <a rel="noopener noreferrer" href="https://amzn.to/3CHngPt" target="blank">
            <div className="item">
              <img src="/images/chair.jpg" alt="A black office chair on wheels." width="100px" />
              <p>Executive Computer Desk Chair - Coupon available!</p>
            </div>
          </a>

          <a rel="noopener noreferrer" href="https://amzn.to/40FHSS4" target="blank">
            <div className="item">
              <img src="/images/ink.jpg" alt="Colourful ink cartritdges." width="100px" />
              <p>Brother Genuine TN2294PK Standard Yield Black, Cyan, Magenta and Yellow Toner Cartridges</p>
            </div>
          </a>


          <a rel="noopener noreferrer" href="https://amzn.to/4fmJa8Y" target="blank">
            <div className="item">
              <img src="/images/binderdivider.jpg" alt="Avery brand binder dividers with colourful tabs." width="100px" />
              <p>Avery Jan-Dec 12 Tab Dividers for 3 Ring Binders, Customizable Table of Contents, Multicolor Tabs, 3 Sets</p>
            </div>
          </a>

          <a rel="noopener noreferrer" href="https://amzn.to/4hPv69w" target="blank">
            <div className="item">
              <img src="/images/rug.jpg" alt="A black rug in front of a white door." width="100px" />
              <p>iCustomRug Heavy Duty Interior/Exterior Water Proof Utility Ribbed Vinyl Back Runner</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Custom;