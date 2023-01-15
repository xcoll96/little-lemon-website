import Nav from "./Nav";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <a className="main-header__logo" href="/">
          <img src="/images/little_lemon_logo.svg" />
        </a>
        <Nav />
        <img className="main-header__menu-icon" src="/images/hamburguer-menu-icon.svg" alt="Menu icon" width="24" />
      </div>
    </header>
  );
};

export default Header;
