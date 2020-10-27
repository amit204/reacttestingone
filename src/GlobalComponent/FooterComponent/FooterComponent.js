import React, {Component} from 'react';
import './FooterComponent.css';
class FooterComponent extends Component{
    render(){
        return(
            <div>
                <div className="footer">
                <div className ="container">
                    <div className="row">
                        <div className="col-md-12">
                         <div className="social-media"><a href="#"><i class="fa fa-facebook"></i></a>&nbsp;<a href="#"><i class="fa fa-instagram"></i></a>&nbsp;<a href="#"><i class="fa fa-linkedin"></i></a>&nbsp;<a href="#"><i class="fa fa-twitter"></i></a></div>   
                        <p>Copyright © 2020 - ALL RIGHTS RESERVED</p>
                        <p>All contents of www.enago.com are protected under the International Copyright Act. All rights on this Web Site are reserved and no part of this Site shall be reproduced, stored in a retrieval system, or transmitted in any form or by any means - electronic, electrostatic, magnetic tape, mechanical, printing, photocopying, recording or otherwise, including the right of translation in any language, without the permission of Crimson Interactive Inc. (USA)</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default FooterComponent;