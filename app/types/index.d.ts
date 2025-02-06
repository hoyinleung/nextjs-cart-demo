type ProductDetail = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}
type CartItems = ProductDetail & {
  quantity: number;
}

type TransactionProps = {
	customerEmail?: string
  productItems: CartItems[]
}