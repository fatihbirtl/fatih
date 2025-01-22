import { create } from "zustand"

interface UseSidebarStore {
  toggleSidebar: () => void
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export const useSidebar = create<UseSidebarStore>((set) => ({
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
}))
