import axios from 'axios'
const SET_ITEMS = 'gallery/SET_ITEMS'

const initialState = {
  items: [],
}

const gallery = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload }
    default:
      return state
  }
}

const setItems = payload => ({ type: SET_ITEMS, payload })

export const fetchItems = () => async dispatch => {
  const res = await axios.get(
    'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'
  )
  dispatch(setItems(res.data))
}

export default gallery
