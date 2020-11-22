import React, {useState} from 'react';
import Modal from 'react-modal';
import './QuoteComponent.css';
export default function Quote(){
const[modelIsOpen, setmodelIsOpen] = useState(false)
return(
<div className="quote">
  {/* <a href="#" className="pull-right quote" >Get a quote</a> */}
        <button onClick = {() => setmodelIsOpen(true)}>Get a Quote</button>
        <Modal isOpen={modelIsOpen} onRequestClose = {() => setmodelIsOpen(false)} 
         style = {
             {
             overlay:{
                 backgroundColor:'#4d4d4d50'
             },
            }
         }   
        className="pop-up" >
            <h2>model title</h2>
            <p>model body</p>
            <div>
                <button onClick = {()=> setmodelIsOpen(false)}>
                  Close  
                </button>
            </div>
        </Modal>
  </div>
  )
  }