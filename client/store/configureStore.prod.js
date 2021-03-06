import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import reducer from '../reducers'

const finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
