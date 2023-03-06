import React from 'react';

const ProgressBar = (props) => {
  // calculate the percentage of correct answers
  const percentage = Math.round((props.score / props.total) * 100);

  return (
    <div className="progress-bar">
      <div className="filler" style={{ width: `${percentage}%` }} />
      <span className="label">{`${percentage}%`}</span>
    </div>
  );
};

export default ProgressBar;