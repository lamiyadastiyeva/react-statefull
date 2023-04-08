import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App';
// StateFull Component
//const App=()=>{
//  return(
//    <h1>Hello</h1>
//  )
//}




// StateLess Component

//class App extends Component {
//  render(){
//    return();
//  }
//}

ReactDOM.render(<App />, document.querySelector("#root"));