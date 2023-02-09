import React from "react"
import "../components/styles/App.css"
// import Header from "./Header";
// import List from "./List"
// import Button from "./Button"

// membuat komponen dengan menggunakan class

class App extends React.Component{
    state ={
        name : "Johanes Kristiadi",
        text : ""
    }
    click = () => {
        this.setState({
            name : this.state.text
        })
        this.setState({
            text:""
        })
    }

    change = e=>{
        this.setState({
            text :e.target.value
        })
    }
    render(){
        return(
            <div className="box">
                {/* <Header/>
                <List/>
                <h1>hello World</h1> */}
                <h3>{this.state.name}</h3>
                <input type="text" value ={this.state.text} onChange ={this.change}/>
                <button onClick = {this.click}>Click</button>
                {/* <Button onClick = {this.change}/> */}
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
