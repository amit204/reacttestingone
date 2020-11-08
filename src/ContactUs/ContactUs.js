import React from 'react';
import './ContactUs.css';

class ContactUs extends React.Component {
  // state = {
  //   emailaddress: "", 
  //   password: "", 
  // }
  constructor(props) {
    super(props);
    this.state = {
        emailaddress: "", 
        password: "", 
        cpytext: "",
        selectdrop:"",
        optradio:"",
        optarrs:"",
        emailaddressValid: false, 
        passwordValid: false, 
        cpytextValid: false,
        optarrsValid: false,
        formErrors: {
          emailaddress: "", 
          password: "",
          cpytext:"",
          optarrs:""
        }, 
        
      }
      
  }
  abc = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value})
  
    }
    xyz = (e) =>{
      e.preventDefault();
      const email = this.state.emailaddress;
      const password = this.state.password;
      const cpytext = this.state.cpytext;
      const  optarrs = this.state.optarrs;
      let fieldValidationErrors = this.state.formErrors;
      let emailaddressValid = this.state.emailaddressValid;
      let passwordValid = this.state.passwordValid;
      alert(optarrs);
      if (email.length > 0){
        emailaddressValid = email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        fieldValidationErrors.emailaddress = emailaddressValid ? "" : " is inValid!";
      }
      else{
        fieldValidationErrors.emailaddress = "email required"
      }
      if (password.length > 0){
        passwordValid = password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
        fieldValidationErrors.password = passwordValid ? "" : " is inValid!";
      }
      else{
        fieldValidationErrors.password = "password required"
      }
      if (cpytext.length > 0){
       
      }
      else{
        fieldValidationErrors.cpytext = "name required"
      }
      if (optarrs.length > 0){
       
      }
      else{
        fieldValidationErrors.optarrs = "checkbox required"
      }
      this.setState({
        formErrors: fieldValidationErrors, 
        emailaddressValid: emailaddressValid, 
        passwordValid: passwordValid
      });
    }
   
  render() {
    return(
      <div className = "container">
        <div className = "row">
          <div className = "col-sm-12">
            <h1>Contact Us Page</h1>

            <hr />

            <p>A significant reason you should book with Yatra is the availability of hotels across categories and budgets. Yatra's extensive filters let you choose from varying price range, for instance, between INR1000 to 2000, then INR 2000 to 4000 and so on. , South Jaipur, North Jaipur among others. Not to mention, an amenity-wise search is another way of landing a hotel of your choice, for example you are travelling with children and you select the option 'suitable for children' to get a more appropriate result.</p>
          </div>
        </div>

      <div className="row">
        <div className="col-md-5">
        {/* <form name="contact">
        <div className="form-group">
          <label for="emailaddress">Email address</label>
          <input type="email" className="form-control" id="emailaddress" aria-describedby="emailHelp" placeholder="Enter email" name="emailaddress" />
          </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" name="password"/>
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
        </form> */}
          <form name = "fv" onSubmit = {this.xyz}>
              <table className = "table">
                <tr>
                  <td>Email Address</td>
                  <td>
                    <input 
                      type = "text" 
                      name = "emailaddress" 
                      className = "form-control" 
                      value = {this.state.emailaddress}
                      onChange={this.abc}
                       
                      placeholder = "richard@gmail.com" />

                  </td>
                  <td>
                 <p>{this.state.formErrors.emailaddress.length > 0 ? this.state.formErrors.emailaddress :"" }</p>
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>
                    <input 
                      type = "password" 
                      name = "password" 
                      className = "form-control" 
                       value ={this.state.password}
                      onChange={this.abc}
                      placeholder = "demo123" />
                  </td>
                  <td>
                  <p>{this.state.formErrors.password.length > 0 ?  this.state.formErrors.password : ""}</p>
                  </td>
                </tr>
                <tr>
                  <td>text</td>
                  <td>
                    <input 
                      type = "text" 
                      name = "cpytext" 
                      className = "form-control" 
                      onChange={this.abc}
                      placeholder = "demo123" />
                  </td>
                  <td>
                  <p>{this.state.formErrors.cpytext.length > 0 ?  this.state.formErrors.cpytext : ""}</p>
                  </td>
                </tr>
                <tr>
                  <td>select</td>
                  <td>
                    <div className="form-check">
                  <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" name="optarrs" value="1"  onChange={this.abc}/>Option 1
                </label>
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" name="optarrs" value="2"  onChange={this.abc}/>Option 1
                </label>
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" name="optarrs" value="3"  onChange={this.abc}/>Option 1
                </label>
                </div>
                  </td>
                  <td>
                  <p>{this.state.formErrors.optarrs.length > 0 ?  this.state.formErrors.optarrs : ""}</p>
                  </td>
                </tr>
                <tr>
                  <td>select</td>
                  <td>
                  <div className="form-check">
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optradio" />Option 1
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optradio" />Option 2
                  </label>
                </div>
                <div className="form-check disabled">
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optradio" />Option 3
                  </label>
                </div>
                  </td>
                </tr>
                <tr> 
                <div className="form-group">
                <label for="sel1">Select list:</label>
                <select className="form-control" id="sel1" name="selectdrop">
                  <option value="">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
                </tr>
                <tr>
                  <td colSpan = "2">
                    <button 
                      type = "submit" 
                      name = "submit" 
                      onClick="def"
                      className = "btn btn-primary mr-3">
                        submit
                    </button>
                  </td>
                </tr>
              </table>
            </form>
        <br/>
        </div>
        <div className="col-md-7">
          
        </div>
      </div>
      </div>
    )
  }
}

export default ContactUs;
