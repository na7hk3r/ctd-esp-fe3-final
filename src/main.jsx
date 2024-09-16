import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import DoctorContext from "./Components/utils/DoctorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<DoctorContext>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</DoctorContext>
	</React.StrictMode>
);
