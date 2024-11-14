import { useEffect, useState } from "react"
import "./Counter.css"

export default function Counter() {
  useEffect(() => {
    alert("Hello, This is a counter by React")
  }, [])

  const [count, setCount] = useState(0)
  const [decBtn, setDecBtn] = useState(false)
  const [purple, setPurple] = useState(false)
  const [yellow, setYellow] = useState(false)
  const [pink, setPink] = useState(false)
  const [blue, setBlue] = useState(false)

  const increase = () => {
    if (count >= 0 && count < 10) {
      setCount(count + 1)
    }
    else if (count >= 10 && count < 100) {
      setCount(count + 10)
    }
    else if (count >= 100 && count < 1000) {
      setCount(count + 100)
    }
    else if (count == 1000) {
      setDecBtn(true)
    }
  }

  const decrease = () => {
    if (count <= 1000 && count > 100) {
      setCount(count - 100)
    }

    else if (count <= 100 && count > 10) {
      setCount(count - 10)
    }
    else if (count <= 10 && count > 0) {
      setCount(count - 1)
    }
    else if (count == 0) {
      setDecBtn(false)
    }
  }

  useEffect(() => {
    if (count == 10) {
      alert("The Count is 10")
    }
    else if (count == 100) {
      alert("The Count is 100")
    }
    else if (count == 1000) {
      alert("The Count is 1000")
    }
  }, [count])

  useEffect(() => {
    if (count >= 0 && count < 10) {
      setPurple(true)
      setPink(false)
      setBlue(false)
      setYellow(false)
    }
    else if (count >= 10 && count < 100) {
      setYellow(true)
      setPurple(false)
      setPink(false)
      setBlue(false)
    }
    else if (count >= 100 && count < 1000) {
      setPink(true)
      setYellow(false)
      setPurple(false)
      setBlue(false)
    }
    else if (count >= 1000) {
      setBlue(true)
      setPink(true)
      setYellow(false)
      setPurple(false)
    }
  })

  const reset = () => {
    setCount(0)
  }

  return (
    <>
      <div className={`counter 
        ${purple ? "purple" : ""}
        ${yellow ? "yellow" : ""}
        ${pink ? "pink" : ""}
        ${blue ? "blue" : ""}`}>
        <h1> Counter </h1>
        <span className="count"> {count} </span>
        <div className="counter-input">
          {decBtn &&
            <button onClick={decrease}> - </button>
          }
          <button onClick={increase}> + </button>
        </div>
        <button
          className="reset"
          onClick={reset}>
          Reset
        </button>
      </div>
    </>
  )
}
