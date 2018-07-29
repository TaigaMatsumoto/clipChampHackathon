import React from 'react';
import {SketchField, Tools} from 'react-sketch';

class Sketch extends React.Component {
    constructor(props){
        super();
        this.sketchRef = React.createRef();
    }
    componentDidMount(){
        this.props.updateSketch(this.sketchRef.current);
    }
     render() {
        return (
            <SketchField 
                ref = {this.sketchRef}            
                className = "SketchField"
                width='100px' 
                height='100px' 
                tool={Tools.Pencil} 
                lineColor='black'
                lineWidth={3}/>
        )
     }}

     export default Sketch;
     
