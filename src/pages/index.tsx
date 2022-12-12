import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useStore } from '../libs/store'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const id = useStore((state) => state.id)
  const setId = useStore((state) => state.setId)
  const removeId = useStore((state) => state.removeId)
  const [localId, setLocalId] = useState("")
  
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
    </>
  )
}

export default Home
