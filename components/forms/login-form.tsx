"use client"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { signInUser } from "@/server/users"
import { toast } from "sonner"

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(8)
})

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // const [isLoading, setIsLoading] = useState(false);
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: "",
  //     password: ""
  //   },
  // });

  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   try {
  //     setIsLoading(true)
  //     const response = await signInUser(values.email, values.password);
  //     if (response.success) {
  //       toast.success(response.messagge);
  //     }
  //     {
  //       toast.error(response.messagge);

  //     }

  //   } catch (error) {
  //     console.error(error);
  //   }
  //   finally {
  //     setIsLoading(false)
  //   }
  // }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="mnraza@gmail.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" placeholder="********" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button onClick={()=>{
                  console.log(" Login Button Clicked");
                  
                }} type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
