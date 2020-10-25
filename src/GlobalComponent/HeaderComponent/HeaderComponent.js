import React, {Component} from 'react';


class HeaderComponent extends Component{
   render(){
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="logo pull-left col-md-3">
                        <a href="#"><img src={require("../../images/logo.png").default} alt="logo" className="img-fluid"/></a>  
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
