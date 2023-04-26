export type ProductsProps = {
  products: {
    id: number;
    name: string;
    price: number;
  }[]
}

export type TgetStaticProps = {
  params: {
    productId: string
  }
}

export type Product = {
  id: number;
  name: string;
  price: number
}

export type TproductDetail = {
  product: Product
}