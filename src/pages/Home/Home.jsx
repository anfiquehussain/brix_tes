import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomeCarousel from "../../components/Home/HomeCarousel/HomeCarousel";
import SearchNav from "../../components/Home/SearchNav/SearchNav";
import CircleCard from "../../components/Home/CircleCard/CircleCard";
import SquareImageCard from "../../components/Home/SquareImageCard/SquareImageCard";
import ProductCard from "../../components/Home/ProductCard/ProductCard";
import ProductCardLarge from "../../components/Home/ProductCardLarge/ProductCardLarge";
import BannerHire from "../../components/Home/BannerHire/BannerHire";
import ImageBanner from "../../components/Home/ImageBanner/ImageBanner";
import Footer from "../../components/Footer/Footer";
import HomeCarousel2 from "../../components/Home/HomeCarousel2/HomeCarousel2";

function Home() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Masonry", image: "images/catagories/brickwork.png" },
    { id: 2, name: "Concrete Ready", image: "images/catagories/concrete-mixer.png" },
    { id: 3, name: "Construction Chemicals", image: "images/catagories/oil.png" },
    { id: 4, name: "Steel, Spacers Scaffolding", image: "images/catagories/steel.png" },
    { id: 5, name: "Masonry", image: "images/catagories/brickwork.png" },
    { id: 6, name: "Concrete Ready", image: "images/catagories/concrete-mixer.png" },
    { id: 7, name: "Construction Chemicals", image: "images/catagories/oil.png" },
    { id: 8, name: "Steel, Spacers Scaffolding", image: "images/catagories/steel.png" },
    { id: 4, name: "Steel, Spacers Scaffolding", image: "images/catagories/steel.png" },
    { id: 5, name: "Masonry", image: "images/catagories/brickwork.png" },
    { id: 6, name: "Concrete Ready", image: "images/catagories/concrete-mixer.png" },
    { id: 7, name: "Construction Chemicals", image: "images/catagories/oil.png" },
    { id: 8, name: "Steel, Spacers Scaffolding", image: "images/catagories/steel.png" },
  ]);

  const [trendingBrands, setTrendingBrands] = useState([
    { id: 1, name: "Brand A", image: "/images/brands/brand.png" },
    { id: 2, name: "Brand B", image: "/images/brands/brand.png" },
    { id: 3, name: "Brand C", image: "/images/brands/brand.png" },
    { id: 4, name: "Brand D", image: "/images/brands/brand.png" },
    { id: 5, name: "Brand E", image: "/images/brands/brand.png" },
    { id: 6, name: "Brand A", image: "/images/brands/brand.png" },
    { id: 7, name: "Brand B", image: "/images/brands/brand.png" },
    { id: 8, name: "Brand C", image: "/images/brands/brand.png" },
    { id: 9, name: "Brand D", image: "/images/brands/brand.png" },
    { id: 10, name: "Brand E", image: "/images/brands/brand.png" },
    { id: 11, name: "Brand B", image: "/images/brands/brand.png" },
    { id: 12, name: "Brand C", image: "/images/brands/brand.png" },
    { id: 13, name: "Brand D", image: "/images/brands/brand.png" },
    { id: 14, name: "Brand E", image: "/images/brands/brand.png" },
  ]);

  const [nearestBrand, setNearestBrand] = useState([
    { id: 1, name: "A&J Goods", image: "/images/Newest/ns1.png" },
    { id: 2, name: "B&B Suppliers", image: "/images/Newest/ns2.png" },
    { id: 3, name: "Steels & co.", image: "/images/Newest/ns3.png" },
    { id: 4, name: "BuildNmix", image: "/images/Newest/ns4.png" },
  ]);

  const products = [
    {
      id: 1,
      name: "Cement Bags",
      image: "/images/products/cement.png",
      description: "25kg",
      discount: 25, // 10% discount
      price: 500 // Price in your currency
    },
    {
      id: 2,
      name: "AAC Blocks",
      image: "/images/products/brick.png",
      description: " 2x4x5",
      discount: 5, // 5% discount
      price: 200 // Price in your currency
    },
    {
      id: 3,
      name: "Cement Bags",
      image: "/images/products/cement.png",
      description: "25kg",
      discount: 10,
      price: 500
    },
    {
      id: 4,
      name: "AAC Blocks",
      image: "/images/products/brick.png",
      description: "2x4x5",
      discount: 5,
      price: 200
    },
    {
      id: 5,
      name: "Cement Bags",
      image: "/images/products/cement.png",
      description: "25kg",
      discount: 10,
      price: 500
    },
    {
      id: 6,
      name: "AAC Blocks",
      image: "/images/products/brick.png",
      description: "2x4x5",
      discount: 5,
      price: 200
    },
    {
      id: 7,
      name: "Cement Bags",
      image: "/images/products/cement.png",
      description: "25kg",
      discount: 10,
      price: 500
    },
    {
      id: 8,
      name: "AAC Blocks",
      image: "/images/products/brick.png",
      description: "2x4x5",
      discount: 5,
      price: 200
    },
  ];


  const bulddeals = [
    {
      id: 9,
      name: "TMT Steel Bars",
      image: "/images/products/steel.png",
      description: "Fe 550 Grade",
      discount: 0,
      price: 6.70,
    },
    {
      id: 10,
      name: "Interlocks",
      image: "/images/products/red_stone.png",
      description: "Multi-Color",
      discount: 0,
      price: 1.30,

    },
  ];


  return (
    <>
      <SearchNav />
      <HomeCarousel />
      <CircleCard data={categories} bg="bg-blue-300" title="Categories" />
      <CircleCard data={trendingBrands} bg="bg-white" title="Trending Brands" />
      <SquareImageCard data={nearestBrand} title="Nearest Suppliers" bg="bg-blue-300" />
      <ProductCard products={products} title="Trending Products" bg="#EAFFC8" />
      <ProductCardLarge products={bulddeals} title="Today’s Bulk Deals"/>
      <BannerHire/>
      <ProductCard products={products} title="Today’s Special Offer" bg="#FFDCA8" />
      <ImageBanner img="\images\banner_images\full_banner.png"/>
      <ProductCard products={products} title="Fast Moving Items" bg="#FFFFFF"/>
      <HomeCarousel2/>
      <div className="flex flex-col md:flex-row items-center justify-between bg-brand-primary p-4 md:p-6">
        <p className="text-white uppercase font-semibold text-center md:text-left mb-2 md:mb-0">
          Looking for a contractor for your next project?
        </p>
        <button className="bg-white text-brand-primary py-2 px-6 rounded-md uppercase font-semibold hover:bg-brand-secondary transition duration-200">
          Subscribe Now
        </button>
      </div>
    </>
  );
}

export default Home;
