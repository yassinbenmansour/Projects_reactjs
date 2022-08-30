import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name : "",
      age : "",
    };
  }


    componentDidMount (){
      console.log("component did mount");
    }
    componentDidUpdate (){
      console.log("component did update");
    }

  render(){
    console.log(this.state);

    return(
        <div> 
          <form method='post'>
            <input type="text" name='name' id='' autoComplete='off' placeholder="Nom et prénom" 
            onChange={(event) => this.setState({ ...this.state,name : event.target.value})} />

            <input type="text" id='' autoComplete='off' placeholder="Age"
            onChange={(event) => this.setState({ ...this.state, age: event.target.value })} />
            <button type=""> Validé</button>

          </form>
        </div>
    );
  }

  
}

export default App;

