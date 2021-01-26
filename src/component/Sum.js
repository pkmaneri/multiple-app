import React, { Component } from "react";

class Sum extends Component {
    state = {
        num1: "",
        num2: "",
        result: ""
    }
    handleNum1(e) {
        const num1 = e.target.value;
        this.setstate(prevState => {
            return {
                num1: num1,
                num2: prevState.num2,
                result: prevState.resu

            }
        })
    }
    handleNum2(e) {
        const num2 = e.target.value;
        this.setstate(prevState => {
            return {
                num2: num2,
                num1: prevState.num1,
                result: prevState.resu

            }
        })
    }
    handleClick() {
        const num1 = this.state.num1;
        const num2 = this.state.num2;
        const result = parseInt(num1) + parseInt(num2)
        this.setstate({
            result: result
        })

    }
    render() {
        return (
            <>
                <div>
                    <input onChange={this.handleNum1.bind(this)} value={this.state.num1}>Num1</input>
                    <input onChange={this.handleNum2.bind(this)} value={this.state.num2}>Num2</input>
                    <button onClick={this.handleClick.bind(this)}>Sum</button>
                </div>


            </>
        )
    }
}

export default Sum;