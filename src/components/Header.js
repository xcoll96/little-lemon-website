import Nav from "./Nav";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <a className="main-header__logo" href="/">
          <img src="/images/little_lemon_logo.svg" />
        </a>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
