
import { Component } from "react";


class UserDetails extends Component {
    
    constructor() {
        super();
       this.state = {
        FirstName: "Unknown",
        LastName: "Unknown"
       };
       this.updateFirstName = this.updateFirstName.bind(this);
       this.updateLastName = this.updateLastName.bind(this);
    }

    
     render() {
        return <div >
            
            <label>FirstName</label><input type="text" className="form" id="FirstName" onChange={this.updateFirstName} /><br/><br/>
            <label>LastName</label><input type="text" className="form" id="LastName" onChange={this.updateLastName}/><br/><br/>
           
            <input type="button" className="Button" value="Save" onClick={() =>{
              var f=document.getElementById("FirstName");
              var l=document.getElementById("LastName");
            }}/>
            <br/><br/>
            <b> {this.state.FirstName} {this.state.LastName}</b>
  
        </div>;
    }
}

export default UserDetails;