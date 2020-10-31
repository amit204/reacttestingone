import React from 'react';
import './FormValidation.css';

class FormValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // props that should show its values in their respective input fields
      emailaddress: "", 
      password: "", 
      // formErrors is a propert, which is used to the main property(s) errors either true, false boolean value
      formErrors: {
        emailaddress: "", 
        password: ""
      }, 
      // to validate each property
      emailaddressValid: false, 
      passwordValid: false, 
      formValid: false, 
    } 
  }

  handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value}, 
      () => { this.validateField(name, value)})
  }

  validateField(fieldName, fieldValue) {
    let fieldValidationErrors = this.state.formErrors;
    let emailaddressValid = this.state.emailaddressValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case "emailaddress":
        break;
      case "password": 
        break; 
      default:
        break;
    }
  }

  render() {
    return(
      <div className = "container">
        <div className = "row">
          <div className = "col-sm-12">
            <h1>Form Validation Page</h1>

            <hr />

            <p>A significant reason you should book with Yatra is the availability of hotels across categories and budgets. Yatra's extensive filters let you choose from varying price range, for instance, between INR1000 to 2000, then INR 2000 to 4000 and so on. , South Jaipur, North Jaipur among others. Not to mention, an amenity-wise search is another way of landing a hotel of your choice, for example you are travelling with children and you select the option 'suitable for children' to get a more appropriate result.</p>
          </div>
        </div>
        <div className = "row">
          <div className = "col-sm-5">
            <form name = "fv">
              <table className = "table">
                <tr>
                  <td>Email Address</td>
                  <td>
                    <input 
                      type = "text" 
                      name = "emailaddress" 
                      className = "form-control" 
                      value = {this.state.emailaddress} 
                      required 
                      onChange = {this.handleUserInput} 
                      placeholder = "richard@gmail.com" />
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>
                    <input 
                      type = "text" 
                      name = "password" 
                      className = "form-control" 
                      value = {this.state.password} 
                      required 
                      onChange = {this.handleUserInput}  
                      placeholder = "demo123" />
                  </td>
                </tr>
                <tr>
                  <td colSpan = "2">
                    <button 
                      type = "submit" 
                      name = "submit" 
                      className = "btn btn-primary mr-3" 
                      disabled = {!this.state.formValid}>
                        submit
                    </button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
          <div className = "col-sm-7">
            <p>A significant reason you should book with Yatra is the availability of hotels across categories and budgets. Yatra's extensive filters let you choose from varying price range, for instance, between INR1000 to 2000, then INR 2000 to 4000 and so on. , South Jaipur, North Jaipur among others. Not to mention, an amenity-wise search is another way of landing a hotel of your choice, for example you are travelling with children and you select the option 'suitable for children' to get a more appropriate result.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FormValidation;
