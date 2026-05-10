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

export default function AddProduct() {
  //   Form states
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [sku, setSku] = useState("")
  const [price, setPrice] = useState<number>(0)
  const [quantity, setQuantity] = useState<number>(0)
  const [lowStockAt, setLowStockAt] = useState<number>(0)
  const [image, setImage] = useState("")

  const handleSubmit = async () => {
    // TO DO
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button className="fixed right-6 bottom-6">
          <PlusIcon className="h-5 w-5" />
        </Button>
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
              <Input
                placeholder="PRD-AX92-001"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
              />
            </Field>
            {/* Price */}
            <Field>
              <FieldLabel>Price</FieldLabel>
              <Input
                placeholder="10.99"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </Field>
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
            {/* Images */}
            <Field>
              <FieldLabel>Images</FieldLabel>
              <Input
                type="file"
                value={image}
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) setImage(file.name)
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
