import { siteConfig } from "@/config/siteConfig"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import Icons from "../icons/Icons"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-blur]:bg-background/60">
        <div className="container mx-auto h-14 flex items-center px-2 md:px-6">
            {/* Main menu */}
            <Nav/>
            <div className="flex flex-1 items-center justify-end space-x-2">
                {/* Social icon */}
                <nav className="flex items-center"> 
                    <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                        <div className={cn(buttonVariants({variant: "ghost"}), "w-10 px-0")}>
                            <Icons.github className="w-4 h-4" />
                            <span className="sr-only">Github</span>
                        </div>
                    </Link>
                    <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
                        <div className={cn(buttonVariants({variant: "ghost"}), "w-10 px-0")}>
                            <Icons.twitter className="w-4 h-4" />
                            <span className="sr-only">Twitter</span>
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header