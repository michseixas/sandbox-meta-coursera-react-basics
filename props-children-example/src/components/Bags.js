function Bag(props) {
    const bag = {
        padding: "200px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bag

// the Bag component adds a wrapping div with a specific styling, 
// and then gives it props.children as its content.