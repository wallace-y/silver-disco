function Header() {
  return (
    <header className="d-flex justify-content-center pt-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
