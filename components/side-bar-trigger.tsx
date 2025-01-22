"use client"
import { useSidebar } from "@/hooks/use-side-bar"
import { cn } from "@/lib/utils"
import { PanelLeft } from "lucide-react"

interface SideBarTriggerProps {
  className?: string
}
const SideBarTrigger = ({ className }: SideBarTriggerProps) => {
  const { toggleSidebar } = useSidebar()
  return (
    <button
      onClick={toggleSidebar}
      className={cn(
        "w-10 h-10 p-0 inline-flex items-center justify-center border rounded-md bg-foreground hover:bg-foreground/80 shadow-2xl text-background/80 fixed top-2 left-2 z-[100]",
        className
      )}
    >
      <PanelLeft />
    </button>
  )
}

export { SideBarTrigger }
