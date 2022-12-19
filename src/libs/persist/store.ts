import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
interface MyState {
  fishes: number
  addAFish: () => void
  resetAFish: () => void
}

export const useFishStore = create<MyState>()(
  devtools(
    persist(
      (set, get) => ({
        fishes: 0,
        addAFish: () => set((state) => ({fishes: get().fishes + 1}),false,'addAFish'),
        resetAFish: () => set((state)=>({ fishes: 0 }),false,'resetAFish')
      }),
      {
        name: 'food-storage', // name of item in the storage (must be unique)
        getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
        partialize: (state) => ({ fishes: state.fishes }),
      }
    )
  )
)