import { createAction } from 'redux-actions'
import fetch from 'cross-fetch'

export const GET_DATA = 'DATA_STATE/GET_DATA'
export const RECEIVE_DATA = 'DATA_STATE/RECEIVE_DATA'
export const DATA_ERROR = 'DATA_STATE/DATA_ERROR'

export const getData = createAction(GET_DATA)
export const receiveData = createAction(RECEIVE_DATA)
export const dataError = createAction(DATA_ERROR)

export const fetchData = () => {
  return dispatch => {
    dispatch(getData([]))
    fetch('http://localhost:8084/api/1/', {
      method: 'post',
      body: {
        metadata: { source: 'festivalofcode' },
        account: 313870,
        query: 'FROM SubQuery SELECT percentile(wallClockTime, 95) SINCE 1 week ago'
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error
        }
        dispatch(receiveData(res))
        return res
      })
      .catch(error => {
        dispatch(dataError(error))
      })
  }
}
