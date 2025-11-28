import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"

const LoginPage = () => {
  return (
    <div className="flex w-full h-screen max-w-md flex-col justify-center mx-auto gap-6">
      <Tabs defaultValue="login">
        <TabsList className='w-full '>
          <TabsTrigger value="login" className='hover:cursor-pointer'>Login</TabsTrigger>
          <TabsTrigger value="password" className='hover:cursor-pointer'>Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>
                <h2 className='text-xl md:text-2xl text-center'>Welcome Back</h2>
              </CardTitle>
              <CardDescription className='text-center'>
                Login in to your Repurfy account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <Separator className="w-1/2 mx-auto bg-red-900" />
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-email">Email</Label>
                <Input type='email' id="tabs-demo-email" placeholder="pedro@gmail.com" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-password">Password</Label>
                <Input type='password' id="tabs-demo-password" placeholder="********" />
              </div>
              <Button>Save changes</Button>
            </CardContent>
            <CardFooter className="flex justify-center flex-col gap-3">
              <p>Don't have an account?
                <Link href="#">Sign Up</Link>
                <Link href={"#"} className="text-[#004BBC]">Forgot Password</Link>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default LoginPage