"use client"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
export default function Home() {
  const [state, setState] = useState<number>(1)
  const handleIncrement = () => {
    setState((prev) => Math.min(prev + 1, 7)) // En fazla 10
  }
  const handleDecrement = () => {
    setState((prev) => Math.max(prev - 1, 1)) // En az 0
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
    <div className="lg:grid ">
      {state !== 0 && (
        <div className="fixed top-2 left-[50%] w-12 h-12 rounded-full -ml-6 p-4 bg-black text-white mx-auto right-auto z-50   border-emerald-700 shadow-2xl flex items-center justify-center">
          {state}
        </div>
      )}
      <div className="fixed bottom-2 left-[50%] w-40 -ml-20 p-4 bg-white mx-auto right-auto z-50   rounded-md shadow-2xl flex items-center justify-between">
        <button onClick={() => handleDecrement()}>Prev</button>
        <button onClick={() => handleIncrement()}>Next</button>
      </div>
      <div className="lg:min-h-screen bg-slate-200 p-10 space-y-4 pb-[500px] max-w-[1300] mx-auto w-full">
        <h2 className="sticky top-2 z-10 text-4xl   p-4 bg-emerald-600 text-white shadow-lg rounded-md border">
          First Setup
        </h2>
        <div
          className={cn(
            "p-4 py-12 bg-white rounded-md space-y-2 text-lg  ",
            state <= 0 ? "opacity-0" : "opacity-100",
            state === 1 && " border-2 border-emerald-600 bg-emerald-50/100"
          )}
        >
          <h2 className="text-4xl font-semibold">
            Welcome to the Ultimate Next.js 15 Full Stack Course!
          </h2>
          <p>
            I’m Fatih, a senior web developer and trainer. I’ll guide you step
            by step and answer your questions.
          </p>
          <p>
            Follow my tools and steps for a smooth experience. Let’s get
            everything ready before we start coding!
          </p>
        </div>
        <div
          className={cn(
            "p-4 py-12 bg-white rounded-md space-y-2 text-lg  ",
            state <= 1 ? "opacity-0" : "opacity-100",
            state === 2 && " border-2 border-emerald-600 bg-emerald-50/100"
          )}
        >
          <p>
            Throughout this course, I’ll use VSCode, and I highly recommend it.
          </p>
          <p>
            You can use any editor, but if you don’t have VSCode yet, download
            it at code.visualstudio.com.
          </p>
          <p>
            Install VsCode for your operating system, and once installed, open
            VSCode to get started.
          </p>
        </div>

        <div
          className={cn(
            "p-4 py-12 bg-white rounded-md space-y-2 text-lg    mx-auto",
            state <= 2 ? "opacity-0" : "opacity-100",
            state === 3 && " border-2 border-emerald-600 bg-emerald-50/100"
          )}
        >
          <p>We need Node.js to build and run the latest Next.js app.</p>
          <p>
            Next.js requires Node.js 18.18 or later, but I recommend the latest
            LTS version for better security and stability.
          </p>
          <p className="font-semibold">Open a new terminal on VsCode</p>
          <ul className="list-disc list-inside text-left ">
            <li>On Windows, press Ctrl + J.</li>
            <li> On Mac, press Command + J.</li>
            <li>
              or go to the view menu at the top and click on terminal and open a
              new terminal.
            </li>
          </ul>
        </div>
        <div
          className={cn(
            "p-4 py-12 bg-white rounded-md space-y-2 text-lg    mx-auto",
            state <= 3 ? "opacity-0" : "opacity-100",
            state === 4 && " border-2 border-emerald-600 bg-emerald-50/100"
          )}
        >
          <p className="font-semibold">
            If Node.js is already installed on your computer, let’s check the
            version. in your terminal, type;
          </p>
          <p>
            <span className="font-semibold">node -v //</span> here is my node.js
            version. I’m using the latest version.
          </p>
          <p>
            <span className="font-semibold">npm -v //</span> and here is my npm
            version. Since npm is automatically installed with Node.js, you do
            not need to install npm separately.
          </p>
          <p className="font-semibold">
            You should see the version numbers for this course.
          </p>
          <p>
            Next.js requires 18.18 or later versions of node.js. But I recommend
            using the LTS version of Node.js
          </p>
          <p>
            If you see errors instead of version numbers or your node.js version
            is too old; Go to nodejs.org and go to the download section.
          </p>
          <p> Download and install the LTS version with npm.</p>
          <p>
            After installing Node.js , You need to restart your VsCode. Close
            and reopen your VsCode.
          </p>
        </div>
        <div
          className={cn(
            "p-4 py-12 bg-white rounded-md space-y-2 text-lg    mx-auto",
            state <= 4 ? "opacity-0" : "opacity-100",
            state === 5 && " border-2 border-emerald-600 bg-emerald-50/100"
          )}
        >
          <p>
            Open the terminal and run
            <span className="font-semibold">node -v</span> and <b>npm -v</b> to
            check their versions. If they are up-to-date, you’re ready to create
            a Next.js app with <b>npx create-next-app@latest.</b>
          </p>
          <p>
            This command uses <b>npx</b> (a tool in npm) to run packages without
            global installation and generates the
            <b>latest Next.js project setup.</b>
          </p>
        </div>
        <div
          className={cn(
            "p-4 py-12 bg-white rounded-md space-y-2 text-lg    mx-auto",
            state <= 5 ? "opacity-0" : "opacity-100",
            state === 6 && " border-2 border-emerald-600 bg-emerald-50/100"
          )}
        >
          <p>
            I am using <b>npm</b> for this course because
            <b>React 19 and Next.js 15</b> are newly stable, and some libraries
            may have <b>compatibility issues</b>.
          </p>
          <p>
            Npm provides warnings like <b>--legacy-peer-deps</b>, which help
            identify problems early.
          </p>
          <p>
            We will use <b>--legacy-peer-deps</b> as its safer and works better
            with older versions.
          </p>
        </div>
        <div
          className={cn(
            "p-4 py-12 bg-white rounded-md space-y-2 text-lg    mx-auto",
            state <= 6 ? "opacity-0" : "opacity-100",
            state === 7 && " border-2 border-emerald-600 bg-emerald-50/100"
          )}
        >
          <p>
            <b>
              My advice: Use the same tools and settings I do, including npm,
              for a smooth coding experience.
            </b>
          </p>
          <p>
            If you prefer pnpm or yarn, feel free to use them. However, cloning
            course projects might cause node_modules conflicts when using pnpm.
          </p>
          <p>
            {" "}
            To avoid issues and ensure everything works as intended, follow my
            steps and tools exactly.
          </p>
          <p className="text-3xl">
            <b> Stick to the process to save time and effort!</b>
          </p>
          <p className="text-xl ">
            In the next video, we’ll create a Next.js 15 app using{" "}
            <b>npx create-next-app@latest.</b>
          </p>
          <p className="text-3xl">
            <b> See you in the next lecture!</b>
          </p>
        </div>
      </div>
    </div>
  )
}
