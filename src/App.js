import React, { Component } from "react";
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
      // products: [{
      //   id: 1,
      //   product_name: "Ham",
      //   product_price: 100,
      //   product_url: "10",
      // },
      // {
      //   id: 2,
      //   product_name: "Turkey",
      //   product_price: 10,
      //   product_url: "1",
      // }]
    };
  }
  componentDidMount() {
    axios.get("/api/products").then(response => {
      this.setState({ products: response.data });
    });
  }

  render() {
    console.log(this.state.products);
    return ( <div className="App">
    <div>
          <Header />
        </div>
     
        <div>
          <Dashboard products={this.state.products} />
        </div>
        <div>
          <Form />
        </div>

      </div>
    );
  }
}

export default App;
