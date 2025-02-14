"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CustomCarousel from "./custom-corousel";
import TextInput from "./text-input";
import SubmitButton from "./submit-button";
import ImageInput from "./categoryImageUpload";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  image:string
};
export default function RegisterV1() {
  const [isLoading, setIsLoading] = useState(false);
  const initialImage ="/userplaceholder.avif";
    const [imageUrl, setImageUrl] = useState(initialImage);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  const router = useRouter()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  async function onSubmit(data: RegisterInputProps) {
    data.image = imageUrl
    setIsLoading(true)
    try {
      const response = await fetch(`${baseUrl}/api/v1/users`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    })
    reset()
    if(response.ok){
      router.push("/logIn")
      setIsLoading(false)
      toast.success("Account created successfully")
    }
    } catch (error) {
      console.log(error)
      toast.error("failed to create Account")
    }
  }
  return (
    <div className="w-full lg:grid h-screen lg:min-h-screen lg:grid-cols-2 relative items-center">
      <div className="flex items-center py-12">
        <div className="grid gap-6  w-full">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold text-blue-800/80">Create an Account</h1>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex mx-auto w-full justify-center items-center gap-3 p-3 px-6">
            <div className="w-full space-y-3 mx-auto">
                <TextInput
                label="Full Name"
                register={register}
                name="fullName"
                errors={errors}
                placeholder="eg John Doe"
                />
                <TextInput
                label="Email Address"
                register={register}
                name="email"
                type="email"
                errors={errors}
                placeholder="Eg. johndoe@gmail.com"
                />
                <TextInput
                label="Phone Number"
                register={register}
                name="phone"
                type="tel"
                errors={errors}
                placeholder=""
                />
                <TextInput
                label="Password"
                register={register}
                name="password"
                type="password"
                errors={errors}
                placeholder="******"
                />
            </div>
            <div className="w-2/3 mx-auto mt-2">
            <ImageInput
                title="Profile Image"
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint="categoryImage"
            />
            </div>

            </div>
            <div className="max-w-[800px] mx-auto">
            <SubmitButton
              title="Sign Up"
              loading={isLoading}
              loadingTitle="Creating Account please wait..."
            />
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
}
