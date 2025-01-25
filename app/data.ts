export const folderStructure = {
  name: "app",
  type: "folder",
  children: [
    { name: "layout.tsx", type: "file" },
    { name: "globals.css", type: "file" },
    { name: "favicon.ico", type: "file" },
    {
      name: "auth",
      type: "folder",
      color: "text-emerald-600",
      children: [
        {
          name: "layout.tsx",
          type: "file",
        },
        {
          name: "signin",
          type: "folder",
          children: [
            {
              name: "page.tsx",
              type: "file",
            },
          ],
        },
        {
          name: "signup",
          type: "folder",
          children: [
            {
              name: "page.tsx",
              type: "file",
            },
          ],
        },
      ],
    },
    {
      name: "(public)",
      type: "folder",
      color: "text-purple-700",
      children: [
        { name: "layout.tsx", type: "file" },
        {
          name: "(routes)",
          type: "folder",
          children: [
            {
              name: "about",
              type: "folder",
              children: [{ name: "page.tsx", type: "file" }],
            },
            {
              name: "blog",
              type: "folder",
              children: [{ name: "page.tsx", type: "file" }],
            },
            { name: "page.tsx", type: "file" },
          ],
        },
      ],
    },
    {
      name: "dashboard",
      type: "folder",
      color: "text-red-700",
      children: [
        { name: "layout.tsx", type: "file" },
        {
          name: "(routes)",
          type: "folder",
          children: [
            {
              name: "menus",
              type: "folder",
              children: [{ name: "page.tsx", type: "file" }],
            },
            {
              name: "pages",
              type: "folder",
              children: [{ name: "page.tsx", type: "file" }],
            },
            {
              name: "posts",
              type: "folder",
              children: [{ name: "page.tsx", type: "file" }],
            },
            {
              name: "sliders",
              type: "folder",
              children: [{ name: "page.tsx", type: "file" }],
            },
            { name: "page.tsx", type: "file" },
          ],
        },
      ],
    },
  ],
}
