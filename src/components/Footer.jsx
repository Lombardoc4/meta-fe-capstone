
const Footer = () => {

    return (
        <footer className="spacer-lg">
            <div className='container'>
                <img className="col-3" src='/Logo.svg' alt='Little Lemon' />

                <ul className="col-3">
                    <li>
                        <a href='#home'>Home</a>
                    </li>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#menu'>Menu</a>
                    </li>
                    <li>
                        <a href='#home'>Reservation</a>
                    </li>
                    <li>
                        <a href='#home'>Order Online</a>
                    </li>
                    <li>
                        <a href='#home'>Login</a>
                    </li>
                </ul>

                <div className="col-3">
                    <b>Contact</b>
                    <p>Address</p>
                    <p>Phone #</p>
                    <p>Email</p>
                </div>

                <ul className="col-3">
                    <li>
                        <a href='#home'>Social 1</a>
                    </li>
                    <li>
                        <a href='#home'>Social 2</a>
                    </li>
                    <li>
                        <a href='#home'>Social 3</a>
                    </li>
                    <li>
                        <a href='#home'>Social 4</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;