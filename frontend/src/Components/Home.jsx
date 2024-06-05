import React from "react";
import Carousel from "./Carousel";
import CardData from "../CardData.json";
import DemoCard from "./DemoCard";

const Home = () => {
  return (
    <>
      {/*  create Carosual  */}
      <Carousel />

      <div className="text-center ProductsHeadline my-5 ">
        <span className="my-5 ">PRODUCTS</span>
      </div>
      <div className=" d-flex justify-content-center ">
        <div class="row row-col-2 row-cols-sm-2 row-cols-md-3  w-100 d-flex justify-content-center">
          {CardData.map((data, index) => (
            <DemoCard key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
