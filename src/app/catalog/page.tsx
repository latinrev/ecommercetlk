"use client";
import SelectClient from "@/components/selectClient";
import Image from "next/image";
import { useCallback, useState } from "react";
const products = [
  {
    name: "Vinegar - Raspberry",
    price: "$44.57",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
    category: "SHIRTS",
  },
  {
    name: "Red Pepper Paste",
    price: "$45.96",
    image: "http://dummyimage.com/250x250.png/ff4444/ffffff",
    category: "SHIRTS",
  },
  {
    name: "Gelatine Leaves - Envelopes",
    price: "$43.11",
    image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
    category: "PANTS",
  },
  {
    name: "Soup - Knorr, Chicken Gumbo",
    price: "$32.40",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
    category: "PANTS",
  },
  {
    name: "Sole - Iqf",
    price: "$19.47",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
    category: "HOODIES",
  },
  {
    name: "Water - San Pellegrino",
    price: "$34.94",
    image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
    category: "PANTS",
  },
  {
    name: "Apples - Sliced / Wedge",
    price: "$57.05",
    image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
    category: "HOODIES",
  },
];
const categories = [
  { name: "ALL", image: "/hoodies.jpg" },
  { name: "Hoodies", image: "/hoodies.jpg" },
  { name: "Shirts", image: "/shirts.jpg" },
  { name: "Pants", image: "/pants.jpg" },
];

export default function Catalog() {
  const [category, setCategory] = useState("ALL");
  const [filterDescending, setFilterDescending] = useState(false);

  const prepareProducts = useCallback(() => {
    return products
      .sort((a, b) =>
        filterDescending
          ? parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", ""))
          : parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""))
      )
      .filter((product) => (category === "ALL" ? product : product.category === category));
  }, [category, filterDescending]);
  return (
    <section className="catalog w-screen bg-bg">
      <div className="categories text-primary bg-bg h-11 text-4xl px-2 flex justify-between">
        <SelectClient
          onChange={(s) => {
            setCategory(s);
          }}
          options={categories.map((category) => ({ label: category.name.toUpperCase(), value: category.name }))}
        />
        <h4
          onClick={() => {
            setFilterDescending(!filterDescending);
          }}>
          $D
        </h4>
      </div>
      <ul className="grid grid-cols-2 gap-3 ">
        {prepareProducts().map((product) => (
          <li key={product.name} className="relative h-60 ">
            <Image src={product.image} alt={product.name} width={0} height={0} sizes="100vw" className="w-full h-full object-cover " />
            <div className="info absolute bottom-0  w-full z-10 ">
              <h6 className="name truncate text-secondary px-2 pt-2">{product.name.toUpperCase()}</h6>
              <h6 className="price text-primary px-2 pb-2">{product.price}</h6>
              <div className="bg-bg opacity-60 w-full h-full absolute bottom-0 -z-10"></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
