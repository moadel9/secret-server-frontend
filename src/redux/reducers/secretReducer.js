import * as secretType from "../constants/secretConstants"

export const secretReducer = (state = { loading: false, secret: {} }, action) => {
  switch (action.type) {
    // add secret
    case secretType.ADD_SECRET_REQUEST:
      return { loading: true }
    case secretType.ADD_SECRET_SUCCESS:
      return { loading: false, secret: action.payload }
    case secretType.ADD_SECRET_FAIL:
      return { loading: false, error: action.payload }

    // get secret
    case secretType.GET_SECRET_REQUEST:
      return { loading: true }
    case secretType.GET_SECRET_SUCCESS:
      return { loading: false, secret: action.payload }
    case secretType.GET_SECRET_FAIL:
      return { loading: false, error: action.payload }
    case "RESETSECRET": {
      return { loading: false }
    }

    default:
      return state
  }
}
