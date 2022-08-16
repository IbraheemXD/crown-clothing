import "./navigation-bar.styles.scss"
const Navigation = () => {
  return (
    <nav className="nav">
        <div className="nav__logo">
            <h1>👑 Clothing</h1>
        </div>
        <ul className="nav__links">
            <li className="nav__links-link"><a href="#">Home</a></li>
            <li className="nav__links-link"><a href="#">About</a></li>
            <li className="nav__links-link"><a href="#">Categories</a></li>
        </ul>
    </nav>
  )
}

export default Navigation