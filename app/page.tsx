"use client"
import { useEffect, useState } from "react"
import { AlertTriangle, ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"
export default function Home() {
  const [state, setState] = useState<number>(0)
  const handleIncrement = () => {
    setState((prev) => Math.min(prev + 1, 8)) // En fazla 10
  }
  const handleDecrement = () => {
    setState((prev) => Math.max(prev - 1, 0)) // En az 0
  }
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleIncrement()
      } else if (event.key === "ArrowLeft") {
        handleDecrement()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])
  return (
    <div className="lg:grid lg:grid-cols-2">
      {state !== 0 && (
        <div className="fixed top-2 left-[50%] w-12 h-12 rounded-full -ml-6 p-4 bg-black text-white mx-auto right-auto z-50 font-semibold tracking-tighter border-emerald-700 shadow-2xl flex items-center justify-center">
          {state}
        </div>
      )}
      <div className="fixed bottom-2 left-[50%] w-40 -ml-20 p-4 bg-white mx-auto right-auto z-50 font-semibold tracking-tighter rounded-md shadow-2xl flex items-center justify-between">
        <button onClick={() => handleDecrement()}>Prev</button>
        <button onClick={() => handleIncrement()}>Next</button>
      </div>
      <div className="lg:min-h-screen bg-slate-200 p-10 space-y-4 pb-[500px]">
        <h2 className="sticky top-2 z-10 text-4xl font-semibold  p-4 bg-emerald-600 text-white shadow-lg rounded-md border">
          Layout Rules
        </h2>
        <ul className="menu">
          <li className={cn("opacity-100", state === 0 && "opacity-0")}>
            <div className="icon">
              <Check />
            </div>
            <span>
              File name should be exactly <span>layout.tsx</span>
              <br />
              <span className="text inline-flex mt-4 gap-2 items-center text-lg">
                <AlertTriangle className="w-8 h-8 text-destructive" />
                not use{" "}
                <span className="text-destructive">
                  root-layout.tsx
                </span> or <span className="text-destructive">layouts.tsx</span>
                ect.
              </span>
            </span>
          </li>
          <li className={cn("opacity-100", state <= 1 && "opacity-0")}>
            <div className="icon">
              <Check />
            </div>
            <span>
              Html and body tags should only be in the
              <span>root layout file</span>
              <br />
              <span className="text inline-flex mt-4 gap-2 items-center text-lg">
                <AlertTriangle className="w-8 h-8 text-destructive" />
                <span className="text-destructive">
                  other layout.tsx files shouldn&apos;t contain html & body
                  tags.
                </span>
              </span>
            </span>
          </li>
          <li className={cn("opacity-100", state <= 2 && "opacity-0")}>
            <div className="icon">
              <Check />
            </div>
            <span>
              Should be <span>export default function.</span>
              <br />
              <span className="text inline-flex mt-4 gap-2 items-center text-lg">
                <AlertTriangle className="w-8 h-8 text-destructive" />
                <span className="text-destructive">
                  Do not use export const in layout.tsx and page.tsx files.
                </span>
                <span className="text">It is not expected.</span>
              </span>
            </span>
          </li>

          <li className={cn("opacity-100", state <= 3 && "opacity-0")}>
            <div className="icon">
              <Check />
            </div>
            <span>
              Like all components and pages, layout names{" "}
              <span>must start with a capital</span> letter.
              <div className="flex-1 flex-col flex">
                <p>For example;</p>
                <span>
                  <ArrowRight />
                  RootLayout
                </span>
                <span>
                  {" "}
                  <ArrowRight />
                  Layout
                </span>
                <span>
                  {" "}
                  <ArrowRight />
                  DashboardLayout
                </span>
              </div>
            </span>
          </li>
          <li className={cn("opacity-100", state <= 4 && "opacity-0")}>
            <div className="icon">
              <Check />
            </div>
            <span>
              Must contain <span>children</span> prop to show child pages
            </span>
          </li>
        </ul>
      </div>
      <div className="lg:min-h-screen bg-slate-300 p-10 space-y-4 pb-[500px]">
        <h2 className="sticky top-2 z-10 text-4xl font-semibold  p-4 bg-black/90 border-black/90 text-white shadow-lg rounded-md border">
          Layout Conventions
        </h2>
        <ul className="menu purple">
          <li className={cn("opacity-100", state <= 5 && "opacity-0")}>
            <div className="icon purple">
              <Check />
            </div>
            <span>
              The name of this layout function could be <span>RootLayout</span>{" "}
              or <span>Layout</span> or <span>MyLayout</span>. This is not
              mandatory, it is just a convention.
            </span>
          </li>
          <li className={cn("opacity-100", state <= 6 && "opacity-0")}>
            <div className="icon purple">
              <Check />
            </div>
            <span>
              The function name in the layout file containing html and body can
              be <span>RootLayout</span>. This is a convention.
            </span>
          </li>
          <li className={cn("opacity-100", state <= 7 && "opacity-0")}>
            <div className="icon purple">
              <Check />
            </div>
            <span>
              The name <span>PublicLayout</span> can be used for public routes
              and the name <span>DashboardLayout</span> can be used for
              Dashboard routes. <br />
              This is a convention.
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
