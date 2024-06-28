import React from "react";

const Project = () => {
  return (
    <div className="mt-16 pl-4 pr-4">
      <div className='bg-[url("/project.png")] bg-cover'>
        <h1 className="text-white text-7xl flex justify-center pt-44 pb-20">
          Our Project
        </h1>
      </div>
      <div className="max-w-3xl m-auto  justify-between mt-10 border border-orange-800 rounded-3xl w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
        <li>Bathroom</li>
        <li>Bed Room</li>
        <li>Kitchan</li>
        <li>Living Area</li>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl m-auto">
        <div>
          <img src="/bed.png" alt="" />
          <div>
            <div>
              <p className="font-bold">Minimal Bedroom</p>
              <p>Decor / Artchitecture</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/bed.png" alt="" />
          <div>
            <div>
              <p className="font-bold">Minimal Bedroom</p>
              <p>Decor / Artchitecture</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/bed.png" alt="" />
          <div>
            <div>
              <p className="font-bold">Minimal Bedroom</p>
              <p>Decor / Artchitecture</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/bed.png" alt="" />
          <div>
            <div>
              <p className="font-bold">Minimal Bedroom</p>
              <p>Decor / Artchitecture</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/bed.png" alt="" />
          <div>
            <div>
              <p className="font-bold">Minimal Bedroom</p>
              <p>Decor / Artchitecture</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/bed.png" alt="" />
          <div>
            <div>
              <p className="font-bold">Minimal Bedroom</p>
              <p>Decor / Artchitecture</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
