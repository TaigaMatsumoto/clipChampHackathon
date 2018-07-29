import React, { Component } from 'react';
import Sketch from './components/Sketch';


class App extends Component {
  constructor(props){
    super();
    this.state = {
      sketchData: "",
      user: {
        image: ""  
      },
      example: {
        image: ""
      },
      filesRead: 0
    }
    this.updateSketch = this.updateSketch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getImage = this.getImage.bind(this);
    
  }

  updateSketch(sketchData){
    this.setState({
      sketchData: sketchData
    })
  }

 async getImage(){
    this.setState({
      user:{
        image: this.state.sketchData.toDataURL()
      }
    })
    return;
  }

  handleClick(){
    this.getImage().then((value) => {
      console.log(this.state.user.image);
      const link = document.createElement('a');
      link.download = 'image.png';
      link.href = this.state.user.image;
      link.click();
      
      // this.doneReading();
    })
  }

  render() {
    const MyCanvas = () => {
      return(
        <Sketch updateSketch={this.updateSketch} />
      )
    }
    return (
    
      <div className="App">
        {/* <Route exact path='/game.html' component={MyCanvas} /> */}
        <Sketch updateSketch={this.updateSketch}/>
        
        <button class="btn btn-secondary ml-auto w-140 next-button first-button" onClick={this.handleClick}>CHECK!</button>
        </div>
     
    );
  }
}

export default App;
