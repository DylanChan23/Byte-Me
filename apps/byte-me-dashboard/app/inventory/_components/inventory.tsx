import AddProduct from "./add-product"

export default function Inventory() {
  return (
    <div className="mt-10 flex h-full w-full flex-col items-center">
      <h1 className="text-3xl font-bold">Inventory Page</h1>
      <AddProduct />
    </div>
  )
}
