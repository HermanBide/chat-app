import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist/es/persistStore";
import { persistStore } from "redux-persist";
import store from "./store";
// import PersistStore from "redux-persist/lib/persistStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

const persistedStore = persistStore(store);

root.render(
  <React.StrictMode> 
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </PersistGate> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//    <BrowserRouter>
//     <App />
//      </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// )