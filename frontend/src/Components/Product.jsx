import React, { useEffect, useState } from "react";
import CardData from "../CardData.json";
import DemoCard from "./DemoCard";

const Product = () => {
  const [filterArray, setFilterArray] = useState([]);
  const [productName, setProductsName] = useState("");

  const SearchHandler = () => {
    const FilterArr = CardData.filter(
      (item) => item.Title.toLowerCase().includes(productName.toLowerCase())
      // item.Title.includes(productName)
    );
    setFilterArray(FilterArr);
  };

  useEffect(() => {
    setFilterArray(CardData);
  }, []);

  return (
    <>
      <div className="ProductsHeaderSearch">
        <h1>Products</h1>
        <div className="mb-3">
          <input
            type="search"
            placeholder="Search Products"
            onChange={(e) => setProductsName(e.target.value)}
          />
          <button className="SearchButton" onClick={SearchHandler}>
            Search
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div class=" row row-col-2 row-cols-sm-2 row-cols-md-3 g-4 w-100 d-flex  justify-content-evenly mb-2 ">
          {filterArray.map((data, index) => (
            <DemoCard key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
