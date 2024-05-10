import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Carousel from 'react-spring-3d-carousel';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import "../../styles/Start/carousel.scss"

// pics for slider
import pic1 from "../../img/main/carousel/1st.jpg"
import pic2 from "../../img/main/carousel/2nd.jpg"
import pic3 from "../../img/main/carousel/3rd.jpg"
import pic4 from "../../img/main/carousel/4th.jpg"


const Slidee = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            key: uuidv4(),
            content: <img src={pic1} alt="1" style={{ filter: currentSlide === 0 ? 'none' : 'blur(5px)' }} />,
        },
        {
            key: uuidv4(),
            content: <img src={pic2} alt="2" style={{ filter: currentSlide === 1 ? 'none' : 'blur(5px)' }} />,
        },
        {
            key: uuidv4(),
            content: <img src={pic3} alt="3" style={{ filter: currentSlide === 2 ? 'none' : 'blur(5px)' }} />,
        },
        {
            key: uuidv4(),
            content: <img src={pic4} alt="4" style={{ filter: currentSlide === 3 ? 'none' : 'blur(5px)' }} />
        }
    ];

    const onNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1 ) % slides.length);
    };

    const onPrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="carousel">
            <div className="carousel__container">
                <button onClick={onPrev}><ArrowLeft /></button>
                <Carousel slides={slides} goToSlide={currentSlide} showNavigation={false} />
                <button onClick={onNext}><ArrowRight /></button>
            </div>
        </div>
    );
};

export default Slidee