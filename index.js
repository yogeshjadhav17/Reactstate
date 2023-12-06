import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
import App from './App.js';
import Detail from './App.js';


class Information extends React.Component{
  constructor(){
    super();
    this.state = {Initialvalue:"Hi Welcome to my website"}
  }
    render(){
      return (
        <div className="website">
      
      <h1>Hello {this.state.Initialvalue} </h1>
      </div>
      );
    
    }
}

class Welcome extends React.Component{
  constructor(props){
    super(props);
    this.state = {Fruit: "Mango"}
  }
  render()
  {
    return(
      <div className="Fruit">
        <Information/>
        <App/>
        <Detail/>
        <h1>This is Yogesh</h1>
        <h2> I love react</h2>
        <h3>I love to eat {this.state.Fruit}</h3>
      </div>
    );
  }
  
}

  ReactDOM.render(<Welcome/>, document.getElementById("root"));
