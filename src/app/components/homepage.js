"use client";
import Link from "next/link";
const Homepage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[90vh] md:flex-row ">
        <div className="md:h-full h-1/2   w-full flex justify-center items-center">
          <SvgAnimation />
        </div>
        <div className="Md:h-full h-1/2 w-full  p-5 md:flex md:justify-center  md:items-center" > 
          <Link
            href="#tryitout"
            className="rounded-full py-2 px-4 bg-blue-500 text-white font-semibold mt-8"
          >
            Try It Out Modal
          </Link>
        </div>
      </div>
    </>
  );
};

const SvgAnimation = () => {
  return (
    <>
      <style>
        {`  .svg-container {
  width: 300px;
  position: relative;
}

path {
  fill: transparent;
  stroke: #000000;
  stroke-width: 4;
  animation: dash 3s linear infinite;
}

#path1 {
  stroke-dasharray: 320;
}

#path2 {
  stroke-dasharray: 400;
}



@keyframes dash {
  from {
    stroke-dashoffset: 320;
    stroke:red;
  }
  to {
    stroke-dashoffset: 0;
  stroke:green;
  }
}`}
      </style>
      <div className="svg-container">
        <svg width="300px" height="175px" version="1.1">
          {/* Add more paths with different directions as needed */}
          <path
            className="path"
            id="path1"
            d="M10 80 Q 77.5 10, 145 80 T 280 80"
          ></path>
          <path
            className="path"
            id="path2"
            d="M10 50 Q 77.5 100, 145 50 T 280 50"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Homepage;
