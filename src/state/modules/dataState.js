import {
  GET_DATA,
  RECEIVE_DATA,
  DATA_ERROR
} from '../actions/getDataActions'

export const defaultState = {
  data: [],
  dataPending: false,
  errors: {}
}

export const dataState = (state = defaultState, { type, payload }) => {
  console.log(type)
  console.log(payload)
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        dataPending: true
      }
    case RECEIVE_DATA:
      return {
        ...state,
        data: [...payload],
        dataPending: false
      }
    case DATA_ERROR:
      return {
        ...state,
        dataPending: false,
        errors: { ...payload }
      }
    default:
      return { ...state }
  }
}

export default dataState
