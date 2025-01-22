import Link from "next/link"
import { Sidebar } from "./sidebar"

export default function AppSidebar() {
  return (
    <Sidebar>
      <nav className="font-semibold tracking-tight grid gap-0">
        <Link className="flex px-4 py-3 items-center" href="/">
          Organize Folders
        </Link>
        <Link className="flex px-4 py-2 items-center" href="/layout-rules">
          Layout Rules
        </Link>
        <Link className="flex px-4 py-3 items-center" href="/auth-plan">
          Auth Plan
        </Link>
      </nav>
    </Sidebar>
  )
}
