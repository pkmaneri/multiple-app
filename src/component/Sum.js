import React, { Component } from "react";


class Sum extends Component {
    state = {
        num1: "1",
        num2: "2",
        result: ""
    }
    handleNum1(e) {
        const num1 = e.target.value;
        this.setState(prevState => {
            return {
                num1: num1,
                num2: prevState.num2,
                result: prevState.result
            }
        })

    }
    handleNum2(e) {
        const num2 = e.target.value;
        this.setState(prevState => {
            return {
                num2: num2,
                num1: prevState.num1,
                result: prevState.result

            }

        })

    }
    handleClick() {
        const num1 = this.state.num1;
        const num2 = this.state.num2;
        const result = parseInt(num1) + parseInt(num2)
        this.setState({
            'result':result
    
        })
            console.log(this.state.result)
    }
    render() {
        return (

            <div className="container">
                <div>
                    <input onChange={this.handleNum1.bind(this)} value={this.state.num1}></input>
                    <input onChange={this.handleNum2.bind(this)} value={this.state.num2}></input>
                    <button onClick={this.handleClick.bind(this)}>Sum</button>
                    <div>
                        {this.state.result}
                    </div>
                </div>
            </div >
        )
    }
}

export default Sum;