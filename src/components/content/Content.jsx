// Hooks
import { useState, useEffect } from 'react';

// Components
import SingleContent from '../singleContent/SingleContent';
import './index.css';

// React Icons
import { IoMdArrowBack, IoIosMore } from 'react-icons/io';
// import { RiQuillPenFill } from 'react-icons/ri';

const Content = () => {
  const [dataContent, setDataContent] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setDataContent(data.posts);
      });
  }, []);

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

      {dataContent.map((content) => (
        <SingleContent data={content} key={content.id} />
      ))}
    </div>
  );
};

export default Content;
