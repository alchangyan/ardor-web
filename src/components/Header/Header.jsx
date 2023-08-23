import LangSwitch from '../LangSwitch'

import logo from '../../assets/images/logo.svg'

import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="ardor properties logo" />
      </div>
      <div className="header__right-side">
        <div>+971 2 622 7160</div>
        <LangSwitch />
      </div>
    </header>
  )
}

export default Header