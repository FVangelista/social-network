import { useState } from 'react';
import './index.css';

const PutModal = ({ setPutModalVisible }) => {
  // Controlled component - inputs (form)
  const [titleInput, setTitleInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [idInput, setIdInput] = useState('');

  const onHandleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://dummyjson.com/posts/${idInput}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: titleInput,
        message: messageInput,
      }),
    }).then(() => setPutModalVisible(false));

    console.log({
      id: idInput,
      title: titleInput,
      message: messageInput,
    });
  };

  const isClikedOverlay = () => {
    setPutModalVisible(false);
  };

  return (
    <div className="PutModal">
      <div className="PutModal__overlay" onClick={isClikedOverlay}></div>
      <div className="PutModal__content">
        <form onSubmit={onHandleSubmit} className="PutModal__content--form">
          <input
            type="text"
            placeholder="Id"
            value={idInput}
            onChange={(e) => setIdInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="Title"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="Text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />

          <input type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default PutModal;
