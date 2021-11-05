import axios from "axios";
import React, { Component } from "react";
import CardComp from "../components/CardComp";
import NavbarComp from "../components/NavbarComp";

export class Anggota extends Component {
  state = {
    data: [],
  };

  componentDidMount = () => {
    axios
      .get("http://127.0.0.1:8000/api/anggota")
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
        <CardComp data={this.state.data} />
      </div>
    );
  }
}

export default Anggota;
