import React, { Component, useState } from 'react';
import '../style.css';

//With hooks
function Count(props){
  const [count, setCount] = useState(0); //ini value
  return(
    <div>
      <button className="likeButton" onClick={ ()=> setCount(count+1) }> Like</button>
      &nbsp; Likes: {count}
    </div>
  );
}
export default Count;