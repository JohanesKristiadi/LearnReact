import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"

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
