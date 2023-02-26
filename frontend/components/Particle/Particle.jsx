import * as React from "react";
import ParticleImage from "react-particle-image";

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#ffffff"
};

export default function Particle() {
  return (
    <ParticleImage
      src={"symbol.png"}
      scale={0.75}
      entropy={20}
      maxParticles={4500}
      backgroundColor={"transparent"}
      particleOptions={particleOptions}
    />
  );
}