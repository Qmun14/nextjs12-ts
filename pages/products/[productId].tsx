import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    const getProductById = async () => {
      const response = await fetch(`http://localhost:5000/products/${productId}`);
      const data = await response.json();
      setName(data.name);
      setPrice(data.price);
    }
    getProductById();
  }, [productId])
  return (
    <div>{name} - {price}</div>
  )
}