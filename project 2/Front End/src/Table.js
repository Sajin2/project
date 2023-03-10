import axios from "axios";
import React from "react";
import { Component } from "react";
class Table1 extends Component{
    state={
    data:[]
    }
    componentDidMount(){
        axios.get('http://localhost:2024/getDetails')
        .then(response=>{
            this.setState({data:response.data});
        })
        .catch(error =>{
            console.log(error);
        });
    }
    deleteData(id, d){
        axios.delete(`http://127.0.0.1:2024/delete/${id}`)
        .then(response => {
            console.log(response);

            const data = this.state.data.filter(item => item.id !== id);
            this.setState({data});
        })
    }
    updateData(id, d){
        axios.update(`http://127.0.0.1:2024/UpdateDetails/${id}`)
            .then(response => {
                console.log(response);

                const data = this.state.data.filter(item => item.id !== id);
                this.setState({data});
            })
    }
    render(){
        return(
            <table border={1} align="center">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>member</th>
                        <th>phone</th>
                        <th>email</th>
                        {/* <th>Password</th> */}
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.member}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="Booking" onClick={(d) => this.deleteData(user.id,d)}>Delete</button>
                            </td>
                            <td>
                                <button className="Booking" onClick={(d) => this.updateData(user.id,d)} >Update</button>
                            </td>

                            {/* <td>{user.Password}</td> */}
                            {/* <td>{user.year}</td> */}
                        </tr>

                    ))}
                </tbody>
            </table>
        );
    }
}
export default Table1;