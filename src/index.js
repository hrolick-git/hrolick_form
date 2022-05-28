import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootEl = document.getElementById("md-react-app");
if (rootEl) {
    // const settings = JSON.parse( rootEl.getAttribute( 'data-default-settings' ) );
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        rootEl
    );
}
