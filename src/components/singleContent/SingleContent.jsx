import { useState, useEffect } from 'react';
import './index.css';

const SingleContent = ({ data }) => {
  // #1 - Destructuring the content from the fetch(posts) made on the content.jsx file
  //  and passed as a prop (data) to the singleContent component.

  // #2 - Using its userId key to pass as a parameter on the query of the singleData fetch.
  // by doing it we're able to get a single user data based on the userId from the fetch(posts).

  // #3 - Getting additional params from the fetch(posts) to use it in the singleContent component body (e.g. body, tags).

  // sideNote_ now we have access to both fetch contents, the downside is that
  // for the singleData we'll be performing mutiples fetch calls.

  const { userId, body, tags } = data;

  // #1
  const [singleData, setSingleData] = useState({});

  // #2
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((element) => setSingleData(element));
  }, []);

  // #3
  return (
    <div className="single-content">
      <img
        src={singleData.image}
        alt={singleData.username}
        className="user-img"
      />
      <div className="text-info">
        <span>{singleData.username}</span>
        <span>{'@' + tags.join(' - ')}</span>
        <p>{body}</p>
        <div className="icons">
          <img
            src="https://img.icons8.com/ios/512/filled-chat.png"
            alt="chat icon"
          />
          <img
            src="https://img.icons8.com/fluency-systems-regular/512/retweet.png"
            alt="retweet icon"
          />
          <img
            src="https://img.icons8.com/ios-glyphs/512/hearts.png"
            alt="hearts icon"
          />
          <img
            src="https://img.icons8.com/pastel-glyph/512/upload.png"
            alt="upload icon"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleContent;
