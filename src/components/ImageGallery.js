import axios from "axios";
import React, { Component } from "react";
import PhotoCard from "./PhotoCard";

class ImageGallery extends Component {
  render() {
    return <PhotoCard photoCards={this.state.products} />;
  }

  state = {
    products: [],
  };

  componentDidMount() {
    GetProducts((products) => {
      this.setState(products);
      console.log(this.state.products);
    });
  }
}

function GetProducts(callback) {
  let url = "https://gemlux.com/collections/rigging-kits/products.json";
  
  console.log(url);
  
  axios
    .get(url)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error)
        ;
    }
  );
}

export default ImageGallery;
