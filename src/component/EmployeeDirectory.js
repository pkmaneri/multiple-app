import React, { Component } from "react";

class EmployeeDirectory extends Component {

    state = {
        "empData": []
    }
    componentDidMount() {
        const url = 'https://my.api.mockaroo.com/userdatajson.json?key=11d947a0';
        fetch(url)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({ empData: result });
            });
    }


    handleRemove(i) {
        let empData = [...this.state.empData];
        empData.splice(i, 1)
        this.setState({
            empData: empData

        })
    };



    render() {
        return (
            <table className="table">
                <thead>
                    <tr >
                        <th scope="col">id</th>
                        <th scope="col">first_name</th>
                        <th scope="col">last_name</th>
                        <th scope="col">email</th>
                        <th scope="col">gender</th>
                        <th scope="col">ip_address</th>
                    </tr>
                    {this.state.empData.map((emp, i) => {
                        return (
                            <tr key={i}>
                                <td> {emp.id}</td>
                                <td >{emp.first_name} </td>
                                <td>{emp.last_name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.gender}</td>
                                <td>{emp.ip_address}</td>
                                <button onClick={this.handleRemove.bind(this, i)}>x</button>
                            </tr>
                        )
                    })
                    }

                </thead>
            </table>
        )
    }
}
export default EmployeeDirectory;