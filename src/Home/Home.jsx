import React from "react";
import Card from "../components/Card";

const homeData = [
  {
    title: "Project Plan",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Interior Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Realization",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
];

const Home = () => {
  return (
    <div className="max-w-5xl m-auto mt-12 pl-4 pr-4">
      <div className='bg-[url("/homeImg.png")] bg-cover'>
        <div className="pt-16 pl-6 flex-col pb-64">
          <h1 className="text-white text-6xl leading-tight">
            Let's make your <br /> home beautiful together
          </h1>
          <p className="mt-2 text-white font-medium text-xl">
            There are many variations of the passages <br /> of lorem Ipsum from
            available, majority.
          </p>
          <button className="mt-7 pt-6 pb-6 pr-12 pl-12 text-white rounded-2xl">
            Get Started
          </button>
        </div>
      </div>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {homeData.map((h, index) => (
          <Card key={index} title={h.title} description={h.description} />
        ))}
      </div>
    </div>
  );
};

export default Home;
