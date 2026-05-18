"use client"

import { useEffect } from "react"
import ProductCard from "./product-card"
import { useRouter } from "next/navigation"

type Props = {
  products: any[]
  user: {
    name: string
  }
}

export default function Overview({ products, user }: Props) {
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh()
    }, 5000)

    return () => clearInterval(interval)
  }, [router])

  return (
    <div className="mt-10 flex h-full w-full flex-col items-center">
      <h1 className="text-3xl font-bold">Welcome {user.name} to your store!</h1>
      <div className="mt-10 grid w-full grid-cols-1 gap-8 px-20 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            src={p.productImages?.[0]?.url ?? "/placeholder.png"}
          />
        ))}
      </div>
    </div>
  )
}
