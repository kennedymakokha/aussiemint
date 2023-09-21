import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from './../assets/slider1.jfif'
import slider_2 from './../assets/slider2.jfif'
import Slider_3 from './../assets/slider3.jpeg'
import Calculator from "../components/calculator";
import SliderDetails from "../components/sliderDetails";

let images = [
    Image,
    slider_2,
    Slider_3
]

export default function Gallery(props) {

    return (
        <div className="w-full h-full bg-gray-200 flex justify-center items-center overflow-hidden">
            <div className=" w-full h-full relative z-0">
                <Carousel autoPlay interval="3000" showThumbs={false} infiniteLoop transitionTime="1000"
                    onChange={(e) => { props.setCourasel(e); props.TitleFunc() }}
                >
                    {images.map((image, i) => (
                        <div key={i} className="w-full h-screen" >
                            <img
                                src={image}
                                alt={image}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </Carousel>
                <Calculator />
                <SliderDetails title={props.title} />

            </div>
        </div>

    );

}

