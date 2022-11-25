import React from "react";

const Guidence = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          alt="/"
          src="https://carcarehunt.com/wp-content/uploads/2019/07/a-used-car-is-a-used-car.png"
          className="w-1/2 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Not sure what car to buy?</h1>
          <p className="py-6">
            When you have the right skills and information, the car buying
            process is easy and enjoyable. Here are some of the guides we've put
            together to help you on your way to buying your perfect car.
          </p>
          <button className="btn btn-primary">Read the Guide</button>
        </div>
      </div>
    </div>
  );
};

export default Guidence;
