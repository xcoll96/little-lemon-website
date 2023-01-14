import Nav from "./Nav";

const Header = () => {
    return(
        <header>
            <div className="container">
                <div>
                    <a href="/">
                        <img src="/logo" />
                    </a>
                </div>
                <div>
                    <Nav/>
                </div>
            </div>
        </header>
    );
}

export default Header;