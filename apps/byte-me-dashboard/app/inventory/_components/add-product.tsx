"use client"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { PlusIcon } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createProductAction } from "../actions"
import { toast } from "sonner"
import RefreshIcon from "@workspace/ui/icons/refresh-icon"

export default function AddProduct() {
  //   Form states
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [sku, setSku] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState<number>(0)
  const [lowStockAt, setLowStockAt] = useState<number>(0)
  const [image, setImage] = useState<File | null>(null)

  const resetForm = () => {
    setName("")
    setSku("")
    setPrice("")
    setQuantity(0)
    setLowStockAt(0)
    setImage(null)
  }

  const formatPrice = (value: string) => {
    const num = Number(value)
    if (isNaN(num)) return ""
    return num.toFixed(2)
  }

  const generateSku = (name: string) => {
    const prefix = name.trim().slice(0, 3).toUpperCase()

    const random = Math.random().toString(36).substring(2, 6).toUpperCase()
    return `PRD-${prefix}-${random}`
  }

  const router = useRouter()
  const handleSubmit = async () => {
    try {
      let imageUrl: string | null = null

      if (image) {
        const formData = new FormData()
        formData.append("file", image)

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        })

        const data = await res.json()
        imageUrl = data.url
      }

      await createProductAction({
        name,
        sku,
        price: Number(price),
        quantity,
        lowStockAt,
        imageUrl: imageUrl ?? undefined,
      })

      toast.success("Product created successfully 🎉")

      resetForm()
      setIsOpen(false)
      setTimeout(() => {
        router.refresh()
      }, 200)
    } catch (err) {
      toast.error("Failed to create product")
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open)
        if (!open) resetForm()
      }}
    >
      <DialogTrigger className="fixed right-6 bottom-6 rounded-lg bg-white p-2 hover:bg-white/80">
        <PlusIcon className="h-5 w-5 text-black" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Add a new product</DialogHeader>
        <FieldSet>
          <FieldGroup>
            {/* Name */}
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input
                placeholder="John Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>
            {/* Sku */}
            <Field>
              <FieldLabel>SKU</FieldLabel>
              <div className="flex flex-row items-center justify-center gap-4">
                <Input
                  placeholder="PRD-AX92-001"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                />
                <Button
                  className="w-fit"
                  variant="secondary"
                  onClick={() => {
                    setSku(generateSku(name))
                  }}
                >
                  <RefreshIcon />
                </Button>
              </div>
            </Field>
            {/* Price */}
            <Field>
              <FieldLabel>Price</FieldLabel>
              <Input
                placeholder="10.99"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                onBlur={() => setPrice(formatPrice(price))}
              />
            </Field>
            <div className="flex gap-8">
              {/* Quantity */}
              <Field>
                <FieldLabel>Quantity</FieldLabel>
                <Input
                  placeholder="12"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </Field>
              {/* Low Stock */}
              <Field>
                <FieldLabel>Low stock at</FieldLabel>
                <Input
                  placeholder="4"
                  value={lowStockAt}
                  onChange={(e) => setLowStockAt(Number(e.target.value))}
                />
              </Field>
            </div>
            {/* Images */}
            <Field>
              <FieldLabel>Images</FieldLabel>
              <Input
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) setImage(file)
                }}
              />
              <FieldDescription>Select images to upload.</FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogContent>
    </Dialog>
  )
}
