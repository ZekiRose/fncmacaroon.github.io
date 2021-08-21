import React, { Component } from "react";
import StyledLink from './FontCustomStyle';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Best Buy</h2>
        <p><StyledLink>Best Buy is a company that is well known to sell electronics and have a group of people that can help you understand and even repair these electronics for you.<br></br> 
          Our range of products go from Televisions, Refrigerators, Washers to phones and gaming consoles. Testing Commit 2</StyledLink></p>
 
        <p><StyledLink>We offer curbside pickup within in hour of placing an order</StyledLink></p>
        <p><StyledLink>Free next-day delivery</StyledLink></p>
        <p><StyledLink>Same-day delivery</StyledLink></p>
      </div>
    );
  }
}
 
export default Home;
