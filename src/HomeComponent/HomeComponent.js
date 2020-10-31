import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class HomeComponent extends Component{
    render(){
        return(
            <div className = "container">
            <div className = "row">
              <div className = "col-sm-12">
                <h1>Home page</h1>
    
                <hr />
    
                <p>A significant reason you should book with Yatra is the availability of hotels across categories and budgets. Yatra's extensive filters let you choose from varying price range, for instance, between INR1000 to 2000, then INR 2000 to 4000 and so on. , South Jaipur, North Jaipur among others. Not to mention, an amenity-wise search is another way of landing a hotel of your choice, for example you are travelling with children and you select the option 'suitable for children' to get a more appropriate result.</p>
              </div>
            </div>
          </div>
        )
    }
}
export default HomeComponent;