import React from 'react';
import ReactDOM from 'react-dom/client';

const title = <h1>react element</h1> 

/**  
 * 
 * 
 * 
 * 
 * 
  */
 
const Header = () => <div>this is header</div>
const container = () => {
  return (
    <div id='cnt' key='cnt'>
      <Header/>
      {title}
      <h1>functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container());
