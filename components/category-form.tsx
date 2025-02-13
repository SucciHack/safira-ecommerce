"use client"

import { useState } from "react"
// import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ImageInput from "./categoryImageUpload"
import { useForm } from "react-hook-form"

export type CategoryProps = {
  categoryName:string,
  categoryImage:string
}
export default function NewCategoryPage() {
    const initialImage = "/placeholder.svg";
    const [imageUrl, setImageUrl] = useState(initialImage);
  // const router = useRouter()
  const {
    register,
    handleSubmit,
    formState:{errors}
  }= useForm<CategoryProps>()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  async function onSubmit(data:CategoryProps){
    data.categoryImage = imageUrl
    try {
      const response = await fetch(`${baseUrl}/api/v1/categories`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      console.log(response)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mx-auto max-w-2xl py-8">
      <h1 className="mb-8 text-3xl font-bold">Create New Category</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="w-full">
                <Label htmlFor="name">Category Name</Label>
                <Input {...register("categoryName", { required: true })} id="name" className="mt-1" />
                {errors.categoryName && <span>field is required</span>}
                </div>
            <ImageInput
                title="Category Image"
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint="categoryImage"
            />
        <Button type="submit" className="w-full bg-[#00B853] hover:bg-[#00A048]">
          Create Category
        </Button>
      </form>
    </div>
  )
}

