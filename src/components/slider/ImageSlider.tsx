'use client'

import { useState } from "react";

type ImageSliderProps = {
  imageUrls: string[]
}

export default function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div>
      <img src={imageUrls[imageIndex]} alt="#" />
      <button><img src="/icons8-back-100.png" alt="" /></button>
      <button><img src="/icons8-forward-100.png" alt="" /></button>
    </div>
  );
}
