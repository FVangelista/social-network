import './index.css';
// import { useState } from 'react';
import { IoMdArrowBack, IoIosMore } from 'react-icons/io';

const Header = () => {
  // const [search, setSearch] = useState('');
  // console.log(search);
  return (
    <div className="Header">
      <div className="nav-top">
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
      <div className="nav-bottom">
        <a>
          <IoMdArrowBack />
        </a>
        <input
          type="text"
          className="search-bar"
          placeholder="search on twitter"
          // value={search}
          // onChange={(e) => setSearch(e.target.value)}
        />
        <a>
          <IoIosMore />
        </a>
      </div>
    </div>
  );
};

export default Header;
