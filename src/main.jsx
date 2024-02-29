import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import IndexOfObject from "./../SoanDe/src/utils/IndexOfObject";
Array.prototype.IndexOfObject = IndexOfObject;

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<div className="left-overlay"></div>
		<App />
		<div className="right-overlay"></div>
	</Provider>
);
