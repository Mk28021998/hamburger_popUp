// Write your code here
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import './index.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

const Header = () => (
  <div className="header-cont">
    <div className="nav-content">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="hamburger-icon-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-cont">
            <button
              className="close-icon-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="nav-links-lists">
              <li className="nav-link-items">
                <Link className="nav-links" to="/" onClick={() => close()}>
                  <AiFillHome size="30" />
                  <p className="nav-link-content">Home</p>
                </Link>
              </li>
              <li className="nav-link-items">
                <Link className="nav-links" to="/about" onClick={() => close()}>
                  <BsInfoCircleFill size="30" />
                  <p className="nav-link-content">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
