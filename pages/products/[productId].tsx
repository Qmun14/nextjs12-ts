import { TgetStaticProps, TproductDetail } from "../../lib/types/product.types";

export default function ProductDetail({ product }: TproductDetail) {
  return (
    <div>{product.name} - {product.price}</div>
  )
}

export const getServerSideProps = async ({ params }: TgetStaticProps) => {
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
    }
  }
}