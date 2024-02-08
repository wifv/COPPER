import '../css/navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <ul className="left-nav">
        <div className="logo-a nav-link">
          <img src="src/images/logo.png" alt="" />
          <a href="/">Copper pro</a>
        </div>
        <div className="nav-link"></div>
        <div className="nav-link"></div>
        <div className="nav-link">Delivery</div>
        <div className="nav-link">About us</div>
        <div className="nav-link">Contact</div>
      </ul>
      <ul className="right-nav">
        <img src="" alt="heart" />
        <img src="" alt="person" />
        <img src="" alt="shopcart" />
      </ul>
    </div>
  )
}

export default Navbar
