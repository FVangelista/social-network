import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import SideMenu from '../sideMenu';
import './index.css';

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const burgerTrigger = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <div className="MobileNav">
      <div className="burger">
        <BiMenu className="icon" onClick={burgerTrigger} />
      </div>
      <SideMenu showMenu={showMenu} />
      <img
        src="https://img.icons8.com/nolan/512/twitter.png"
        alt="twitter logo"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/6742/6742248.png"
        alt="sparkles image"
      />
    </div>
  );
};

export default MobileNav;
