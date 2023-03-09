// Hooks
import { useState, useEffect, useRef } from 'react';

// Components
import SingleContent from '../singleContent/SingleContent';
import Header from '../header';
import './index.css';

// React Icons

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

  // 09-03-2023 - useRef

  // 1# - The useRef hook has been added (mainContentRef),
  // then it was passed to the Content component <div> for a reference
  // of the subject that we are going to manipulate.

  // 2# - Afterwards was added on the same component an event listener (onScroll),
  // and passed the callback function (scrollEffect) through it.

  // 3# The data within the callback is a condition that is going to look for the current scroll value (scrollTop, returns the number of pixels an element's content is scrolled vertically) using the reference that we passed to the component, if it is bigger/equal to 1.

  // 4# An useState hook was set which is by
  // default a boolean(false), it is going to be true if our condition is true.

  // 5# - The useState in turn sets a class on the component if its value is true

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
        <SingleContent data={content} key={content.id} />
      ))}
    </div>
  );
};

export default Content;
