import { Component } from "react";
import React from "react";
import axios from "axios";
import './Form.css';

class Create extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            id:'',
            name:'',
            member:'',
            phone:'',
            email:'',
            // Password:'',
        }
    }
    handleidChange= (event)=>{
        this.setState({id: event.target.value});
    };
    handlenameChange= (event)=>{
        this.setState({name: event.target.value});
    };
    handlememberChange=(event)=>{
        this.setState({member: event.target.value});
    };
    handlephoneChange=(event)=>{
        this.setState({phone: event.target.value});
    };
    handleemailChange=(event)=>{
        this.setState({email: event.target.value});
    };
    // handlePasswordChange=(event)=>{
    //     this.setState({Password: event.target.value});
    // };

    handleSubmit=(event)=>{
        event.preventDefault();
        const data = {
            id: this.state.id,
            name: this.state.name,
            member: this.state.member,
            phone: this.state.phone,
            email: this.state.email
            // Password: this.state.Password
        };

    axios.post('http://localhost:2024/addDetails', data);
    };

render(){
    return(
        <form onSubmit={this.handleSubmit} className="Booking" id="inputdata" align="center">
            <h1>Hotel Liemerdian</h1>
            <h2>Booking</h2>
        <label className="booking">id</label><br/>
        <input
            className="Booking"
            type="text"
            value={this.state.id}
            onChange={this.handleidChange}>
        </input><br></br>
        <label className="Booking">name</label><br></br>
        <input
            className="Booking"
            type="text"
            value={this.state.name}
            onChange={this.handlenameChange}
        />
        <br></br>
        <label className="Booking">member</label><br></br>
        <input
            className="Booking"
            type="number"
            value={this.state.member}
            onChange={this.handlememberChange}
            />
        <br></br>
         <label className="Booking">phone</label><br></br>
        <input
            className="Booking"
            type="text"
            value={this.state.phone}
            onChange={this.handlephoneChange}
            /><br></br>
        <label className="Booking">email</label><br></br>
        <input
            className="Booking"
            type="email"
            value={this.state.email}
            onChange={this.handleemailChange}
            /><br></br>
        
        <button className="Booking" type="submit">
            Submit
        </button>
        </form>
    )
}
}
export default Create;