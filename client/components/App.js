import React from 'react';
var axios = require('axios');
import '../css/App.css';
import  Button  from '@material-ui/core/Button';


class App extends React.Component{

  constructor(){
    super();
    this.state = {
      date : "",
      response : "",
      returned : false
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log("component mounted");

    axios.get("/hello")
         .then( (res) => {
           console.log(res.data);
         })
         .catch((err) => {
           console.log("At hello" , err);
         })


  }

  handleChange(e){
    this.setState({
      date : e.target.value
    });
  }

  handleSubmit(e){
      axios.get("timestampapi/api/timestamp?"+"param="+this.state.date)
      .then((res) => {
        console.log(res.data)
        this.setState({
          response : (res.data),
          returned : true
        })
      })
      .catch( (err) => {
        console.log(err);
      })
  }

  render(){

    if(this.state.returned == false){
        return(
          <div id = "app-container" className = "container">
            hello from app component!
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link href="https://fonts.googleapis.com/css?family=Abel&display=swap" rel="stylesheet"/>


          <input id = "inp" className = "inputDate"  onChange = {this.handleChange} ></input>
          <Button variant = 'contained' color = "primary" onClick = {this.handleSubmit}>Submit</Button>
          </div>
        )
    }else{
     
      return(
        <div id = "app-container" className = "container">
          hello from app component!
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link href="https://fonts.googleapis.com/css?family=Abel&display=swap" rel="stylesheet"/>


        <input id = "inp" className = "inputDate"  onChange = {this.handleChange} ></input>
        <Button variant = 'contained' color = "primary" onClick = {this.handleSubmit}>Submit</Button>
        <div className ="display" id = "show">{'{'}<br/>Unix : {this.state.response.unix}<br/>utc : {this.state.response.utc}<br/>status : {this.state.response.error}<br/>{'}'}</div>

        </div>
      )
    }
  }



}

export default App;
