import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const getProduct = async (productId) => {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  return res.json();
};

export default async function Product({ params, searchParams }) {
  const productData = getProduct(params.productId);
  const [product] = await Promise.all([productData]);
  const { size } = searchParams;

  return (
    <div className="flex flex-col justify-between h-full max-h-full">
      <div className="h-[60%] w-full relative">
        <Image src={product.image} alt={product.name} width={0} height={0} sizes="100vw" className="w-full h-full" />
        <button className="absolute bottom-4 right-5 h-10 w-10 bg-bg rounded-full  text-secondary">H</button>
      </div>
      <div className="flex flex-col px-4 py-2 gap-y-2 justify-center ">
        <h4 className="text-primary text-2xl">US {product.price}</h4>
        <h5 className="text-secondary text-1xl">{product.title.toUpperCase()}</h5>
      </div>
      <button className="btn-primary w-full p-4 ">ADD TO CART</button>
    </div>
  );
}
{
  /*         <div className="flex gap-5 w-full  ">
          {["S","M","L","XL"].map((size) => (
            <Link
              href={`catalog/${params.productId}?size=${size}`}
              key={size}
              className={`rounded-[100%] h-9 w-9 text-center text-2xl flex items-center justify-center ${
                size === size ? "bg-primary" : "bg-secondary "
              }`}>
              {size}
            </Link>
          ))}
        </div> */
}
