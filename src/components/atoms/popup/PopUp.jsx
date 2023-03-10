import './index.css';

const PopUp = ({ children }) => {
  return (
    <div className="PopUp">
      <h1>this is a pop up</h1>
      {children}
    </div>
  );
};

export default PopUp;
