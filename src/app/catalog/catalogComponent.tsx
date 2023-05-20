import Link from "next/link";

export default function Catalog({ products }) {
    console.log(products)
  return (
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
          </link>
        </li>
      ))}
    </ul>
  );
}
