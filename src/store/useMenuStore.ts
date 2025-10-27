import { create } from "zustand";
import { persist } from "zustand/middleware";

interface clickMenuStore {
  clickMenu: string;
  setClickMenu(value: string): void;
  type: string;
  setType(value: string): void;
}

export const useMenuStore = create<clickMenuStore>()(
  persist(
    (set) => ({
      clickMenu: "",
      setClickMenu: (value: string) => set({ clickMenu: value }),
      type: "",
      setType: (value: string) => set({ type: value }),
    }),
    {
      name: "clickMenu-store",
    }
  )
);
