import "./index.css";
import { Toaster } from "react-hot-toast";
import { createRoot } from "react-dom/client";  // Update the import
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.jsx";
import store from "./Redux/store.js";

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </Provider>
);
