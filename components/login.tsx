"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CustomCarousel from "./custom-corousel";
import TextInput from "./text-input";
import SubmitButton from "./submit-button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export type LogInInputProps = {
  email: string;
  password: string;
};
export default function LogIn() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LogInInputProps>();
  const [err, setErr] = useState("")
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const router = useRouter()
  async function onSubmit(data: LogInInputProps) {
      setIsLoading(true)
      try {
        const response = await fetch(`${baseUrl}/api/v1/logIn`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })
        reset()
        if(response.status ===403){
            setErr("Wrong credentials")
            setIsLoading(false)
            toast.error("wrong credentials")
        } else if(response.status===200){
            setIsLoading(false)
            router.push("/dashboard")
            toast.success("loggedIn successfully")
        } 
    } catch (error) {
      console.log(error)
      toast.error("wrong credentials")
    }

  }
  return (
    <div className="w-full lg:grid h-screen lg:min-h-screen lg:grid-cols-2 relative items-center">
      <div className="flex items-center py-12">
        <div className="grid gap-6  w-full">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold text-blue-800/80">Sign In</h1>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex mx-auto w-full justify-center items-center gap-3 p-3 px-6">
            <div className="w-full space-y-3 mx-auto px-16">
                <TextInput
                label="Email Address"
                register={register}
                name="email"
                type="email"
                errors={errors}
                placeholder="Eg. johndoe@gmail.com"
                />
                <div>
                <TextInput
                label="Password"
                register={register}
                name="password"
                type="password"
                errors={errors}
                placeholder="******"
                />
                {
                    err && (
                        <span className="text-xs text-red-500">{err}</span>
                    )
                }
                </div>
            </div>

            </div>
            <div className="max-w-[800px] mx-auto">
            <SubmitButton
              title="Log In"
              loading={isLoading}
              loadingTitle="Logging In..."
            />
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            I don{"'"}t have an account?{" "}
            <Link href="/register" className="underline">
              Register
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
