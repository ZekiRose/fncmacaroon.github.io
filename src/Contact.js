import React, { Component } from "react";
import StyledLink from './FontCustomStyle';
import Support from "./Support.PNG";

class Contact extends Component {
  
  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <p><StyledLink>Corporate Responsibility staff members are happy to answer your questions about our environmental and community programs.<br></br> 
        If you are a customer, please click <StyledLink><a href="https://www.bestbuy.com/site/electronics/customer-service/pcmcat87800050001.c?id=pcmcat87800050001">here</a></StyledLink>. 
        for Help Topics or call Customer Care at 1-888-BEST-BUY (1-888-237-8289).</StyledLink>
        </p>
        <p2><br></br><br></br>
        <img src={Support} alt="Products" width="400" height="130"></img><br></br>
          <StyledLink>Need something fixed ASAP?<br></br> 
          Have questions?<br></br> 
          Agents are available 24/7<br></br>
          <a href="https://www.bestbuy.com/services/remotesupport">Chat with an Agent!</a></StyledLink></p2>
      </div>
    );
  }
}
 
export default Contact;
