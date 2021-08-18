import React from "react";
import logoImg from "./Logo";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logoImg} alt={"logo"} />
        <p>ounter</p>
      </div>
      <div className="menuHeader">
        <a href="#" className="knop">
          Главная
        </a>
        <a href="#" className="knop">
          О нас
        </a>
        <a href="#" className="knop">
          Контакты
        </a>
      </div>
    </div>
  );
}

export default Header;
