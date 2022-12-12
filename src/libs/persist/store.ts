import create from 'zustand'
import { persist } from 'zustand/middleware'

interface MyState {
  fishes: number
  addAFish: () => void
  resetAFish: () => void
}

export const useFishStore = create<MyState>()(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
      resetAFish: () => set({ fishes: 0 })
    }),
    {
      name: 'food-storage', // name of item in the storage (must be unique)
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
      partialize: (state) => ({ fishes: state.fishes }),
    }
  )
)