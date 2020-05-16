import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';

export default function configureStore() {
  const initialState = {};
  const middleware = [thunk];
  const persistConfig = {
    key: 'adobe',
    storage,
  };

  const reducer = persistCombineReducers(persistConfig, rootReducer);

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  const persistor = persistStore(store);

  return { persistor, store };
}
