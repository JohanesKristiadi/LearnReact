import React from "react"
import Header from "./Header";
import List from "./List"

// membuat komponen dengan menggunakan class

class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <List/>
                <h1>hello World</h1>
            </div>
        )
    }
}

// membuat komponen dengan menggunakan function

// const App = () => {
//     return (
//         <div>
//             <h1>hello world</h1>
//         </div>
//     )
// };

export default App;
