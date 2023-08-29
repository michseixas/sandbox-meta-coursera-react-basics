import React from "react";

function Header (props) {
    console.log(props)
    return <h1>Hellooooooo there, {props.name}, {props.color}</h1>;
}

export default Header;