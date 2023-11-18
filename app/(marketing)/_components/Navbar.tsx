import Logo from "@/components/ui/Logo";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Link
            href={"/sign-in"}
            className={buttonVariants({ size: "sm", variant: "outline" })}
          >
            Login
          </Link>
          <Link href={"/sign-up"} className={buttonVariants({ size: "sm" })}>
            Get Taskify for free
          </Link>
        </div>
      </div>
    </header>
  );
};
