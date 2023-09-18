import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store";
ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<div className="left-overlay"></div>
		<App />
		<div className="right-overlay"></div>
	</Provider>
);
