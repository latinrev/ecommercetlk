import SelectClient from "@/components/selectClient";
import Image from "next/image";
import Link from "next/link";

const getProducts = async (category: string, sort = " asc") => {
  console.log(category);
  let baseURL = "https://fakestoreapi.com/products";
  if (category) baseURL += `/category/${category}?sort=${sort}`;
  const res = await fetch(baseURL);
  return res.json();
};
const getCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  return res.json();
};
export default async function Catalog({ searchParams }) {
  const { category, sort } = searchParams;
  const productsData = getProducts(category, sort);
  const categoriesData = getCategories();
  const [categories, products] = await Promise.all([categoriesData, productsData]);
  return (
    <section className="catalog w-screen bg-bg">
      <div className="categories text-primary bg-bg h-11 text-4xl px-2 flex justify-between">
        <SelectClient options={categories.map((category) => ({ label: category.toUpperCase(), value: category }))} />
        <Link href={`catalog?category=${category}&sort=${sort === "desc" ? "asc" : "desc"}`} className="">$D</Link>
      </div>
      <ul className="grid grid-cols-2 gap-3 ">
        {products.map((product) => (
          <li key={product.title} className="relative h-60 ">
            <Link href={`catalog/${product.id}`}>
              <Image src={product.image} alt={product.name} width={0} height={0} sizes="100vw" className="w-full h-full object-cover " />
              <div className="info absolute bottom-0  w-full z-10 ">
                <h6 className="name truncate text-secondary px-2 pt-2">{product.title.toUpperCase()}</h6>
                <h6 className="price text-primary px-2 pb-2">{product.price}</h6>
                <div className="bg-bg opacity-60 w-full h-full absolute bottom-0 -z-10"></div>
              </div>
            </Link>
          </li>
        ))}
      </ul>{" "}
      *
    </section>
  );
}
