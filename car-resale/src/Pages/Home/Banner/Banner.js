import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen border-rounded"
      style={{
        backgroundImage: `url("https://www.requestyourcar.com/assets/images/2/buying-car-good-resale-value-how-to-guide-a87c8fa2.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Comprehensive services just a few clicks away
          </h1>
          <p className="mb-5">
            Simply. Choose a car. We will arrange a detailed inspection. Based
            on that you can decide whether you want the car. We then buy it,
            arrange an extended warranty, register it and deliver it to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
