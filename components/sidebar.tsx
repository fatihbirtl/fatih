"use client"
import { useSidebar } from "@/hooks/use-side-bar"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

interface SidebarProps {
  className?: string
  children: React.ReactNode
}
const Sidebar = ({ className, children }: SidebarProps) => {
  const { isOpen, setIsOpen } = useSidebar()
  const pathname = usePathname()
  useEffect(() => {
    setIsOpen(false)
  }, [pathname, setIsOpen])
  return (
    isOpen && (
      <>
        <div
          className={cn(
            "h-screen w-72 fixed inset-0 z-[90] shadow-2xl bg-background pt-10",
            className
          )}
        >
          <div className="pt-6">{children}</div>
        </div>
        <div
          onClick={() => setIsOpen(false)}
          className="fixed bg-black/90 inset-0 z-[80] cursor-pointer"
        ></div>
      </>
    )
  )
}

export { Sidebar }
