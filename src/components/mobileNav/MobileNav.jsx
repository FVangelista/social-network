import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoLogoTwitter } from 'react-icons/io';
import { HiOutlineSparkles } from 'react-icons/hi';
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
      <BiMenu className="icon" onClick={burgerTrigger} />
      <IoLogoTwitter className="icon" />
      <HiOutlineSparkles className="icon" />
      <SideMenu showMenu={showMenu} />
    </div>
  );
};

export default MobileNav;
