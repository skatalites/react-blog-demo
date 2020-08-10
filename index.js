import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

//With hooks
function Count(props){
  const [count, setCount] = useState(0); //ini value
  return(
    <div>
      <button onClick={ ()=> setCount(count+1) }> Like</button>
      &nbsp; Likes: {count}
      <hr/>
    </div>
  );
}

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
      <ract-fragment>
      <div>
      <Count />
      </div>
      
      <div>
       {
        this.state.articles.map((article)=>{
          return <div className = "card" key={article.id.toString()}>
            <p>
              {article.title}
            </p>
            <hr/>
            <p>
              {article.body}              
            </p>
          </div>
        })
      }
      </div>
     
      </ract-fragment>
    );
  }
}

render(<Blog />, document.getElementById('root'));
