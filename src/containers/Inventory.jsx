import axios from "axios";
import React, { Component } from "react";
import NavbarComp from "../components/NavbarComp";
import TableComp from "../components/TableComp";

export class Inventory extends Component {
  state = {
    data: [],    
  };

  componentDidMount = () => {
    axios
      .get("http://127.0.0.1:8000/api/inventory")
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          data: response.data.data,
        });        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <NavbarComp />
        <TableComp data={this.state.data} />
      </div>
    );
  }
}

export default Inventory;
