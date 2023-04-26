type ProductsProps = {
  products: {
    id: number;
    name: string;
    price: number;
  }[]
}

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

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:5000/products');
  const data = await response.json();
  return {
    props: {
      products: data
    }
  }
}
