import React,{Component} from 'react';

class Dashboard extends Component{
    render()
    {
        return (
            <div>
                <h1>This shows your Businesscard </h1>
                <h1>Name: {this.props.FirstName} {this.props.LastName}</h1>
                <h1>Address: {this.props.Address}</h1>
                <h1>Email: {this.props.Email}</h1>
                <h1>Phone Number: {this.props.PhoneNumber}</h1>
            </div>
        )
    }
}
export default Dashboard;