import { LoginButton } from "@/components/auth/login-button";
import { ModeToggle } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import LoginPage from "./auth/login/page";

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

export default function Home() {
  return (
    <div className="flex h-full justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 to-[#0C1029]">
      <LoginPage />
    </div>
  );
}
