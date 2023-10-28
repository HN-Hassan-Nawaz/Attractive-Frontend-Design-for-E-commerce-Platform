import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productcard/ProductCard';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart, deleteFromCart } from '../../redux/cartSlice';

function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        <Filter />
        <ProductCard />
      </Layout>
    </>
  )
}

export default Home;
