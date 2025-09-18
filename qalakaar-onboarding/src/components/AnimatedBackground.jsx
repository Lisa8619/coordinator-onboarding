import React from 'react';
import './AnimatedBackground.css';

const imageUrl = 'https://i.ibb.co/9mXSWqRD/image.png'; // updated image URL

const NUM_IMAGES = 20; // number of images
const NUM_COLS = 5;
const NUM_ROWS = 4;

function getRandomSize() {
  // random size between 40px and 80px
  const sizes = [40, 60, 80];
  return sizes[Math.floor(Math.random() * sizes.length)];
}

function getRandomOffset(maxPercent) {
  // random offset between -maxPercent and +maxPercent
  return (Math.random() * 2 - 1) * maxPercent;
}

function getRandomOpacity() {
  // random opacity between 0.3 and 0.7
  return 0.3 + Math.random() * 0.4;
}

export default function AnimatedBackground() {
  const images = Array.from({ length: NUM_IMAGES });

  return (
    <div className="animated-background">
      {images.map((_, index) => {
        const size = getRandomSize();
        const col = index % NUM_COLS;
        const row = Math.floor(index / NUM_COLS);
        const baseTop = (row + 0.5) * (100 / NUM_ROWS);
        const baseLeft = (col + 0.5) * (100 / NUM_COLS);
        const top = baseTop + getRandomOffset(8); // offset up to ±8%
        const left = baseLeft + getRandomOffset(8); // offset up to ±8%
        const opacity = getRandomOpacity();
        const animationDelay = Math.random() * 5;

        return (
          <img
            key={index}
            src={imageUrl}
            alt="background decoration"
            className="floating-image"
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              opacity,
              animationDelay: `${animationDelay}s`,
              filter: `opacity(${opacity})`,
            }}
          />
        );
      })}
    </div>
  );
}
