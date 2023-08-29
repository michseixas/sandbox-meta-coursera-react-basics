import React from "react";

function Header (props) {
    console.log(props)
    return <h1>Hello! My name is {props.name} and my favorite color is {props.color}</h1>;
}

export default Header;