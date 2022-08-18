import React, { Component } from "react"; 
import './MyCounter.css'






class MyCounter extends Component{  
    constructor(){
        super()
        // this.state=0 OR
        this.state ={
            value: 0,
        };

    }
    render(){
        return(
            <div className="container">
                <h1>COUNTER</h1>
                <h2>{this.state.value}</h2>
                <div className="button">
                    <button id="button1" onClick ={() =>this.setState({value: this.state.value +1})}>Increase</button>&nbsp;&nbsp;&nbsp;
                    <button id="button2" onClick ={() =>this.setState({value: this.state.value -1})}>Decrease</button>
                </div>
            </div>

              
        )
    }

}

export default MyCounter;