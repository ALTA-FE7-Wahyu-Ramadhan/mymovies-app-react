import React, { Component } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'

export default class TestPage extends Component {
state={
    counter:0,
    email:'',
    password:'',
};

  handleSubmit =() => {
    this.setState({counter:this.state.counter+1})
  };
  
    render() {
    return (
    <div className='bg-black w-full h-screen'>
      <Header/>
      <p>{this.state.counter}</p>
      <form>
        <label>
            email: {''}
            <input
            value={this.state.email} onChange={(e)=>{
                this.setState({email:e.target.value});
            console.log(e.target)}}/>
        </label>
        <label>
            password: <input value={this.state.password}/>
        </label>
      <Button label="BUTTON" type='submit'/>
      </form>
    </div>
    );
  }
}
