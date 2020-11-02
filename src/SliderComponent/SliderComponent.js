import React, {Component} from 'react';
//Owl Carousel Libraries and Module
import $ from "jquery";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


class SliderComponent extends Component{
  componentDidMount() {
    $('.owl-carousel').owlCarousel({
    // my options
    });
    }
render() {
    return (
        <div>
    <div className="owl-carousel owl-theme">
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
</div>

        </div>
        
    );
}

}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });
export default SliderComponent;