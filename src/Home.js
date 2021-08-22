import React, { Component } from "react";
import StyledLink from './FontCustomStyle';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Best Buy</h2>
        <p><StyledLink>Best Buy is a company that is well known to sell electronics and have a group of people that can help you understand and even repair these electronics for you.<br></br> 
          Our range of products go from Televisions, Refrigerators, Washers to phones and gaming consoles.</StyledLink></p>
 
        <p><StyledLink>We offer curbside pickup within in hour of placing an order<br></br>
        Free next-day delivery<br></br>
        Same-day delivery</StyledLink></p>

        <p>
          <StyledLink>Schedule a service today! <br></br>
          Our services include: <br></br><br></br>
          <a href="https://www.bestbuy.com/services/triage/home?cat=COMPUTERS_AND_TABLETS">Computers & Tablets</a><br></br>
          <a href="https://www.bestbuy.com/services/triage/home?cat=CELL_PHONE">Cell Phones</a><br></br>
          <a href="https://www.bestbuy.com/services/triage/home?cat=SMART_HOME">Smart Home</a><br></br>
          <a href="https://www.bestbuy.com/services/triage/home?cat=TV_AND_HOME_THEATER">Tv & Home Theater</a><br></br>
          <a href="https://www.bestbuy.com/services/triage/home?cat=GAMING">Gaming</a><br></br>
          <a href="https://www.bestbuy.com/services/triage/home?cat=CAR_ELECTRONICS">Car Electronics</a><br></br>
          <a href="https://www.bestbuy.com/services/triage/home?cat=MAJOR_APPLIANCES">Major Applicances</a><br></br>
          <a href="https://www.bestbuy.com/services/triage/home?cat=SMALL_APPLIANCES">Small Applicances</a><br></br>
          <a href="https://www.bestbuy.com/services/triage/home?cat=CAMERAS_AND_CAMCORDERS">Cameras & Camcorders</a><br></br>
          <a href="https://www.bestbuy.com/services/triage/home?cat=AUDIO">Portable Audio</a><br></br>
          <a href="https://www.bestbuy.com/services/triage/home?cat=WEARABLES">Wearables</a><br></br>
          <a href="https://www.bestbuy.com/services/triage/home?cat=DRONES_AND_TOYS">Drones</a><br></br></StyledLink>

        </p>
      </div>
    );
  }
}
 
export default Home;
