"use client"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import Image from "next/image"
import { deleteProductAction } from "../actions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import TrashIcon from "@workspace/ui/icons/trash-icon"
import PenIcon from "@workspace/ui/icons/pen-icon"

type ProductCardProps = {
  id: string
  name: string
  price: number
  quantity: number
  src: string
}

export default function ProductCard({
  id,
  name,
  price,
  quantity,
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
    <Card className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <Image
        src={src}
        alt={`${name} image`}
        width={600}
        height={600}
        className="w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="text-lg font-bold uppercase">{name}</CardTitle>
        <CardDescription>In Stock: {quantity}</CardDescription>
        <CardAction>
          <Badge variant="outline">${(price / 100).toFixed(2)}</Badge>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex w-full items-center gap-4">
        <Button variant="secondary" className="flex-1">
          Update
          <PenIcon />
        </Button>
        <Button variant="destructive" onClick={handleDelete} className="flex-1">
          Delete
          <TrashIcon />
        </Button>
      </CardFooter>
    </Card>
  )
}
