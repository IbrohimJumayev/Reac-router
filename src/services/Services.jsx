import React from "react";
import Card from "../components/Card";

const serviceData = [
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
    title: "Retail Design",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "2d/3d Art Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Interior Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Decoration Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
];

const Services = () => {
  return (
    <div className="mt-16 pl-4 pr-4">
      <div className='bg-[url("/service.png")] bg-cover w-full bg-center'>
        <h1 className="text-white text-7xl flex justify-center pt-44 pb-20">
          Services
        </h1>
      </div>
      <div className="max-w-screen-xl mt-32"></div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl m-auto gap-y-20">
        {serviceData.map((h, index) => (
          <Card key={index} title={h.title} description={h.description} />
        ))}
      </div>
    </div>
  );
};

export default Services;
