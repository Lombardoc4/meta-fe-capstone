// import Logo from '../assets/Logo.svg'

const Nav = () => {

    return (<nav className="container spacer-sm">
        <img src={"/Logo.svg"}/>
        <ul>
            <li>
                <a className="lead" href="#home">Home</a>
            </li>
            <li>
                <a className="lead" href="#about">About</a>
            </li>
            <li>
                <a className="lead" href="#menu">Menu</a>
            </li>
            <li>
                <a className="lead" href="#home">Reservation</a>
            </li>
            <li>
                <a className="lead" href="#home">Order Online</a>
            </li>
            <li>
                <a className="lead" href="#home">Login</a>
            </li>
        </ul>

    </nav>)
}

export default Nav;