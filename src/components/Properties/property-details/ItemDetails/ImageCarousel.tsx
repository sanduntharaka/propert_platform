import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';

interface ImageCarouselProps {
    images: any[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    // Custom arrow components
    const CustomPrevArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                className="md:inline sm:hidden absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                onClick={onClick}
            >
                <FaArrowLeft className="text-gray-700" />
            </div>
        );
    };

    const CustomNextArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                className="md:inline sm:hidden absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                onClick={onClick}
            >
                <FaArrowRight className="text-gray-700" />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow: <CustomPrevArrow />, // Custom previous arrow
        nextArrow: <CustomNextArrow />, // Custom next arrow
    };

    return (
        <div className="slider-container w-full relative">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="bg-blue-400">
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            width={800}
                            height={400}
                            objectFit="cover"
                            layout="responsive"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;