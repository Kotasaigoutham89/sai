import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import sliderimage3 from "../images/sliderimage1.jpg";
import sliderimage4 from "../images/sliderimage2.jpg";
import sliderimage5 from "../images/sliderimage3.jpg";


export default function Carouselslider() {
    return (
        <div style={{ width: "100%" }}>
            <Carousel interval={5000}>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={sliderimage3}
                        alt="Image One"
                        style={{width:"100%",height:"600px"}}
                    />
                    <Carousel.Caption>
                        <h3>An Investment in knowledge pays the best interest</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={sliderimage4}
                        alt="Image Two"
                        style={{width:"100%",height:"600px"}}
                    />
                    <Carousel.Caption>
                        <h3>Failure is the tution you pay for success</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={sliderimage5}
                        alt="Image One"
                        style={{width:"100%",height:"600px"}}
                    />
                    <Carousel.Caption>
                        <h3>Education is the key to unlock the golden door to freedom</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}