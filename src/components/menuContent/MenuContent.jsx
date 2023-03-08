import { IoLogoTwitter } from 'react-icons/io';
import { FaHashtag, FaEnvelope, FaRegBookmark } from 'react-icons/fa';
import { RiHome7Fill, RiNotification2Line } from 'react-icons/ri';
import './index.css';

const MenuContent = () => {
  return (
    <div className="MenuContent">
      <ul>
        <li className="main-logo">
          <IoLogoTwitter className="logo" />
        </li>
        <li>
          <a href="#">
            <RiHome7Fill className="logo" />
            <p className="menu-text">home</p>
          </a>
        </li>
        <li>
          <a href="#">
            <FaHashtag className="logo" />
            <p className="menu-text">explore</p>
          </a>
        </li>
        <li>
          <a href="#">
            <RiNotification2Line className="logo" />
            <p className="menu-text">notifications</p>
          </a>
        </li>
        <li>
          <a href="#">
            <FaEnvelope className="logo" />
            <p className="menu-text">messages</p>
          </a>
        </li>
        <li>
          <a href="#">
            <FaRegBookmark className="logo" />
            <p className="menu-text">bookmarks</p>
          </a>
        </li>
        <li>
          <button className="tweet-btn">tweet</button>
        </li>
      </ul>
    </div>
  );
};

export default MenuContent;
