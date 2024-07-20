import { Link } from 'react-router-dom'
import './welcome_nav.css'

const Welcomenav = () => {
  return (
    <div className="d-flex items-center justify-content-between ">
      <div className="d-flex items-center justify-content-between">
        <p className="header_title text-secondary">
          <i className="fas fa-droplet text-danger"></i>
          <span className="text-capitalize fw-bold">Rakhthosh</span>
        </p>
      </div>

      <div className="nav-links">
        <ul className="d-flex list-unstyled welcome-links">
        <div className="bltn">
        <button className="login_btn">
          <Link to="/login">Login</Link>
        </button>

        <button className="sign_up_btn mx-2">
          <Link to="/register" className="text-white">
            SignUp
          </Link>
        </button>
      </div>
        </ul>
      </div>
      
    </div>
  )
}

export default Welcomenav
