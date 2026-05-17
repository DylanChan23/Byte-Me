"use client"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import Image from "next/image"
import { deleteProductAction } from "../actions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

type ProductCardProps = {
  id: string
  name: string
  price: number
  src: string
}

export default function ProductCard({
  id,
  name,
  price,
  src,
}: ProductCardProps) {
  const router = useRouter()
  const handleDelete = async () => {
    try {
      await deleteProductAction(id)
      toast("Product deleted")
      router.refresh()
    } catch {
      toast.error("Failed to delete product")
    }
  }

  return (
    <Card>
      <Image
        src={src}
        alt={`${name} image`}
        width={600}
        height={600}
        className="w-full object-cover"
      />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardAction>${(price / 100).toFixed(2)}</CardAction>
      </CardHeader>
      <CardFooter>
        <Button>Update</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </CardFooter>
    </Card>
  )
}
