import useSWR, { Fetcher } from 'swr';
import { Product } from "../../lib/types/product.types";

const fetcher: Fetcher<Product[], string> = (...args) => fetch(...args).then(res => res.json());

export default function Products() {
  const { data, error } = useSWR('http://localhost:5000/products', fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      {data.map((item: Product) => (
        <ul key={item.id}>
          <li>{item.name} - {item.price}</li>
        </ul>
      ))}
    </div>
  )
}
