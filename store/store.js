import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import gallery from './reducers/gallery'

const rootReducer = combineReducers({ gallery })

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
