"use client";
import Image from "next/image";
import { useState } from "react";
let product = {
  name: "Vinegar - Raspberry",
  price: "$44.57",
  image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  category: "SHIRTS",
  sizes: ["S", "M", "L", "XL"],
};
export default function Product() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="h-[60%] w-full relative">
        <Image src={product.image} alt={product.name} width={0} height={0} sizes="100vw" className="w-full h-full object-cover " />
        <button className="absolute bottom-4 right-5 h-10 w-10 bg-bg rounded-full  text-secondary">H</button>
      </div>
      <div className="flex flex-col px-4 py-2 gap-y-2 ">
        <h4 className="text-primary text-2xl">US {product.price.toUpperCase()}</h4>
        <h5 className="text-secondary text-2xl">{product.name.toUpperCase()}</h5>
        <div className="flex gap-5 w-full  ">
          {product.sizes.map((size) => (
            <span
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`rounded-[100%] h-9 w-9 text-center text-2xl flex items-center justify-center ${
                size === selectedSize ? "bg-primary" : "bg-secondary "
              }`}>
              {size}
            </span>
          ))}
        </div>
      </div>
      <button className="btn-primary w-full p-4 ">ADD TO CART</button>
    </div>
  );
}
