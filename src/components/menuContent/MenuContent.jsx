import './index.css';

const MenuContent = () => {
  return (
    <div className="MenuContent">
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">explore</a>
        </li>
        <li>
          <a href="#">notifications</a>
        </li>
        <li>
          <a href="#">messages</a>
        </li>
        <li>
          <a href="#">bookmarks</a>
        </li>
      </ul>
      <button className="tweet-btn">tweet</button>
    </div>
  );
};

export default MenuContent;
