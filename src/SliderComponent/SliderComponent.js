import React, {Component} from 'react';
//Owl Carousel Libraries and Module
import $ from "jquery";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


class SliderComponent extends Component{
render() {
    return (
        <div>
    <div class="owl-carousel owl-theme">
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