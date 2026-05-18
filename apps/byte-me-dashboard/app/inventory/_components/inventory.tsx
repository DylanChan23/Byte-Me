"use client"

import { useRouter } from "next/navigation"
import AddProduct from "./add-product"
import ProductCard from "./product-card"
import { useEffect } from "react"

type Props = {
  products: any[]
}

export default function Inventory({ products }: Props) {
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh()
    }, 5000)

    return () => clearInterval(interval)
  }, [router])

  return (
    <div className="mt-10 flex h-full w-full flex-col items-center pr-6">
      <h1 className="text-3xl font-bold">Inventory Page</h1>
      <AddProduct />
      <div className="mt-10 grid grid-cols-1 gap-8 px-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            quantity={p.quantity}
            src={p.productImages?.[0]?.url ?? "/placeholder.png"}
          />
        ))}
      </div>
    </div>
  )
}
