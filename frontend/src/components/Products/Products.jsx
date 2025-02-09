import React from 'react';
import Card from '../Card/Card';
// import Areacnunt from '/assets/images/Areacnut.jpg;

function Products() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      <Card productname="Soap" img="./images/soap.jpeg" content="Experience the refreshing embrace of nature with our Sustainable Serenity Soap. Meticulously crafted with the highest commitment to environmental responsibility, this soap is your perfect partner in a greener lifestyle." link = ""/>
      <Card productname="Nail Polish" img="./images/nailpolish.jpeg" content="Elevate your beauty routine with Eco-Chic Nails, our line of sustainable nail polish that combines style with environmental consciousness. Perfectly curated for the modern, eco-aware individual, our nail polishes are designed to make you feel beautiful while respecting the planet." />
      <Card productname="Sustainable Pot" img="/images/pot.jpeg" content="Transform your home and garden with GreenGrow, our sustainable plant pot that combines elegance with environmental responsibility. Designed for eco-conscious gardeners, this pot is perfect for nurturing your plants while contributing to a greener planet." link = ""/>
      <Card productname="Bottle" img="/images/Bottle.jpeg" content="Pure and natural forest and farmed honey, harvested from the finest apiaries. Rich in flavor and nutrients, our honey offers a wholesome, organic option for both direct consumption and industrial use, meeting global quality standards" />
      {/* <Card productname="Iron Ore" img="https://via.placeholder.com/300" content="Iron ore is great" />
      <Card productname="Iron Ore" img="https://via.placeholder.com/300" content="Iron ore is great" /> */}
    </div>
  );
}

export default Products;
