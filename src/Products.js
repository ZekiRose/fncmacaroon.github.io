import React, { Component } from "react";
import Button from './AddCartButton';

import Airfry from "./Airfryer.PNG";
import Airpods from "./Airpods.PNG";
import Imac from "./Imac.PNG";
import Ipad from "./Ipad.PNG";
import Laptop from "./Laptop.PNG";
import TV from "./TV.PNG";
import Xbox from "./Xbox.PNG";

class Products extends Component {
  render() {
    return (
      <div>
        <h2>Our Products</h2>
        <p>
        <img src={Airfry} alt="Products" width="200" height="303"></img>
        <img src={Airpods} alt="Products" width="200" height="303"></img>
        <img src={Imac} alt="Products" width="200" height="303"></img>
        <img src={Ipad} alt="Products" width="200" height="303"></img>
        <img src={Laptop} alt="Products" width="200" height="303"></img>
        <img src={TV} alt="Products" width="200" height="303"></img>
        <img src={Xbox} alt="Products" width="200" height="303"></img>
        </p>
        <p2>
        <Button>Add to Cart</Button>
        <Button>Add to Cart</Button>
        <Button>Add to Cart</Button>
        <Button>Add to Cart</Button>
        <Button>Add to Cart</Button>
        <Button>Add to Cart</Button>
        <Button>Add to Cart</Button>
        </p2>
      </div>
    );
    
  }
}

 
export default Products;
