
const Header = () => {

    return  <header>
        <div className="container spacer-lg">
            <div className="col-6">
                <h1 className="display">Little Lemon</h1>
                <h2 className="subtitle">Chicago</h2>
                <p>We are a family owned and operated Mediterranean restaurant, focused on traditional recipes served with a modern twist </p>
                <button className="specials">
                    Reserve a Table
                </button>
            </div>

            <img className="col-6" src="/Logo.svg" alt="Antipasta board" />

        </div>

    </header>

}

export default Header;