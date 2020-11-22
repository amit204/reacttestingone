import React, {Component} from 'react';
import './HeaderComponent.css';
import QuoteComponent from '../QuoteComponent/QuoteComponent';

class HeaderComponent extends Component{
   render(){
      
    return(
        <div>
            <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="logo pull-left col-md-3">
                        <a href="#"><img src={require('../../images/logo.png').default} alt="logo" className="img-fluid"/></a>  
                        </div>  
                    </div>
                    <div className="col-md-6">
                        <div className="cta pull-right">
                          <QuoteComponent />

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
   }

}


export default HeaderComponent;
