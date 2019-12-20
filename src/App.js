import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import axios from "axios";
import "./App.css";

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

//////////////////////////////////ROUTING BELOW COMMENT OUT IF BROKEN
//     <HashRouter>
//  <Switch>
//     <header>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/about/contact">Contact</Link>
//           </li>
//           <li>
//             <Link to ="/Blah">404 View</Link>
          
//         </li>
//         <li><Link to ="/store">Store</Link></li>
//       </ul>
//     </header>
//     <main>

//             {Routes}
    
//     </main>
//     </Switch>
//   </HashRouter>

//////////////////////////ROUTING ABOVE COMMENT OUT IF BROKEN



////////////////////////ORIGINAL CODE BELOW UNCOMMENT IF ROUTING BREAKS

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
    //////////////////////////////////////////////ORIGINAL CODE ABOVE UNCOMMENT IF ROUTING BREAKS
  }
}

export default App;
