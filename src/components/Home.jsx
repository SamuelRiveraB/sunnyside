import React from "react";
import "./Home.css";
import bannerImg from "../images/mobile/image-header.jpg";
import right1 from "../images/mobile/image-transform.jpg";
import left2 from "../images/mobile/image-stand-out.jpg";
import left3 from "../images/mobile/image-graphic-design.jpg";
import right3 from "../images/mobile/image-photography.jpg";
import arrow from "../images/icon-arrow-down.svg";

function Home() {

    return (
        <div>
            <div className="container">
                <div className="banner">
                    <img className="bannerImg" src={bannerImg} alt="bannerImg"></img>
                    <h1 className="creatives">WE ARE CREATIVES</h1>
                    <img className="arrow" src={arrow} alt="arrow"></img>
                </div>
                <div className="reverse-cont">
                    <div className="left-side1">
                        <h2 className="transformTitle">Transform your brand</h2>
                        <p className="transformText">We are a full-service creative agency specializing in helping brands grow fast. 
                            Engage your clients through compelling visuals that do most of the marketing for you.
                        </p>
                        <a className="transformLearn" href="/">LEARN MORE</a>
                    </div>
                    <div className="right-side1">
                        <img className="right1" src={right1} alt="right1"></img>
                    </div>
                </div>
                <div className="second-cont">
                    <div className="left-side2">
                        <img className="left2" src={left2} alt="left2"></img>
                    </div>
                    <div className="right-side2">
                        <h2 className="standTitle">Stand out to the right audience</h2>
                        <p className="standText">Using a collaborative formula of designers, researchers, 
                        photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                        </p>
                        <a className="standLearn" href="/">LEARN MORE</a>
                    </div>
                    <div className="left-side3">
                        <img className="left3" src={left3} alt="left3"></img>
                        <h2 className="graphicTitle">Graphic Design</h2>
                        <p className="graphicText">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                        </p>
                    </div>
                    <div className="right-side3">
                    <img className="right3" src={right3} alt="right3"></img>
                        <h2 className="photoTitle">Photography</h2>
                        <p className="photoText">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                        </p>
                    </div>
                </div>

  Client testimonials

  We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
  Emily R.
  Marketing Director

  Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
  Thomas S.
  Chief Operating Officer

  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
  Jennie F.
  Business Owner

  About
  Services
  Projects
  Contact
            </div>
        </div>
    );
}

export default Home;