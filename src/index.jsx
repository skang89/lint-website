// import react packages
import React from "react";
import ReactDOM from "react-dom";

// import react components
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";

// import polyfills
import "../node_modules/core-js/modules/es.array.includes";
import "../node_modules/core-js/modules/es.array.fill";
import "../node_modules/core-js/modules/es.string.includes";
import "../node_modules/core-js/modules/es.string.trim";
import "../node_modules/core-js/modules/es.object.values";

// import styles
import "./index.scss";

ReactDOM.render(<App />, document.getElementById("lintWebsite"));

serviceWorker.unregister();
// serviceWorker.register();
