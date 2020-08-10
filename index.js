import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Count from './components/Count'


class Blog extends Component {
  constructor() {
    super();
    this.state = { 
      articles:[]
      };
  }

  componentDidMount(){
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts');

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
          return <div className="card" key={article.id.toString()}>
            <p>
              {article.title}
            </p>
            <hr/>
            <p>
              {article.body}
            </p>
            <Count /> 
          </div>
        })
      }
      </div>
    );
  }
}

render(<Blog />, document.getElementById('root'));
