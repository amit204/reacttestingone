import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class HeaderComponent extends Component{
   render(){
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="logo pull-left">
                        <a href="#"><img src="./../images/logo.png" className="img-responsive"/></a>  
                        </div>  
                    </div>
                    <div className="col-md-6">
                        <div className="cta pull-right">
                            <a className="cta-btn"></a>
                            <a href="#" className="pull-right" id="get-quote-cta-big">Get a quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
   }

}


export default HeaderComponent;
