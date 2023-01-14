const Nav = () => {
  return (
    <nav>
      <ul className="main-nav">
        <li className="main-nav__item">
          <a href="/home">Home</a>
        </li>
        <li className="main-nav__item">
          <a href="/about">About</a>
        </li>
        <li className="main-nav__item">
          <a href="/menu">Menu</a>
        </li>
        <li className="main-nav__item">
          <a href="/reservations">Reservations</a>
        </li>
        <li className="main-nav__item">
          <a href="/order-online">Order Online</a>
        </li>
        <li className="main-nav__item">
          <a href="/log-in">Log In</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;