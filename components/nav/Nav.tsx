"use client"
import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/logo/codeur-logo.png"
import { siteConfig } from "@/config/siteConfig"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
const Nav = () => {
    const pathName = usePathname()    
    return (
        <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link href="/" className="mr-2 md:mr-6 flex items-center space-x-2">
                <Image src={Logo} alt="logo" width={30} height={30} />
                <span className="font-geistSans font-bold">{siteConfig.name}</span>
            </Link>

            <Link href="/blog" className={cn("text-sm font-medium font-geistSans transition-colors hover:text-primary", pathName === "/blog" ? "text-foreground" : "text-foreground/60")}>Blog</Link>
            <Link href="/about" className={cn("text-sm font-medium font-geistSans transition-colors hover:text-primary", pathName === "/blog" ? "text-foreground" : "text-foreground/60")}>About</Link>
        </nav>
    )
}

export default Nav