import { LoginButton } from "@/components/auth/login-button";
import { ModeToggle } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

export default function Home() {
  return (
    <main className="flex h-full flex-col p-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className={cn(font.className, 'flex  flex-col items-center justify-center h-full space-y-16')}>
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-semibold drop-shadow-md text-slate-50 ">Isys-timex</h1>
          <p className='text-lg text-slate-50'>Login to continue</p>
        <LoginButton>
          <Button variant={"secondary"} size='lg'>Login</Button>
        </LoginButton>
        </div>
      </div>
    </main>
  );
}
