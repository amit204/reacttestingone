import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderComponent from '../GlobalComponent/HeaderComponent/HeaderComponent';
import FooterComponent from '../GlobalComponent/FooterComponent/FooterComponent';
class HomeComponent extends Component{
    render(){
        return(
            <div>
                <HeaderComponent />
                <FooterComponent />
            </div>
        )
    }
}
export default HomeComponent;