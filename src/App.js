import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props){
	super(props);
	this.state = {value: ''};
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.alternative = this.alternative.bind(this); 
  }

  handleSubmit(event){
	event.preventDefault();
	alert('sa ' + this.state.value);
  }

  alternative(event) {
	event.preventDefault();
	alert('Bu da alternatif sa ' + this.state.value);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {

    var title = React.createElement('h1', {}, 'Başlık');
    var tv = React.createElement('input', {className: 'text_', type: 'text', placeholder: "Adın nedir???", 
					   value: this.state.value, onChange: this.handleChange}, null);
    
    var buton = React.createElement('input', {className: 'bt1', type: 'button', value: 'Devam Et', onClick: this.handleSubmit}, null);    
    var buton_2 = <input type='button' class='bt_alternative' onClick={this.alternative} value="Alternatif"/>;
    var line_ = <br/>;

    var body = React.createElement('div', {className: 'content_form'}, [title, tv, line_, buton, buton_2]);

    return (
     	 body
    );
  }

  
}

export default App;
