import React from "react";
import { SuperSEO } from "react-super-seo";
import "./Home.css";

const Home = () => {
  return (
    <>
      
      <SuperSEO
        title="Best Gift Ideas for 2024 - Deals Updated Daily"
        description="Discover this year's best gift ideas for everyone. Our list is updated daily with the latest deals."
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: "/public/logo512.png", 
            ogImageAlt: "A collection of popular gift items for 2024",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/jpeg",
          },
          ogTitle: "Best Gift Ideas for 2024",
          ogDescription: "Explore top gift ideas updated daily with the best deals.",
        }}
        twitter={{
          twitterSummaryCard: {
            summaryCardImage: "/public/logo512.png", // Replace with actual image URL
            summaryCardImageAlt: "A collection of popular gift items for 2024",
            summaryCardSiteUsername: "@yourTwitterHandle", // Replace with your Twitter handle
          },
        }}
      />

      <div className="home-container">
        <h3>This Year's Best Gift Ideas</h3>
        <p>Deals updated daily</p>
        <div>
          {/* Your existing gift items */}
          <a rel="noopener noreferrer" href="https://amzn.to/3YQ5oKN" target="_blank">
            <div className="item">
              <img src="/images/masterbee.jpg" alt="A blue camera with a photo being printed at the bottom." width="150px" />
              <p>**masterbee Kid Camera Instant Print Photo**</p>
            </div>
          </a>

          <a rel="noopener noreferrer" href="https://amzn.to/4ecBSDj" target="blank">
            <div className="item">
              <img src="/images/calico.jpg" alt="A cat shaped stuffie with calico colours." width="150px" />
              <p>**Squishmallows 14-Inch Brown and Black Calico Cat Plush**</p>
            </div>
          </a>

          <a rel="noopener noreferrer" href="https://amzn.to/3UEaNlP" target="blank">
            <div className="item">
              <img src="/images/raptor.jpg" alt="A grey and brown dinosaur toy." width="150px" />
              <p>**Wild Republic Artist Collection, Dinosaur Velociraptor**</p>
            </div>
          </a>

          <a rel="noopener noreferrer" href="https://amzn.to/3V1iJhd" target="blank">
            <div className="item">
              <img src="/images/echokids.jpg" alt="A round Echo Dot with a dragon printed on it." width="150px" />
              <p>**Amazon Echo Dot (5th Gen, 2022 release) Kids**</p>
            </div>
          </a>

          <a rel="noopener noreferrer" href="https://amzn.to/40szpl8" target="blank">
            <div className="item">
              <img src="/images/bitzee.jpg" alt="A blue opened box with a digital unicorn inside." width="150px" />
              <p>**Bitzee, Magicals Interactive Toy with 20 Characters Inside**</p>
            </div>
          </a>

          <a rel="noopener noreferrer" href="https://amzn.to/3Ai7Q3r" target="blank">
            <div className="item">
              <img src="/images/jumanji.jpg" alt="A box for the Jumanji board game with two people running from animals in the jungle." width="150px" />
              <p>**Spin Master Games, Jumanji Stampede Cooperative Board Game**</p>
            </div>
          </a>

          <a rel="noopener noreferrer" href="https://amzn.to/4efFfcO" target="blank">
            <div className="item">
              <img src="/images/lasso.jpg" alt="A a purple box with a white lasso kids toy and 4 colourful strings." width="150px" />
              <p>**Loop Lasso® NANO - The Original Glow-in-The-Dark String Shooter Toy**</p>
            </div>
          </a>

          <a rel="noopener noreferrer" href="https://amzn.to/3NRRNfN" target="blank">
            <div className="item">
              <img src="/images/dragonlego.jpg" alt="A purple and black lego set with a dragon." width="150px" />
              <p>**LEGO Minecraft The Ender Dragon and End Ship Building Set**</p>
            </div>
          </a>

          <a rel="noopener noreferrer" href="https://amzn.to/4fRaigr" target="blank">
            <div className="item">
              <img src="/images/draggle.jpg" alt="Two colourful dragon toys in front of a Hatchimals Alive purple box." width="150px" />
              <p>**Hatchimals Alive, Mystery Hatch Draggle, Surprise Interactive Toy & Egg with Mist, Lights & Sounds**</p>
            </div>
          </a>
        
        <a rel="noopener noreferrer" href="https://amzn.to/3YokYvJ" target="blank">
        <div className="item">
        <img src="/images/freezy.jpg" alt="Cookeez Makery Freezy Cakez - Green toy fridge with Cookeez plushie." width="150px"/>
        <p>*HOT toy*<br></br>Cookeez Makery Freezy Cakez. Mix & Decorate Your Plush Best Friend!</p>
        </div>
        </a>

        <a rel="noopener noreferrer" href="https://amzn.to/47Hiltc" target="blank">
        <div className="item">
        <img src="/images/printer.jpg" alt="A white Instax mini smartphone printer." width="150px"/>
        <p>Fujifilm Instax Mini Link 3 Smartphone Printer <br></br>Multiple colours available</p>
        </div>
        </a>


        <a rel="noopener noreferrer" href="https://amzn.to/3ZChvfa" target="blank">
        <div className="item">
        <img src="images/kodak.jpg" alt="Black and grey Kodak camera with photo being printed from side." width="150px"/>
        <p>Kodak Mini Shot 2 Retro | 68-Sheet Bundle <br></br> Many packages and sizes available</p>
        </div>
        </a>

        <a rel="noopener noreferrer" href="https://amzn.to/4egbLwh" target="blank">
        <div className="item">
        <img src="/images/familypjs.jpg" alt="A falimy wearing matching Christmas themed PJs." width="150px"/>
        <p>IFFEI Family Matching Christmas Pajamas<br></br> All sizes(including pets) and styles available</p>
        </div>
        </a>

        <a rel="noopener noreferrer" href="https://amzn.to/3ZEJUS2" target="blank">
        <div className="item">
        <img src="/images/lights.jpg" alt="Spool of LED a light strip." width="150px"/>
        <p>LED light strip. Music sync colour changing<br></br>
        Note: Found on a US site</p>
        </div>
        </a>

        <a rel="noopener noreferrer" href="https://amzn.to/4eDqzVy" target="blank">
        <div className="item">
        <img src="/images/pop.jpg" alt="Lavender Echo Pop round speaker." width="150px"/>
        <p>Amazon Echo Pop smart apeaker with Alexa<br></br>Multiple colours available</p>
        </div>
        </a>

        <a rel="noopener noreferrer" href="https://amzn.to/4e19kg8" target="blank">
        <div className="item">
        <img src="/images/clue.jpg" alt="Clue board game in a white and blue square box." width="150px"/>
        <p>Clue Board Game Signature Collection, Premium Packaging and Components</p>
        </div>
        </a>

        <a rel="noopener noreferrer" href="https://amzn.to/3Aun19s" target="blank">
            <div className="item">
              <img src="/images/sled.jpg" alt="Two kids riding on a blue, round, inflatible sled." width="150px" />
              <p>Hyperzoo Snow Tube, 55" Inflatable Sleds for Kids and Adults</p>
            </div>
          </a>

          <a rel="noopener noreferrer" href="https://amzn.to/3UqJaMR" target="blank">
          <div className="item">
          <img src="/images/elliptical.jpg" alt="A woman using a silver elliptical." width="150px" />
              <p>Sunny Health & Fitness Air Walk Cross Trainer Elliptical Machine Glider</p>
            </div>
          </a>

          
        </div>
      </div>
    </>
  );
};

export default Home;
