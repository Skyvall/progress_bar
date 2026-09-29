import ProgressBar from './ProgressBar'
import { useState } from "react"




export default function App() {
  const [progress, setProgress] = useState(0)


function updateProgress() {
  setProgress((prevProgress) => Math.min(prevProgress + 10, 100))
}


  return (<div>
    <ProgressBar progress={progress} />
    <button onClick={updateProgress}>
    Increase Progress
    </button>
  </div>)
}