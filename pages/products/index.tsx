import { ProductsProps } from "../../lib/types/product.types";

export default function Products({ products }: ProductsProps) {
  return (
    <div>
      {products.map((item) => (
        <ul key={item.id}>
          <li>{item.name} - {item.price}</li>
        </ul>
      ))}
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:5000/products');
  const data = await response.json();
  return {
    props: {
      products: data
    }
  }
}
