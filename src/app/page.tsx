import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

const getCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  return res.json();
};
export default async function Home() {
  const categoriesData = getCategories();
  const [categories] = await Promise.all([categoriesData]);
  return (
    <main className=" flex flex-col h-full">
      <section className="gender">
        <button className="active">MEN</button>
        <button className="btn-primary">WOMEN</button>
      </section>
      <section className="hero w-full h-80 relative">
        <Image src="/1.jpg" width={0} height={0} alt="" sizes="100vw" className="w-full h-full object-cover" />
        <a className="btn-primary absolute bottom-5 left-2/4 -translate-x-2/4 p-2" href="/catalog">
          SHOP NOW
        </a>
      </section>
      <section className="seasonal-message bg-bg text-secondary text-3xl text-center">
        <h4>SUMMER COLLECTION</h4>
      </section>
      <section className="categories flex h-full text-secondary overflow-x-scroll">
        {categories.map((category) => (
          <Link href={`/catalog?category=${category}`} key={category} className="w-1/3 flex-shrink-0 relative">
            <figure className="w-full h-full">
              <Image src={category.image} width={0} height={0} alt="" sizes="100vw" className="w-full h-full object-cover " />
              <figcaption className="absolute bottom-0 text-center w-full bg-bg bg-opacity-60">{category.toUpperCase()}</figcaption>
            </figure>
          </Link>
        ))}
      </section>
    </main>
  );
}
