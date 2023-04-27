import { useRouter } from "next/router";
import { Product, TgetStaticProps, TproductDetail } from "../../lib/types/product.types";

export default function ProductDetail({ product }: TproductDetail) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>{product.name} - {product.price}</div>
  )
}

export const getStaticPaths = async () => {
  const response = await fetch(`http://localhost:5000/products?_limit=2`);
  const data = await response.json();
  const paths = data.map((item: Product) => ({
    params: {
      productId: `${item.id}`
    }
  }));
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: TgetStaticProps) => {
  const response = await fetch(`http://localhost:5000/products/${params.productId}`);
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data
    },
    revalidate: 1,
  }
}