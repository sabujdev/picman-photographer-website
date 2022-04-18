import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner4 from '../../../images/banner/banner4.jpg';
import banner7 from '../../../images/banner/banner7.jpg';
import banner9 from '../../../images/banner/banner9.jpg';




const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner4}
                    alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner7}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner9}
                    alt="Third slide"
                />

               
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;