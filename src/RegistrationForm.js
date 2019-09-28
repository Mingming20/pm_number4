import React,{Component} from 'react';
import Dashboard from './Dashboard';

class RegistrationForm extends Component{
    constructor(props){
        super(props)
        this.state={
            FirstName:'',
            LastName:'',
            Address:'',
            Email:'',
            PhoneNumber:'',
            Register: false,

            
        }       
    }
    registerFormHandler=(e)=>{
        const{FirstName,LastName,PhoneNumber,Address,Email}=this.state;
        if(FirstName!=='' || LastName!=="" || Address!=='' || Email!=='' || PhoneNumber!==''){
            this.setState( {Register:true});
        
        }
        else {
            alert('Please fill the from Accordingly! ');
        }
    }

    render(){
        if (!this.state.Register){
            return(
                <div id="top">
                <h1>Log In Form</h1>
                    First Name: 
                    <input type="text" placeholder="Enter Firstname.." onChange={e=>this.setState({FisrtName:e.target.value})}></input><br></br>
                    Last Name: 
                    <input type="text" placeholder="Enter lastname.." onChange={e=>this.setState({LastName:e.target.value})}></input><br></br>
                    Address : 
                    <input type="text" placeholder="Enter Address.." onChange={e=>this.setState({Address:e.target.value})}></input><br></br>
                    Email : 
                    <input type="text" placeholder="Enter email.." onChange={e=>this.setState({Email:e.target.value})}></input><br></br>
                    Phone Number: 
                    <input type="text" placeholder="Enter phone number.." onChange={e=>this.setState({PhoneNumber:e.target.value})}></input><br></br>
                    <button type="button" onClick={e=>this.registerFormHandler(e)}>Register</button>
                </div>
            )
        }
        else{
            return(
                <Dashboard FirstName={this.state.FirstName} LastName={this.state.LastName} Address={this.state.Address} Email={this.state.Email}  PhoneNumber={this.state.PhoneNumber}/>
            )
        } 
    }
}
export default RegistrationForm;