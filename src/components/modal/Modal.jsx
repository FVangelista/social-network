import { useState } from 'react';
import './index.css';

const Modal = ({ setModalVisible }) => {
  // Controlled component - inputs (form)
  const [titleInput, setTitleInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [userIdInput, setUserIdInput] = useState('');

  const onHandleSubmit = (e) => {
    e.preventDefault();

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: titleInput,
        message: messageInput,
        userId: userIdInput,
      }),
    }).then(() => setModalVisible(false));

    console.log({
      title: titleInput,
      message: messageInput,
      userId: userIdInput,
    });
  };

  const isClikedOverlay = () => {
    setModalVisible(false);
  };

  return (
    <div className="Modal">
      <div className="Modal__overlay" onClick={isClikedOverlay}></div>
      <div className="Modal__content">
        <form onSubmit={onHandleSubmit} className="Modal__content--form">
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
          <input
            type="number"
            placeholder="User id"
            value={userIdInput}
            onChange={(e) => setUserIdInput(e.target.value)}
          />
          <input type="submit" value="Post" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
