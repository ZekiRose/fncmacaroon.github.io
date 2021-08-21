import React, { Component } from "react";
import StyledLink from './FontCustomStyle';

class Contact extends Component {
  
  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <p><StyledLink>Corporate Responsibility staff members are happy to answer your questions about our environmental and community programs.<br></br> 
        If you are a customer, please click <StyledLink><a href="https://www.bestbuy.com/site/electronics/customer-service/pcmcat87800050001.c?id=pcmcat87800050001">here</a></StyledLink>. for Help Topics or call Customer Care at 1-888-BEST-BUY (1-888-237-8289).</StyledLink>
        </p>
      </div>
    );
  }
}
 
export default Contact;
