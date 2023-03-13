import './index.css';
import { useState, useEffect } from 'react';
import SingleContent from '../singleContent/SingleContent';

const ContentList = ({ setPutModalVisible, inputData }) => {
  const [dataContent, setDataContent] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setDataContent(data.posts);
      });
  }, []);

  const filterData = () => {
    return dataContent.filter((content) => content.body.includes(inputData));
  };

  return (
    <div className="ContentList">
      {filterData().map((content) => (
        <SingleContent
          data={content}
          setPutModalVisible={setPutModalVisible}
          key={content.id}
        />
      ))}
    </div>
  );
};

export default ContentList;
