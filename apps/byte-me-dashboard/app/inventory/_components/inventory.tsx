import AddProduct from "./add-product"
import ProductCard from "./product-card"

type Props = {
  products: any[]
}

export default function Inventory({ products }: Props) {
  return (
    <div className="mt-10 flex h-full w-full flex-col items-center">
      <h1 className="text-3xl font-bold">Inventory Page</h1>
      <AddProduct />
      <div className="grid grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            src={p.productImages?.[0]?.url ?? "/placeholder.png"}
          />
        ))}
      </div>
    </div>
  )
}
