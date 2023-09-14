function Main (props) {

     const mainStyle = {
        background: "red",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
    }


    return (
    <h2 style={mainStyle}>{props.greet} from Main in red</h2>
    )
}

export default Main;