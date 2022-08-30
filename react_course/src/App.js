import './App.css';
import React from 'react';

class App extends React.Component{
  state = {
    title : "Home",
  };

 componentDidMount() {
    document.title = this.state.title ;
 }

 componentDidUpdate(){
    document.title = this.state.title;
 }


  render(){
    return(
        <div> 
        <h1> My full name is  {this.state.name} and   {this.state.age} years old  </h1>
        <button onClick={() => this.setState({title : "Contact"})}> change title </button>
        </div>
    );
  }

}

export default App;

