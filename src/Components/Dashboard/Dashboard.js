import React, { Component } from "react";
import axios from 'axios';
import Product from "../../Components/Product/Product.js";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinputName: "",
      userinputPrice: "",
      userinputURL: "",
      products: [],
      
    };

    this.clearInput = this.clearInput.bind(this);
    this.resetInputState = this.resetInputState.bind(this)
    this.renderProducts = this.renderProducts.bind(this)

  }
  renderProducts(props){
     
          return(
      <div>
          <p>{this.props.products.map()}</p>
      </div>)
  }

  clearInput() {
    document.getElementById("nameInput").value = "";
    document.getElementById("priceInput").value = "";
    document.getElementById("urlInput").value = "";
    console.log("ClearingInputFields");
  }

  resetInputState() {
    this.setState({
      userinputName: "",
      userinputPrice: "",
      userinputURL: ""
    });
  }
  render() {
    return (
      <div className="Dashboard">
        <h1>Dashboard!</h1>
        
        <div>
        {/* {this.renderProducts()} */}
        {/* {props.products.map()} */}
          <input
            name="nameInput"
            className="form-control"
            id="nameInput"
            placeholder="Name"
            onChange={e => this.setState({ userinputName: e.target.value })}
          ></input>
          <input
            name="priceInput"
            className="form-control"
            id="priceInput"
            placeholder="Price"
            onChange={e => this.setState({ userinputPrice: e.target.value })}
          ></input>
          <input
            name="urlInput"
            className="form-control"
            id="urlInput"
            placeholder="URL"
            onChange={e => this.setState({ userinputURL: e.target.value })}
          ></input>
          <button
            onClick={() => {
              this.clearInput();
              this.resetInputState();
            }}
          >
            cancel
          </button>
          <button onClick={() => {
            console.log("Pushing to productsAPI via Axios.post",  )
            axios.post('/api/products', {
              product_name: this.state.userinputName,
              product_desc: this.state.userinputName,
              product_price: this.state.userinputPrice,
              product_image: this.state.userinputURL,
            }
            
            )
            .catch(err => {
              console.log(err);
            });
          
            
          }
          }>Add to Inventory!</button>
          <Product />
        </div>
      </div>
    );
  }
}

export default Dashboard;
