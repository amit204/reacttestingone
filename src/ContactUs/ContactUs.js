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
      }
  }
  abc = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value} 
    )
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
                      onChange={this.abc}
                      required 
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
                       value ={this.state.password}
                      required 
                      onChange={this.abc}
                      placeholder = "demo123" />
                  </td>
                </tr>
                <tr>
                  <td colSpan = "2">
                    <button 
                      type = "submit" 
                      name = "submit" 
                      className = "btn btn-primary mr-3" 
                    >
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
