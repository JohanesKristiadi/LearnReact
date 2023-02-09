import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js"

// const App = () => {
//     return (
//         <div>
//             <h1>Hello world</h1>
//         </div>
//     );
// };

ReactDOM.render(
    <React.StrictMode>
    <App/>
    </React.StrictMode>,
    document.getElementById("root")
)
