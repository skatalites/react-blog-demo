import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Count from "./components/Count";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  async componentDidMount() {
    let promesa = fetch("https://jsonplaceholder.typicode.com/posts");

    //promesa un solo valor
    //Forma 1
    /*promesa.then( (response) => {
       response.json().then( (data) => {
          console.log(data);
      });
    });*/

    //Forma 2
    /*
    promesa.then(response => response.json()).then(data=>{
      this.setState({
        articles: data
      });
    });
  */

    //Forma 3 async await
    const posts = await promesa.then(response => response.json());
    console.log(posts);
    
    let promesa2 = fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
    const posts2 = await promesa2.then(response => response.json());
    console.log(posts2);


    this.setState({
      articles: posts
    });
  }

  render() {
    return (
      <div>
        {this.state.articles.map(article => {
          return (
            <div className="card" key={article.id.toString()}>
              <p>
                <b>{article.title}</b>
              </p>
              <p>{article.body}</p>
              <Count />
            </div>
          );
        })}
      </div>
    );
  }
}

render(<Blog />, document.getElementById("root"));
