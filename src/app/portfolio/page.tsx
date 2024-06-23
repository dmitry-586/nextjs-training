"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../styles/carousel.scss";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="embla mx-auto mt-12 h-56 max-w-lg border" ref={emblaRef}>
      <div className="embla__container h-full">
        <div className="embla__slide flex items-center justify-center">
          <img src="/photo_2024-06-23_16-50-40.jpg" alt="#" />
        </div>
        <div className="embla__slide flex items-center justify-center">
          <img src="/photo_2024-06-23_16-50-45.jpg" alt="#" />
        </div>
        <div className="embla__slide flex items-center justify-center">
          <img src="/photo_2024-06-23_16-50-47.jpg" alt="#" />
        </div>
      </div>
    </div>
  );
}
