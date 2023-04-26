import { Product, TgetStaticProps, TproductDetail } from "../../lib/types/product.types";

export default function ProductDetail({ product }: TproductDetail) {
  return (
    <div>{product.name} - {product.price}</div>
  )
}

export const getStaticPaths = async () => {
  const response = await fetch(`http://localhost:5000/products`);
  const data = await response.json();
  const paths = data.map((item: Product) => ({
    params: {
      productId: `${item.id}`
    }
  }));
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: TgetStaticProps) => {
  const response = await fetch(`http://localhost:5000/products/${params.productId}`);
  const data = await response.json();
  return {
    props: {
      product: data
    }
  }
}