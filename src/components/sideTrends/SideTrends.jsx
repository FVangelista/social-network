import './index.css';

const SideTrends = ({ data }) => {
  return (
    <div className="SideTrends">
      <div className="trends-info">
        <span>{'@' + data.user.username}</span>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default SideTrends;
