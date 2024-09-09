import React from "react";
import "./Gifts1.css";

const Gifts1 = () => {
  return (
    <>
    <div className="gifts1">
      <h3>Awesome Deals on Beautiful Fall and Halloween Decor!</h3>
      <p>New deals updated daily</p>
      <div>
      <a rel="noopener noreferrer" href="https://amzn.to/4dVoCDI" target="blank">
        <div className="item">
        <img src="/images/fallwreath.jpg" alt="Door wreath with fall colours and feathers." width="150px"/>
        <p>Fall Wreath 24 inch Autumn Door Wreath <br></br> Only $33.99</p>
        </div>
        </a>
        
        <a rel="noopener noreferrer" href="https://amzn.to/4efIHEJ" target="blank">
        <div className="item">
        <img src="/images/welcome.jpg" alt="Fall themed hanging welcome sign with pumpkins." width="150px"/>
        <p>Fall Themed Welcome Sign - variety of colours available<br></br> Starting at only $33.99</p>
        </div>
        </a>

        <a rel="noopener noreferrer" href="https://amzn.to/3ZjIlZs" target="blank">
        <div className="item">
        <img src="/images/fallpillow.jpg" alt="Hello Pumpkin throw pillow with black and orange writing." width="150px"/>
        <p>"Hello Pumpkin" RABUSOFA Throw Pillow Covers - assortment of sizes available<br></br> Starting at only $14.99</p>
        </div>
        </a>

        <a rel="noopener noreferrer" href="https://amzn.to/3XmWjHt" target="blank">
        <div className="item">
        <img src="/images/candle.jpg" alt="Pumpkin Chai labled candle in a glass holder." width="150px"/>
        <p>Chloefu LAN Pumpkin Chai Scented Candle<br></br> Only $25.99</p>
        </div>
        </a>

        <a rel="noopener noreferrer" href="https://amzn.to/3z24ZLj" target="blank">
        <div className="item">
        <img src="/images/votiveholder.jpg" alt="3 ceramic jack-o-lantern tea light holders in pink, light yellow, and white." width="150px"/>
        <p>Sunlit Ceramic Pumpkin Jack-O-Lantern Candle Holder Set - 3 tea lights included<br></br> Set of 3 for only $36.99</p>
        </div>
        </a>
        </div>
    </div>
    </>
  );
}

export default Gifts1;