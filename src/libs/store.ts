import create from "zustand"

type Store = {
  id: string;
  setId: (id: string)=>void;
  removeId: ()=>void;
}

export const useStore = create<Store>((set => ({
  id: "1",

  setId: (id: string) => set(() => {
    return {id: id}
  }),

  removeId: ()=>set(() => {
    return {id: "1"}
  })
})))