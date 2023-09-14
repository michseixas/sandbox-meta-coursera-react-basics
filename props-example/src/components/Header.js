import React from "react";

function Header (props) {

     const headerStyle = {
        background: "blue",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
        border: ""
    }


    console.log(props)
    return (<h1 style={headerStyle}>Hello! My name is {props.name} and my favorite color is {props.color}</h1>
)
}

export default Header;