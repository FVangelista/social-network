import MenuContent from '../menuContent';
import './index.css';
import { IoLogoTwitter } from 'react-icons/io';

const Menu = () => {
  return (
    <div className="Menu">
      <IoLogoTwitter className="logo" />
      <MenuContent />
    </div>
  );
};

export default Menu;
