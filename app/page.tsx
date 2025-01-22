import { folderStructure } from "./data"
import { RenderFolder } from "./render-folder"

export default function Home() {
  return (
    <div className="p-8 border mb-auto mt-10 rounded-md w-full max-w-[444px] mx-auto shadow-xl">
      <h1 className="text-2xl font-semibold tracking-tighter">
        Project Folder
      </h1>
      <div className="menu1">
        <RenderFolder structure={[folderStructure]} />
      </div>
    </div>
  )
}
