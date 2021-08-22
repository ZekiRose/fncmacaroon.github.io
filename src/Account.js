import React, { Component } from "react";
 
class Account extends Component {
  render() {
    return (
      <div>
        <h2>Account Information: </h2>
        <form action="/action_page.php">
        <label for="fname">First name:</label><br></br>
        <input type="text" id="fname" name="fname" value=""></input><br></br>

        <label for="lname">Last name:</label><br></br>
        <input type="text" id="lname" name="lname" value=""></input><br></br>

        <label for="fname">Email Address:</label><br></br>
        <input type="text" id="email" name="email" value=""></input><br></br>

        <label for="lname">Password:</label><br></br>
        <input type="text" id="password" name="password" value=""></input><br></br>

        <label for="fname">Confirm Password:</label><br></br>
        <input type="text" id="cnfPassword" name="cnfPassword" value=""></input><br></br>

        <label for="lname">Phone Number:</label><br></br>
        <input type="text" id="pnumber" name="pnumber" value=""></input><br></br><br></br>

        <input type="submit" value="Submit"></input>
        <input type="submit" value="Login"></input>
        </form>
        <p></p>
      </div>
    );
  }
}
 
export default Account;