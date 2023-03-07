import contentList from '../../mocks/contentList';
import SingleContent from '../singleContent/SingleContent';
import './index.css';
import { IoMdArrowBack, IoIosMore } from 'react-icons/io';
import { RiQuillPenFill } from 'react-icons/ri';

const Content = () => {
  return (
    <div className="Content">
      <div className="header">
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
      {contentList.map((content) => (
        <SingleContent data={content} key={content.id} />
      ))}
      <a className="btn">
        <RiQuillPenFill />
      </a>
    </div>
  );
};

export default Content;
