import './App.css';
// import Home from './pages/home/indexx';
// import {
//   MyComponentArrowWithProps
// } from "./components/MyComponents";
// import Loop from './components/componentLoop';
import { Sample as NetworkCallSample } from "./pages/search/index";
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Trending from "./components/Trending";


function Exercase() {     
   return (
      <Router>
         <Switch>
            <Route path="/" component={NetworkCallSample}/>
            <Route path="/trending" component={Trending}/>
         </Switch>
      </Router>
   );  
 }  


// const Exercase = ({title,url}) => (
//   <div className="App">
//     <header className="App-header">
//     <Home />
//     {Gif.title}
//     <img src={Gif.url}></img>
//       <div className='search'>
//         <input placeholder='Search...'></input>
//         <button>Search</button>
//       </div>
//       {/* <MyComponentArrowWithProps/> */}
//     </header>
//   </div>
// );


export default Exercase;

