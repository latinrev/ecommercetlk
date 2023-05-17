import Image from "next/image";

const products = [
  {
    name: "Vinegar - Raspberry",
    price: "$44.57",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  },
  {
    name: "Wine - Fino Tio Pepe Gonzalez",
    price: "$32.27",
    image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
  {
    name: "Juice - Orange, Concentrate",
    price: "$15.98",
    image: "http://dummyimage.com/250x250.png/ff4444/ffffff",
  },
  {
    name: "Carbonated Water - Raspberry",
    price: "$19.15",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  },
  {
    name: "Sea Bass - Fillets",
    price: "$54.70",
    image: "http://dummyimage.com/250x250.png/ff4444/ffffff",
  },
  {
    name: "Juice - Grapefruit, 341 Ml",
    price: "$55.76",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  },
  {
    name: "Aspic - Light",
    price: "$42.91",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  },
  {
    name: "Wine - White, Mosel Gold",
    price: "$23.99",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  },
  {
    name: "Wine - Prosecco Valdobiaddene",
    price: "$40.93",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  },
  {
    name: "Ecolab - Hand Soap Form Antibac",
    price: "$31.43",
    image: "http://dummyimage.com/250x250.png/ff4444/ffffff",
  },
  {
    name: "Garbag Bags - Black",
    price: "$37.02",
    image: "http://dummyimage.com/250x250.png/ff4444/ffffff",
  },
  {
    name: "Soup - Clam Chowder, Dry Mix",
    price: "$39.98",
    image: "http://dummyimage.com/250x250.png/dddddd/000000",
  },
  {
    name: "Chocolate - White",
    price: "$19.46",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  },
  {
    name: "Schnappes Peppermint - Walker",
    price: "$30.10",
    image: "http://dummyimage.com/250x250.png/dddddd/000000",
  },
  {
    name: "Red Pepper Paste",
    price: "$45.96",
    image: "http://dummyimage.com/250x250.png/ff4444/ffffff",
  },
  {
    name: "Gelatine Leaves - Envelopes",
    price: "$43.11",
    image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
  {
    name: "Soup - Knorr, Chicken Gumbo",
    price: "$32.40",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  },
  {
    name: "Sole - Iqf",
    price: "$19.47",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  },
  {
    name: "Water - San Pellegrino",
    price: "$34.94",
    image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
  {
    name: "Apples - Sliced / Wedge",
    price: "$57.05",
    image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
];

export default function Catalog() {
  return (
    <section className="catalog h-screen w-screen">
      <div className="categories text-primary bg-bg h-11 text-4xl px-2 flex justify-between">
        <h4>ALL</h4>
        <h4>$D</h4>
      </div>
      <ul className="grid grid-cols-2 gap-3 ">
        {products.map((product) => (
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
