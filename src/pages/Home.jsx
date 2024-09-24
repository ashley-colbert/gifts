import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
    <div className="home-container">
      <h3>Halloween Treats</h3>
      <p>Deals updated daily</p>
      <div>
        
        <a rel="noopener noreferrer" href="https://amzn.to/3XhS4wO" target="blank">
        <div className="item">
        <img src="/images/kitkat.jpg" alt="Halloween Kit Kat bars in fun shapes." width="150px"/>
        <p>Nestle Kit Kat Scary Friends fun sized bars <br></br> 90 pack for only $21.58</p>
        </div>
        </a>
        
        <a rel="noopener noreferrer" href="https://amzn.to/3XBBoSg" target="blank">
        <div className="item">
        <img src="/images/reeses.jpg" alt="Halloween Reese's peanut butter cups in fun shapes." width="150px"/>
        <p>Reese's Peatnut Butter Shapes, fun sized bars <br></br> 35 pack for only $11.99</p>
        </div>
        </a>

        <a rel="noopener noreferrer" href="https://amzn.to/3Tj8XG8" target="blank">
        <div className="item">
        <img src="/images/ricecrispies-1.jpg" alt="Halloween themed rice crispy treats." width="150px"/>
        <p>Rice Krispies Squares, fun sized mini bars <br></br> 40 pack for only $15.99</p>
        </div>
        </a>

        <a rel="noopener noreferrer" href="https://amzn.to/3z1UmIp" target="blank">
        <div className="item">
        <img src="/images/fullbars.jpg" alt="Halloween themed full sized chocolare bars." width="150px"/>
        <p>Nestle Halloween theme Full Size Chocolate Bars<br></br> 8 pack for only $8.97</p>
        </div>
        </a>

        <a rel="noopener noreferrer" href="https://amzn.to/3TnccMC" target="blank">
        <div className="item">
        <img src="/images/candy.jpg" alt="Full sized Starburst and Skittles." width="150px"/>
        <p>Starburst and Skittles, Fun Size Candies<br></br> 90 pack for only $15.47</p>
        </div>
        </a>

        </div>
    </div>
    </>
  );
} 

export default Home;