import React from "react"
import { useDispatch } from "react-redux"

const HomeCards = ({ selectedSegment, setSelectedSegment }) => {
  const dispatch = useDispatch()

  return (
    <div className={selectedSegment === "home" ? "options show" : "options"}>
      <div
        onClick={() => {
          setSelectedSegment("add")
          dispatch({ type: "RESETSECRET" })
        }}
        className="option"
      >
        <h2> Add Your Secret</h2>
        <i className="fa-solid fa-lock fa-3x"></i>
      </div>
      <div
        onClick={() => {
          setSelectedSegment("search")
          dispatch({ type: "RESETSECRET" })
        }}
        className="option"
      >
        <h2> Get Your Secret</h2>
        <i className="fa-solid fa-magnifying-glass fa-3x"></i>
      </div>
    </div>
  )
}

export default HomeCards
