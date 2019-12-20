import React, { Component } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import axios from "axios";
import "./App.css";



//////////////////////////////////ROUTING BELOW COMMENT OUT IF BROKEN
//////////////ROUTING IMPORTS
// import { HashRouter, Link, Switch } from "react-router-dom";
// import Routes from "./routes"

// function App() {
//   return (
//     // <div>
//     // <Header />
//     // </div>
//     <HashRouter>
//       <header>
//         <ul>
//           <li>
//             <Link to="/">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/about/contact">Contact</Link>
//             </li>
//             <li>
//               <Link to ="/Blah">404 View</Link>
            
//           </li>
//           <li><Link to ="/store">Store</Link></li>
//         </ul>
//       </header>
//       <main>
//         <div className="App">
//           {/* <Switch>
//             <Route component={Contact}exact path="/about/contact" />
//             <Route component={About} exact path="/about" />
//             <Route component={Home} exact path="/" />
//             <Route render= {() => <h1> 404 Not Found! DOOOOOOOOOOM! </h1>} />

//           </Switch> */} 
//               {Routes}
//         </div>
//       </main>
//     </HashRouter>
//   );
// }

// export default App;



//////////////////////////ROUTING ABOVE COMMENT OUT IF BROKEN



////////////////////////ORIGINAL CODE BELOW UNCOMMENT IF ROUTING BREAKS
class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      placeholderText: ""
  
    };
  }
  componentDidMount() {
    this.setState({placeholderText: `Del from 1 and ${this.state.products.length}`})
    axios.get("/api/products").then(response => {
      this.setState({ products: response.data });
    });
  }

  render() {
    console.log(this.state.products);
    return ( 
    <div className="App">
    <div>
          <Header />
        </div>
     
        <div>
          <Dashboard 
          products={this.state.products}
          placeholderText={this.state.placeholderText} />
        </div>
        <div>
          <Form />
        </div>

      </div>
    );
    
}}
//////////////////////////////////////////////ORIGINAL CODE ABOVE UNCOMMENT IF ROUTING BREAKS
  
export default App;
