import Image from "next/image";

const categories = [
  { name: "Hoodies", image: "/hoodies.jpg" },
  { name: "Shirts", image: "/shirts.jpg" },
  { name: "Pants", image: "/pants.jpg" },
];
export default function Home() {
  return (
    <main className="h-screen flex flex-col items-stretch">
      <header className="flex bg-primary text-bg text-4xl justify-between px-3">
        <h3>TLK</h3>
        <button>UP</button>
      </header>
      <section className="gender">
        <button className="active">MEN</button>
        <button className="btn-primary">WOMEN</button>
      </section>
      <section className="hero w-full h-80 relative">
        <Image src="/1.jpg" width={0} height={0} alt="" sizes="100vw" className="w-full h-full object-cover" />
        <button className="btn-primary absolute bottom-5 left-2/4 -translate-x-2/4 p-2 ">SHOP NOW</button>
      </section>
      <section className="seasonal-message bg-bg text-secondary text-3xl text-center">
        <h4>SUMMER COLLECTION</h4>
      </section>
      <section className="categories flex h-full text-secondary">
        {categories.map((category) => (
          <figure className="w-1/3  relative" key={category.name}>
            <Image src={category.image} width={0} height={0} alt="" sizes="100vw" className="w-full h-full object-cover" />
            <figcaption className="absolute bottom-0 text-center w-full bg-bg bg-opacity-60">{category.name.toUpperCase()}</figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
