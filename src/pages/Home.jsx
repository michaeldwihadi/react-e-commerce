import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { modifyData } from "../services/modifyData";

const Home = ({ resultData }) => {
  const sliderData = modifyData({ resultData });
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider sliderData={sliderData} />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
