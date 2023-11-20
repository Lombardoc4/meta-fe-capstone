// import Logo from '../assets/Logo.svg'

const Nav = () => {

    return <nav>
        <img src={"/Logo.svg"}/>
        <ul>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#menu">Menu</a>
            </li>
            <li>
                <a href="#home">Reservation</a>
            </li>
            <li>
                <a href="#home">Order Online</a>
            </li>
            <li>
                <a href="#home">Login</a>
            </li>
        </ul>

    </nav>
}

export default Nav;