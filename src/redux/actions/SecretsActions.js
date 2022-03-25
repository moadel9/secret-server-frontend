import axios from "axios"
import { API } from "../API/api"
import * as secretType from "../constants/secretConstants"

// Add New secret
export const addSecret = (secret) => async (dispatch) => {
  console.log(secret)
  dispatch({ type: secretType.ADD_SECRET_REQUEST })
  try {
    const { data } = await axios.post(`${API}/api/secret`, secret)
    console.log(data)
    dispatch({ type: secretType.ADD_SECRET_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: secretType.ADD_SECRET_FAIL, payload: error.message })
  }
}
///////////////////////////////

// Get All  Gates
export const getSecret = (hash) => async (dispatch) => {
  dispatch({ type: secretType.GET_SECRET_REQUEST })
  try {
    const { data } = await axios.get(`${API}/api/secret?hash=${hash}`)
    dispatch({ type: secretType.GET_SECRET_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: secretType.GET_SECRET_FAIL, payload: error })
  }
}
