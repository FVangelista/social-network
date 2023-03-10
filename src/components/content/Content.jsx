// Hooks
import { useState, useEffect, useRef } from 'react';

// Components
import SingleContent from '../singleContent/SingleContent';
import Header from '../atoms/header';
import './index.css';

const Content = ({ setPutModalVisible }) => {
  const [dataContent, setDataContent] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setDataContent(data.posts);
      });
  }, []);

  // #1
  const mainContentRef = useRef(null);

  // #3
  const scrollEffect = () => {
    mainContentRef.current.scrollTop >= 1 ? setScroll(true) : setScroll(false);
  };

  // #4
  const [isScroll, setScroll] = useState(false);

  return (
    <div
      // #4
      className={`Content ${isScroll ? 'scrollEffect' : ''}`}
      // #1
      ref={mainContentRef}
      // #2
      onScroll={scrollEffect}
    >
      <Header />

      {dataContent.map((content) => (
        <SingleContent
          data={content}
          setPutModalVisible={setPutModalVisible}
          key={content.id}
        />
      ))}
    </div>
  );
};

export default Content;
