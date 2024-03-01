
import React from "react";
import  ReactDOM  from "react-dom";

const heading = React.createElement('h1',{},'hello world!!');

const root = ReactDOM.createRoot(document.getElementById('container'));

// jsx  

const jsxheading = <h1>Hi from jsx!!</h1>

root.render(jsxheading);