import React from "react";
import "./Home.css";
import bannerImg from "../images/mobile/image-header.jpg";
import arrow from "../images/icon-arrow-down.svg";
import left1 from "../images/mobile/image-transform.jpg";
import left2 from "../images/mobile/image-stand-out.jpg";
import left3 from "../images/mobile/image-graphic-design.jpg";
import right3 from "../images/mobile/image-photography.jpg";
import client1 from "../images/image-emily.jpg";
import client2 from "../images/image-thomas.jpg";
import client3 from "../images/image-jennie.jpg";
import gallery1 from "../images/mobile/image-gallery-milkbottles.jpg";
import gallery2 from "../images/mobile/image-gallery-orange.jpg";
import gallery3 from "../images/mobile/image-gallery-cone.jpg";
import gallery4 from "../images/mobile/image-gallery-sugar-cubes.jpg";
import fb from "../images/icon-facebook.svg";
import ig from "../images/icon-instagram.svg";
import tw from "../images/icon-twitter.svg";
import pi from "../images/icon-pinterest.svg";

import bannerImgDesk from "../images/desktop/image-header.jpg";
import left1Desk from "../images/desktop/image-transform.jpg";
import left2Desk from "../images/desktop/image-stand-out.jpg";
import left3Desk from "../images/desktop/image-graphic-design.jpg";
import right3Desk from "../images/desktop/image-photography.jpg";
import gallery1Desk from "../images/desktop/image-gallery-milkbottles.jpg";
import gallery2Desk from "../images/desktop/image-gallery-orange.jpg";
import gallery3Desk from "../images/desktop/image-gallery-cone.jpg";
import gallery4Desk from "../images/desktop/image-gallery-sugar-cubes.jpg";

function Home() {
    React.useEffect(() => {
        responsiveImgs();
        function responsiveImgs() {
            if (window.innerWidth < 1200) {
                document.querySelector(".banner-img").src = bannerImg;
                document.querySelector(".left1").src = left1;
                document.querySelector(".left2").src = left2;
                document.querySelector(".left3").src = left3;
                document.querySelector(".right3").src = right3;
                document.querySelector(".gallery1").src = gallery1;
                document.querySelector(".gallery2").src = gallery2;
                document.querySelector(".gallery3").src = gallery3;
                document.querySelector(".gallery4").src = gallery4;
            } else {
                document.querySelector(".banner-img").src = bannerImgDesk;
                document.querySelector(".left1").src = left1Desk;
                document.querySelector(".left2").src = left2Desk;
                document.querySelector(".left3").src = left3Desk;
                document.querySelector(".right3").src = right3Desk;
                document.querySelector(".gallery1").src = gallery1Desk;
                document.querySelector(".gallery2").src = gallery2Desk;
                document.querySelector(".gallery3").src = gallery3Desk;
                document.querySelector(".gallery4").src = gallery4Desk;
            }
        }
        window.addEventListener('resize', responsiveImgs);
    })

    return (
        <div>
            <div className="container">
                <div className="banner">
                    <img className="banner-img" src="" alt="banner-img"></img>
                    <h1 className="creatives">WE ARE CREATIVES</h1>
                    <img className="arrow" src={arrow} alt="arrow"></img>
                </div>
                <div className="first-cont">
                    <div className="left-side1">
                        <img className="left1" src="" alt="left1"></img>
                    </div>
                    <div className="right-side1">
                        <h2 className="transform-title">Transform your brand</h2>
                        <p className="transform-text">We are a full-service creative agency specializing in helping brands grow fast. 
                            Engage your clients through compelling visuals that do most of the marketing for you.
                        </p>
                        <a className="transform-learn" href="/">LEARN MORE</a>
                    </div>
                </div>
                <div className="second-cont">
                    <div className="left-side2">
                        <img className="left2" src="" alt="left2"></img>
                    </div>
                    <div className="right-side2">
                        <h2 className="stand-title">Stand out to the right audience</h2>
                        <p className="stand-text">Using a collaborative formula of designers, researchers, 
                        photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                        </p>
                        <a className="stand-learn" href="/">LEARN MORE</a>
                    </div>
                    <div className="left-side3">
                        <img className="left3" src="" alt="left3"></img>
                        <h2 className="graphic-title">Graphic Design</h2>
                        <p className="graphic-text">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                        </p>
                    </div>
                    <div className="right-side3">
                    <img className="right3" src="" alt="right3"></img>
                        <h2 className="photo-title">Photography</h2>
                        <p className="photo-text">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                        </p>
                    </div>
                </div>
                <h2 className="testimonials">CLIENT TESTIMONIALS</h2>
                <div className="third-cont">
                    <div className="third-left">
                        <img className="client1" src={client1} alt="client1"></img>
                        <p className="client1-text">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                        </p>
                        <h3 className="client1-name">Emily R.</h3>
                        <h4 className="client1-role">Marketing Director</h4>
                    </div>
                    <div className="third-center">
                        <img className="client2" src={client2} alt="client2"></img>
                        <p className="client2-text">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
                        </p>
                        <h3 className="client2-name">Thomas S.</h3>
                        <h4 className="client2-role">Chief Operating Officer</h4>
                    </div>
                    <div className="third-right">
                        <img className="client3" src={client3} alt="client3"></img>
                        <p className="client3-text">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                        </p>
                        <h3 className="client3-name">Jennie F.</h3>
                        <h4 className="client3-role">Business Owner</h4>
                    </div>
                </div>
                <div className="fourth-cont">
                    <div className="fourth1">
                        <img className="gallery1" src="" alt="gallery1"></img>
                    </div>
                    <div className="fourth2">
                        <img className="gallery2" src="" alt="gallery2"></img>
                    </div>
                    <div className="fourth3">
                        <img className="gallery3" src="" alt="gallery3"></img>
                    </div>
                    <div className="fourth4">
                        <img className="gallery4" src="" alt="gallery4"></img>
                    </div>
                </div>
                <div className="footer">
                    <h2 className="sunnyside-foot">sunnyside</h2>
                    <a href="/" className="link">About</a>
                    <a href="/" className="link">Services</a>
                    <a href="/" className="link">Projects</a>
                    <br />
                    <img className="icon" src={fb} alt="fb-icon"></img>
                    <img className="icon" src={ig} alt="ig-icon"></img>
                    <img className="icon" src={tw} alt="tw-icon"></img>
                    <img className="icon" src={pi} alt="pi-icon"></img>
                </div>
            </div>
        </div>
    );
}

export default Home;