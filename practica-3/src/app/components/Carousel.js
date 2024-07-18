"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import '../Styles/Styles.css'

const items = [
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Slide 4",
    caption: "Slide 4",
    key: 4,
  },
  ];

function Example2(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
           className="carousel-caption-custom"
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
        className="carousel-indicators-custom"
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
        className="carousel-control-prev"
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
        className="carousel-control-next"
      />
    </Carousel>
  );
}

export default Example2;
