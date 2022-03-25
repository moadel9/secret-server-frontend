import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSecret } from "../redux/actions/SecretsActions"
import ReactLoading from "react-loading"

const SearchInputs = ({ selectedSegment, setSelectedSegment }) => {
  const [hash, setHash] = useState("")
  const [hashVal, setHashVal] = useState(false)
  const dispatch = useDispatch()
  const { secret, loading, error } = useSelector((state) => state.secretReducer)
  const submit = () => {
    setHashVal(false)
    if (!hash) {
      setHashVal(true)
      return
    }
    dispatch(getSecret(hash))
    clear()
  }
  const clear = () => {
    setHash("")
    setHashVal(false)
  }
  return (
    <div className={selectedSegment === "search" ? "addForm show" : "addForm"}>
      <div className="innerForm search">
        {loading ? (
          <>
            <ReactLoading type="bars" width={100} />
            <p>Saving</p>
          </>
        ) : secret?.secret && Object.keys(secret.secret).length > 0 ? (
          <>
            <h2>Your Secret Is</h2>
            <p>{secret.secret.secret}</p>

            <div>
              <button
                onClick={() => {
                  setSelectedSegment("home")
                }}
              >
                Done
              </button>
            </div>
          </>
        ) : (
          <>
            <h2>Search For Secret</h2>
            <div className="inputs">
              <label>Secret Hash</label>
              <input value={hash} onChange={(e) => setHash(e.target.value)} className="smallInput" type="number" placeholder="Hash" />
              {hashVal && <p className="error">please enter hash value</p>}
              {error && !hashVal && <p className="error">{error.response.data}</p>}
            </div>

            <div>
              <button onClick={submit}>Search Secret</button>
              <button
                onClick={() => {
                  setSelectedSegment("home")
                  clear()
                }}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default SearchInputs
