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

    submitForm = (event) => {
      event.preventDefault();
      console.log(this.state);
    };

  render(){
    console.log(this.state);

    return(
        <div> 
          <form onSubmit={(event) => this.submitForm(event)} method='post'>
            <input type="text" name='name' id='' autoComplete='off' placeholder="Nom et prénom" 
            onChange={(event) => this.setState({ ...this.state,name : event.target.value})} />

            <input type="text" id='' autoComplete='off' placeholder="Age"
            onChange={(event) => this.setState({ ...this.state, age: event.target.value })} />
            <button type="submit"> Validé</button>

          </form>
        </div>
    );
  }

  
}

export default App;

