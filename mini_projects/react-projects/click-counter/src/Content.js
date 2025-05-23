import { useState } from 'react';

const Content = () => {
  
  let [count, setCount] = useState(0);

  const increment = () => {
    if (count >= 100) {
      alert('Count cannot exceed 100.')
    } else {
      setCount(count + 1);
    }
  }

  const decrement = () => {
    if (count <= 0) {
      alert('Count cannot be less than 0.')
    } else {
      setCount(count => count - 1);
    }
  }

  return ( 
    <div className="content">
      <div className="counter" >
        <p>{ count }</p>
        <div className="btnCtrl">
          <input type="button" value="Increase" onClick={increment} />
          <input type="button" value="Decrease" onClick={decrement} />
        </div>
      </div>
    </div>
   );
}
 
export default Content;