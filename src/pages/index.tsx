import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useFishStore } from '../libs/persist/store'
import { Counter } from '../libs/redux/features/Counter'
import { useStore } from '../libs/store'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const id = useStore((state) => state.id)
  const setId = useStore((state) => state.setId)
  const removeId = useStore((state) => state.removeId)
  const [localId, setLocalId] = useState("")

  const fishes = useFishStore((state) => state.fishes)
  const addAFish = useFishStore((state) => state.addAFish)
  const resetAFish = useFishStore((state) => state.resetAFish)
    
  return (
    <>
      <div>
        <div>
          zustand id:{id}
        </div>
        <div>
          local id: {localId}
        </div>
      </div>
      <input onChange={(e) => setLocalId(e.target.value)} />
      <div>
        <button onClick={()=>{
          setId(localId)
        }}>setId</button>
        <button onClick={()=>{
          removeId()
        }}>removeId</button>
      </div>
      <div suppressHydrationWarning>
        fishes: {fishes}
      </div>
      <div>
        <button onClick={()=>{
          addAFish()
        }}>add A Fish</button>
      </div>
      <div>
        <button onClick={()=>{
          resetAFish()
        }}>reset A Fish</button>
      </div>
      <div>
        Redux
        <Counter />
      </div>
    </>
  )
}

export default Home
