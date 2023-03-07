import MenuContent from '../menuContent';
import TrendsMenu from '../trendsMenu/TrendsMenu';
import './index.css';

const SideMenu = ({ showMenu }) => {
  return (
    <div className={`SideMenu ${showMenu ? 'show' : ''}`}>
      <MenuContent />
      <TrendsMenu />
    </div>
  );
};

export default SideMenu;
