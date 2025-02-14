"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"
// import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import TextInput from "./text-input"
import SubmitButton from "./submit-button"
import MultipleImageInput from "./multiple-image"
// import toast from "react-hot-toast"

export type ProductInputProps = {
  productName: string
  brand: string
  inStock: boolean
  price: number
  quantity: number
  description: string
  images: string[]
}

export default function ProductForm() {
  const [isLoading, setIsLoading] = useState(false)
  const initialImages = ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  const [productImages, setProductImages] = useState(initialImages)
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<ProductInputProps>({
    defaultValues: {
      inStock: false,
    },
  })

  async function onSubmit(data:ProductInputProps) {
    data.images = productImages
    data.price = Number(data.price)
    data.quantity = Number(data.quantity)
    setIsLoading(true)
    console.log(data)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
      try {
        const response = await fetch(`${baseUrl}/api/v1/products`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })
        setIsLoading(false)
        reset()
        toast.success("created")
        console.log(response)
    } catch (error) {
      console.log(error)
      toast.error("failed to create")
    }
  }

  const inStock = watch("inStock")

  return (
    <div className="flex items-center py-12 px-4 md:px-20">
      <div className="grid gap-6 w-full">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold text-blue-800/80">Create a Product</h1>
        </div>
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex mx-auto w-full justify-center items-center gap-3 p-3 px-6">
            <div className="w-full space-y-3 mx-auto">
            <TextInput
                label="Product Name"
                register={register}
                name="productName"
                type="text"
                errors={errors}
                placeholder=""
                />
              <TextInput
                label="Brand"
                register={register}
                name="brand"
                type="text"
                errors={errors}
                placeholder=""
              />
              <TextInput
                label="Price"
                register={register}
                name="price"
                type="number"
                errors={errors}
                placeholder=""
              />
              <TextInput
                label="Quantity"
                register={register}
                name="quantity"
                type="number"
                errors={errors}
                placeholder=""
              />
              <div className="flex items-center space-x-2">
                <Checkbox id="inStock" checked={inStock} onCheckedChange={(checked) => setValue("inStock", checked as boolean)} />
                <Label htmlFor="inStock">In Stock</Label>
              </div>
              <TextInput
                label="Description"
                register={register}
                name="description"
                type="textarea"
                errors={errors}
                placeholder=""
              />
            </div>
            <div className="w-full md:w-2/3 mx-auto mt-2">
              <MultipleImageInput
                title="Product Images"
                imageUrls={productImages}
                setImageUrls={setProductImages}
                endpoint="productImages"
              />
            </div>
          </div>
          <div className="max-w-[800px] mx-auto">
            <SubmitButton title="Create" loading={isLoading} loadingTitle="Creating product please wait..." />
          </div>
        </form>
      </div>
    </div>
  )
}

