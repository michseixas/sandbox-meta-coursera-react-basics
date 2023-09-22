function ModeToggler () {

    let darkModeOn = false;
    const darkMode = <h1>Dark mode in On</h1>
    const lightMode = <h1>Light Mode is On</h1>

    function handleClick () {
        darkModeOn = !darkModeOn;
        if (darkModeOn == true){
            console.log("Dark mode is on!")
        } else {
            console.log("Light mode is on")
        }
    }

    return (
    <div>
        {darkModeOn ? darkMode : lightMode}
        <button onClick={handleClick}>
            I know you want to click me!
        </button>
    </div>

    )

}


export default ModeToggler;

// Every time I click on the button, the darkMode state changes, and this is reflected at the console log. 