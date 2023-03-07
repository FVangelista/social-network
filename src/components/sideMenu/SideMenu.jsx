import contentList from '../../mocks/contentList';
import SideTrends from '../sideTrends';
import './index.css';

const SideMenu = ({ showMenu }) => {
  return (
    <div className={`SideMenu ${showMenu ? 'show' : ''}`}>
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
      <div className="trends-content">
        <h3>trends for you</h3>

        {contentList.map((content) => (
          <SideTrends data={content} key={content.id} />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
