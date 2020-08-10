import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Blog extends Component {
  constructor() {
    super();
    this.state = { 
      articles:[]
      };
  }

  componentDidMount(){
    let promesa = fetch('http://jsonplaceholder.typicode.com/posts');

    //Forma 1
    /*promesa.then( (response) => {
       response.json().then( (data) => {
          console.log(data);
      });
    });*/

    //Forma 2
    promesa.then(response => response.json()).then(data=>{
      this.setState({
        articles: data
      });
    });
  }

  render() {
    return (
      <div>
       {
        this.state.articles.map((article)=>{
          return <p>{article.title}</p>
        })
      }
      </div>
    );
  }
}

render(<Blog />, document.getElementById('root'));
