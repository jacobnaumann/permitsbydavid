// TestimonialsSection.js

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/Common.css';

const testimonials = [
  {
    quote: "Permits by David made the permitting process simple and efficient. Highly recommend!",
    author: "Todd Ritchie, Accent Neon",
  },
  {
    quote: "Professional and thorough. The best service in Central Florida for permits.",
    author: "Brenda Gates, Landscape by Design",
  },
  {
    quote: "The expertise at Permits by David is unmatched. They handled everything from start to finish.",
    author: "Mark Anson, Sunshine Pools",
  },
  {
    quote: "Incredible attention to detail and customer service. Permits were a breeze with their help.",
    author: "Aaron Pate, Pate Construction",
  },
  // Add more testimonials here
];


const Testimonial = ({ testimonial }) => (
  <div className="testimonial">
    <blockquote className="testimonial-quote">{testimonial.quote}</blockquote>
    <p className="testimonial-author">- {testimonial.author}</p>
  </div>
);

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  return (
    <section className="testimonials-section">
      <h2>Client Testimonials</h2>
      <div className="testimonials-container">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;