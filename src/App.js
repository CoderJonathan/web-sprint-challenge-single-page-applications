import React from "react";
import Form from './Form'
import { Route, Link } from "react-router-dom";
import HomePage from './home'
import './App.css';



const App = () => {
  return (
  
<div>
<nav className="navbar">
<Link to="/">
  <button name = 'homebutton'>Home</button>
  </Link>
<br/>
<Link to="/form"> 
<button name = 'orderbutton'>Order Here</button>
</Link>
</nav>

<Route exact path="/" component={HomePage} />
<Route path="/Form" component={Form} />

</div>
  );
};
export default App;
