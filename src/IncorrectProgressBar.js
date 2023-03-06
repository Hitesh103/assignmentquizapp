import React from 'react';

const IncorrectProgressBar = (props) => {
  // calculate the percentage of correct answers
  const percentage = Math.round((((props.currentQuestion - props.score) ) / props.total) * 100);

  return (
    <div className="progress-bar2">
      <div className="filler2" style={{ width: `${percentage}%` }} />
      <span className="label2">{`${percentage}%`}</span>
    </div>
  );
};

export default IncorrectProgressBar;