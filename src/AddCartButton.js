// App.js
import React from 'react';
import styled from 'styled-components';
// Button component that'll render an <a> tag with some styles
const Button = styled.a`
background-color: yellow;  
color: royalblue;
font-size: 1em;
margin: 1.7em;
padding: 0.25em 2em;
border: 2px solid palevioletred;
border-radius: 3px;
border-color: royalblue;
`
const App = () => {
  return (
    <Button>Add to Cart</Button>
  )
}
export default App;