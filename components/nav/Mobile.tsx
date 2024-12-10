"use client"

import { useState } from "react"
import { Sheet, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"


const Mobile = () => {
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen} >
            <SheetTrigger asChild>
                <Button variant="outline" className="w-10 px-0 sm:hidden"></Button>
            </SheetTrigger>
        </Sheet>
    )
}

export default Mobile