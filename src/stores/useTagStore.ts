import { create } from 'zustand'
interface TagState {
    tagActive: string
    setActiveTag: (value: string) => void
}
export const useTagStore = create<TagState>((set) => ({
    tagActive: "",
    setActiveTag: (value: string) => set(() => ({ tagActive: value }))
}))