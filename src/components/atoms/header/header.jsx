import './index.css';
import { useState } from 'react';
import { IoMdArrowBack, IoIosMore } from 'react-icons/io';

const Header = ({ scroll, setInputData }) => {
  const [search, setSearch] = useState('');

  const handleInput = (e) => {
    e.preventDefault();
    setInputData(search);
  };

  return (
    <div className={`Header ${scroll ? 'scrollEffect' : ''}`}>
      <div className="nav-top">
        <a>
          <IoMdArrowBack />
        </a>
        <form onSubmit={handleInput}>
          <input
            type="text"
            className="search-bar"
            placeholder="search on twitter"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <a>
          <IoIosMore />
        </a>
      </div>
      <div className="nav-bottom">
        <ul>
          <li>popular</li>
          <li>news</li>
          <li>users</li>
          <li>photos</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
