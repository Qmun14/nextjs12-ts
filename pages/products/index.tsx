import { useEffect, useState } from "react";
import { Product } from "../../lib/types/product.types";


export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('http://localhost:5000/products');
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, [])

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
