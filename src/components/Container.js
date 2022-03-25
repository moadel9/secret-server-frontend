import React, { useState } from "react"
import AddInputs from "./AddInputs"
import HomeCards from "./HomeCards"
import SearchInputs from "./SearchInputs"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Container = () => {
  const [selectedSegment, setSelectedSegment] = useState("home")

  return (
    <div className="pageContainer">
      <HomeCards selectedSegment={selectedSegment} setSelectedSegment={setSelectedSegment} />
      <AddInputs selectedSegment={selectedSegment} setSelectedSegment={setSelectedSegment} />
      <SearchInputs selectedSegment={selectedSegment} setSelectedSegment={setSelectedSegment} />
    </div>
  )
}

export default Container
