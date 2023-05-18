const products = [
  {
    name: "Water - San Pellegrino",
    price: "34.94",
    image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
    category: "PANTS",
  },
  {
    name: "Apples - Sliced / Wedge",
    price: "57.05",
    image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
    category: "HOODIES",
  },
];
import Image from "next/image";
export default function Cart() {
  return (
    <section className="cart w-screen bg-bg relative h-full">
      <div className="cart text-primary bg-bg h-11 text-4xl px-2 flex justify-between">
        <h4>TOTAL:</h4>
        <h4>{products.reduce((prev, c) => prev + parseFloat(c.price), 0)}</h4>
      </div>
      <ul className="grid grid-cols-2 gap-3 ">
        {products.map((product) => (
          <li key={product.name} className="relative h-60 ">
            <Image src={product.image} alt={product.name} width={0} height={0} sizes="100vw" className="w-full h-full object-cover" />
            <div className="info absolute bottom-0  w-full z-10 ">
              <h6 className="name truncate text-secondary px-2 pt-2">{product.name.toUpperCase()}</h6>
              <h6 className="price text-primary px-2 pb-2">{product.price}</h6>
              <div className="bg-bg opacity-60 w-full h-full absolute bottom-0 -z-10"></div>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn-primary w-full p-4 absolute bottom-0">PAY NOW</button>
    </section>
  );
}
