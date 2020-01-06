import React, { Component } from 'react'
import './Dragdrop.css'



export class Dragdrop
 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name:""
             
        }
    }
    
    render() {
        return (
            <div>
               <h2>Drag and Drop</h2>
               <p>Drag the image back and forth between the
                    two div elements.</p>
                
                
             <div id="div2">
                 {/* <input ></input> */}
             </div>
            
             <div id="div1"></div>
             
                
            </div>
        )
    }
}

export default Dragdrop

