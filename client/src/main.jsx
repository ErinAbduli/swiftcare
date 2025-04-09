import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<AuthContextProvider>
				<App />
				<ToastContainer
					position="top-right"
					autoClose={3000}
					closeOnClick
					pauseOnHover="false"
					theme="light"
				/>
			</AuthContextProvider>
		</BrowserRouter>
	</StrictMode>
);
