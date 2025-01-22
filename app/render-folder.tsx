"use client"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight, File, Folder } from "lucide-react"
import { useState } from "react"

export function RenderFolder({ structure }: { structure: any[] }) {
  const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>({})

  const toggleFolder = (name: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  return (
    <ul className="ml-6 border-l pl-2 border-slate-300 text-xl tracking-tight font-semibold">
      {structure.map((item) => (
        <li key={item.name} className={cn("my-2", item.color)}>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => item.type === "folder" && toggleFolder(item.name)}
          >
            {item.type === "folder" ? (
              openFolders[item.name] ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )
            ) : (
              <File className="w-4 h-4" />
            )}
            {item.type === "folder" && <Folder className="w-4 h-4" />}
            {item.name}
          </div>
          {item.children && openFolders[item.name] && (
            <RenderFolder structure={item.children} />
          )}
        </li>
      ))}
    </ul>
  )
}
