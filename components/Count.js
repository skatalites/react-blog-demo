import React, { Component, useState } from 'react';

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
export default Count;