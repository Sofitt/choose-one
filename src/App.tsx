import { useState } from 'react'
// import Update from '@/components/update'
import Dropzone from "@/components/dropzone/dropzone";
import MoFace from "@/components/mo-face/mo-face";
import './App.scss'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <MoFace />
      {/*<Dropzone />*/}
      {/*<div className='card'>*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*</div>*/}

      {/*<Update />*/}
    </div>
  )
}

export default App
