import './index.css';
import { IoMdArrowBack, IoIosMore } from 'react-icons/io';

const Header = () => {
  return (
    <div className="Header">
      <a>
        <IoMdArrowBack />
      </a>
      <input
        type="text"
        className="search-bar"
        placeholder="search on twitter"
      />
      <a>
        <IoIosMore />
      </a>
    </div>
  );
};

export default Header;
