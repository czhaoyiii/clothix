import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductCard from "./ProductCard";

export default function BestSellers() {
  const { products } = useContext(ShopContext);

  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const best = products.filter((product) => product.bestseller);
    setBestProducts(best.slice(0, 5));
  }, [products]);

  const productElements = bestProducts.map((product, index) => (
    <ProductCard
      key={index}
      id={product._id}
      name={product.name}
      price={product.price}
      image={product.image}
    />
  ));

  return (
    <div className="my-10">
      <div className="text-3xl text-center py-8">
        <Title
          title1="BEST"
          title2="SELLERS"
          caption="Our best-selling products that our customers can not get enough of. Shop the most popular items from our store."
        />
      </div>
      {/* Rendering List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {productElements}
      </div>
    </div>
  );
}
