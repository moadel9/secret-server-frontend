import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addSecret } from "../redux/actions/SecretsActions"
import ReactLoading from "react-loading"

const AddInputs = ({ selectedSegment, setSelectedSegment }) => {
  const [newSecret, setNewSecret] = useState("")
  const [expiryTime, setExpiryTime] = useState(0)
  const [secretVal, setSecretVal] = useState(false)
  const [expVal, setExpVal] = useState(false)
  const dispatch = useDispatch()
  const { secret, loading } = useSelector((state) => state.secretReducer)

  ///submmition
  const submit = () => {
    setSecretVal(false)
    setExpVal(false)
    if (!newSecret) {
      setSecretVal(true)
      return
    }
    if (expiryTime === "") {
      setExpVal(true)
      return
    }
    dispatch(addSecret({ secret: newSecret, seconds: parseInt(expiryTime) }))
    clear()
  }
  const clear = () => {
    setNewSecret("")
    setExpiryTime(0)
    setSecretVal(false)
    setExpVal(false)
  }

  return (
    <div className={selectedSegment === "add" ? "addForm show" : "addForm"}>
      <div className="innerForm">
        {loading ? (
          <>
            <ReactLoading type="bars" width={100} />
            <p>Saving</p>
          </>
        ) : secret?.secret && Object.keys(secret.secret).length > 0 ? (
          <>
            <h2>Your Secret Hash Is</h2>
            <h2>{secret.secret.hash}</h2>

            <button
              onClick={() => {
                setSelectedSegment("home")
                clear()
              }}
            >
              Done
            </button>
          </>
        ) : (
          <>
            <h2>Add Your Secret</h2>
            <div className="inputs">
              <label>Your secret</label>
              <input onChange={(e) => setNewSecret(e.target.value)} value={newSecret} type="text" placeholder="please enter your secret" />
              {secretVal && <p className="error">please enter your secret</p>}
              <label>Expiry time</label>
              <div>
                <input
                  onChange={(e) => setExpiryTime(e.target.value)}
                  value={expiryTime}
                  className="smallInput"
                  type="number"
                  placeholder="time in seconds"
                />
                <span>seconds</span>
              </div>
              <p className="hint">Note: zero means no expiry</p>
              {expVal && <p className="error">please enter expiry time</p>}
            </div>
            <div>
              <button onClick={submit}>Save Secret</button>
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

export default AddInputs
