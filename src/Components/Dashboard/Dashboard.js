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
      userdeleteID: null,
      products: [],
      placeholderText2: "",
      editinputName: null,
      editinputPrice: null,
      editinputURL: null,
      editinputID: null
      
      
    };

    this.clearInput = this.clearInput.bind(this);
    this.resetInputState = this.resetInputState.bind(this)
    this.renderProducts = this.renderProducts.bind(this)

    
  }

  componentDidMount() {
    this.setState({placeholderText2: `Del from 1 and ${this.props.products.length}`})
    ;
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
    document.getElementById("editnameInput").value = "";
    document.getElementById("editpriceInput").value = "";
    document.getElementById("editurlInput").value = "";
    document.getElementById("deleteInput").value = "";
    document.getElementById("editidInput").value = "";
    console.log("ClearingInputFields, resetting state!");
  }

  resetInputState() {
    this.setState({
      userinputName: "",
      userinputPrice: "",
      userinputURL: "",
      userdeleteID: null,
      editinputName: null,
      editinputPrice: null,
      editinputURL: null,
      editinputID: null
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
            this.clearInput();
            
          }
          }>Add to Inventory!</button>
</div>
<div>
        {/* {this.renderProducts()} */}
        {/* {props.products.map()} */}
          <input
            name="deleteInput"
            className="form-control"
            id="deleteInput"
            placeholder= "Input ID to Delete"
            onChange={e => this.setState({ userdeleteID: e.target.value })}
          ></input>

          <button
            onClick={() => {
              this.clearInput();
              this.resetInputState();
            }}
          >
            cancel and clear
          </button>
          <button onClick={() => {
            console.log(`Deleting ${this.state.userdeleteID}`)
        
        axios.delete(`/api/products/${this.state.userdeleteID}`)
        .catch(err => {
          console.log(err);
        });
        this.clearInput();
            
          }
          }>Delete from 1 to {this.props.products.length}</button>




<div>
  

          <input
            name="editnameInput"
            className="form-control"
            id="editnameInput"
            placeholder="edit Name"
            onChange={e => this.setState({ editinputName: e.target.value })}
          ></input>
          <input
            name="editpriceInput"
            className="form-control"
            id="editpriceInput"
            placeholder="edit Price"
            onChange={e => this.setState({ editinputPrice: e.target.value })}
          ></input>
          <input
            name="editurlInput"
            className="form-control"
            id="editurlInput"
            placeholder="edit URL"
            onChange={e => this.setState({ editinputURL: e.target.value })}
          ></input>
                    <input
            name="editidInput"
            className="form-control"
            id="editidInput"
            placeholder="ID to edit"
            onChange={e => this.setState({ editinputID: e.target.value })}
          ></input>
          <button
            onClick={() => {
              this.clearInput();
              this.resetInputState();
            }}
          >
            cancel and clear
          </button>
          <button onClick={() => {
            console.log("Pushing to productsAPI via Axios.post",  )
            axios.put(`/api/products/${this.state.editinputID}`, {
              product_name: this.state.editinputName,
              product_desc: this.state.editinputName,
              product_price: this.state.editinputPrice,
              product_image: this.state.editinputURL,
            }
            
            )
            .catch(err => {
              console.log(err);
            });
            this.clearInput();
            
          }
          }>Edit value from 1 to {this.props.products.length}!</button>
</div>


          <Product />
        </div>
      </div>
    );
  }
}

export default Dashboard;
