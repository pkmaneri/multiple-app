import React, { Component } from "react";

class EmployeeDirectory extends Component {

    state = {
        "empData":
            [{ "id": 1, "first_name": "Ross", "last_name": "Wormell", "email": "rwormell0@eepurl.com", "gender": "Genderfluid", "ip_address": "156.32.199.226" },
            { "id": 2, "first_name": "Crawford", "last_name": "Chalker", "email": "cchalker1@princeton.edu", "gender": "Genderfluid", "ip_address": "24.202.103.148" },
            { "id": 3, "first_name": "Maressa", "last_name": "Oneill", "email": "moneill2@ebay.co.uk", "gender": "Agender", "ip_address": "153.188.16.152" },
            { "id": 4, "first_name": "Rey", "last_name": "Hardeman", "email": "rhardeman3@patch.com", "gender": "Non-binary", "ip_address": "5.23.40.198" },
            { "id": 5, "first_name": "Celia", "last_name": "Keilty", "email": "ckeilty4@yahoo.com", "gender": "Polygender", "ip_address": "244.99.235.73" },
            { "id": 6, "first_name": "Dorian", "last_name": "Latta", "email": "dlatta5@theguardian.com", "gender": "Bigender", "ip_address": "130.224.21.88" },
            { "id": 7, "first_name": "Wernher", "last_name": "Immings", "email": "wimmings6@google.cn", "gender": "Male", "ip_address": "29.74.229.165" },
            { "id": 8, "first_name": "Euell", "last_name": "Maytom", "email": "emaytom7@yandex.ru", "gender": "Non-binary", "ip_address": "153.133.28.124" },
            { "id": 9, "first_name": "Rubetta", "last_name": "Gryglewski", "email": "rgryglewski8@va.gov", "gender": "Genderfluid", "ip_address": "9.33.172.246" },
            { "id": 10, "first_name": "Madelyn", "last_name": "Colaco", "email": "mcolaco9@dyndns.org", "gender": "Non-binary", "ip_address": "22.11.68.193" }]

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