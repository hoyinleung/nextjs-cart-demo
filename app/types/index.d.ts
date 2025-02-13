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

type Order ={
  _id: {
    $oid: string
  }
  name: string
  email: string
  amount: number
  orderedAt?:string
}