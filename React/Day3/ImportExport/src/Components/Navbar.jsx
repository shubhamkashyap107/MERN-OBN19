// let name = "Qwerty"
// export let age = 32
// export let city = "Delhi"

// export default name
// // export default age

function Navbar()
{
    return (
        <nav style={{display : "flex", backgroundColor : "blue", color : "white", justifyContent : "space-between", alignItems : "center", height : "8vh"}}>
            <h3>LOGO</h3>

            <div style={{display : "flex", gap : "12px"}}>
                <a style={{textDecoration : "none", color : "white"}} href="">A</a>
                <a style={{textDecoration : "none", color : "white"}} href="">B</a>
                <a style={{textDecoration : "none", color : "white"}} href="">C</a>
            </div>
        </nav>
    )
}

export default Navbar


