import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Videos/856857-uhd_4096_2160_30fps.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
      ></video>
      <div className="relative z-10 text-white text-center -top-60">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">NASA Space Apps Challenge 2024</h1>
        <p className="text-lg md:text-2xl">Landsat Reflectance Data: On the Fly and at Your Fingertips</p>
      </div>
    </section>
  );
};

export default HeroSection;
