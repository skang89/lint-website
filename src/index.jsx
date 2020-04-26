// import react packages
import React from "react";
import ReactDOM from "react-dom";

// import react components
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("lintWebsite"));

serviceWorker.unregister();
// serviceWorker.register();
