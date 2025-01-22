"use client"

import { cn } from "@/lib/utils"
import {
  ArrowLeftRight,
  Circle,
  CircleIcon,
  FileLineChart,
  Folder,
} from "lucide-react"
import { useState } from "react"

interface Menu {
  text: string
}

const middlewareMenu = [
  {
    text: "Integrate Middleware with auth.config.ts",
  },
  {
    text: "Define Matchers",
  },
]

const authMenu = [
  {
    text: "export auth, handlers, signIn, signOut",
  },
  {
    text: "add adapter",
  },
  {
    text: "session strategy",
  },
  {
    text: "credentials Provider",
  },
]

const configMenu = [
  {
    text: "writing authorized rules  and integrate with  middleware.ts",
  },
  {
    text: "GitHub, Google Providers",
  },
  {
    text: "Extend jwt tokens and sessions",
  },
]

function Menu({ menu }: { menu: Menu[] }) {
  return (
    <ul className="grid gap-4 w-full">
      {menu.map((menu) => (
        <li key={menu.text} className="flex items-start gap-x-2">
          <span className="w-4 h-4 rounded-full bg-current mt-1"></span>
          {menu.text}
        </li>
      ))}
    </ul>
  )
}

export const PlanContent = () => {
  const [state, setState] = useState(false)
  const [state1, setState1] = useState(false)
  const [state2, setState2] = useState(false)

  return (
    <div className=" flex items-center justify-center px-20 pt-20 ">
      <div className="grid grid-cols-4 gap-4 items-center">
        <div
          className={cn(
            "border-4 border-transparent  custom-ease  p-8 rounded-md  text-purple-700 w-full opacity-0 invisible -translate-x-6",
            state
              ? "border-purple-400 shadow-2xl opacity-100 translate-x-0 visible "
              : ""
          )}
        >
          <Menu menu={middlewareMenu} />
        </div>

        <div
          onClick={() => setState(!state)}
          className="text-purple-800 font-semibold text-xl relative"
        >
          <div className="relative cursor-pointer">
            <Folder className="w-full h-64" strokeWidth={0.2} />
            <span className="absolute inset-0 flex items-center justify-center">
              middleware.ts
            </span>
          </div>
          {state && (
            <ArrowLeftRight className="mx-auto  w-12 h-12 text-current absolute left-0 top-32 b" />
          )}
          <ArrowLeftRight className="mx-auto -rotate-[40deg]  w-12 h-12 text-gray-600 absolute -right-6 top-16 " />
          <ArrowLeftRight className="mx-auto rotate-[40deg]  w-12 h-12 text-gray-600 absolute -right-6 bottom-16 " />
        </div>

        <div>
          <div
            onClick={() => setState1(!state1)}
            className="text-emerald-700 font-semibold text-xl relative"
          >
            <div className="relative cursor-pointer">
              <Folder className="w-full h-64" strokeWidth={0.2} />
              <span className="absolute inset-0 flex items-center justify-center">
                auth.ts
              </span>
            </div>
            {state1 && (
              <ArrowLeftRight className="mx-auto -rotate-45 w-12 h-12 text-current absolute right-6 top-32 b" />
            )}
          </div>
          <ArrowLeftRight className="mx-auto rotate-90 w-12 h-12 text-gray-600" />
          <div
            onClick={() => setState2(!state2)}
            className="text-orange-600 font-semibold text-xl relative"
          >
            <div className="relative cursor-pointer">
              <Folder className="w-full h-64" strokeWidth={0.2} />
              <span className="absolute inset-0 flex items-center justify-center">
                auth.config.ts
              </span>
            </div>
            {state2 && (
              <ArrowLeftRight className="mx-auto rotate-45 w-12 h-12 text-current absolute right-6 top-40 b" />
            )}
            <>
              {state2 && (
                <div className="">
                  <div className="absolute cursor-pointer top-64 left-28">
                    <Folder
                      className="w-full h-60 text-gray-900"
                      strokeWidth={0.2}
                    />
                    <span className="text-foreground absolute inset-0 flex items-center justify-center">
                      next-auth.d.ts
                    </span>
                  </div>
                  <div className="flex items-center w-14 h-14 rounded-full shadow-xl justify-center absolute -right-10 top-64 bg-white z-10 border scale-75">
                    <ArrowLeftRight className="mx-auto -rotate-45 w-8 h-8 text-black  " />
                  </div>

                  <div className="scale-75 flex items-center w-14 h-14 rounded-full shadow-xl justify-center absolute -right-0 top-72 bg-white z-10 border">
                    <ArrowLeftRight className="mx-auto -rotate-45 w-8 h-8 text-black  " />
                  </div>
                  <div className="scale-75 flex items-center w-14 h-14 rounded-full shadow-xl justify-center absolute right-10 top-80 bg-white z-10 border">
                    <ArrowLeftRight className="mx-auto -rotate-45 w-8 h-8 text-black  " />
                  </div>
                </div>
              )}
            </>
          </div>
        </div>

        <div className="mb-auto flex flex-col h-full">
          <div
            className={cn(
              "border-4 border-transparent  custom-ease  p-8 rounded-md  text-emerald-700 w-full opacity-0 invisible -translate-x-6 font-semibold",
              state1
                ? "border-emerald-400 shadow-2xl opacity-100 translate-x-0 visible "
                : ""
            )}
          >
            <Menu menu={authMenu} />
          </div>
          <div
            className={cn(
              "border-4 mt-auto border-transparent  custom-ease  p-8 rounded-md  text-orange-700 w-full opacity-0 invisible -translate-x-6 font-semibold -translate-y-4",
              state2
                ? "border-orange-400 shadow-2xl opacity-100 translate-x-0 visible "
                : ""
            )}
          >
            <Menu menu={configMenu} />
          </div>
        </div>
      </div>
    </div>
  )
}
