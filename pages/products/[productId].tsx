import useSWR, { Fetcher } from 'swr';
import { useRouter } from "next/router";
import { Product } from '../../lib/types/product.types';

const fetcher: Fetcher<Product, string> = (...args) => fetch(...args).then(res => res.json());

export default function ProductDetail() {

  const router = useRouter();
  const { productId } = router.query;

  const { data, error } = useSWR<Product>(`http://localhost:5000/products/${productId}`, fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>{data.name} - {data.price}</div>
  )
}