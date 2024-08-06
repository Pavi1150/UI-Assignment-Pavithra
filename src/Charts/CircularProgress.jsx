import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./style.css"

function CircularProgress() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (percentage < 70) {
      const timeout = setTimeout(() => setPercentage(percentage + 1), 50);
      return () => clearTimeout(timeout);
    }
  }, [percentage]);

  return (
    <div className="CircularProgress" style={{ position: 'relative', width: 150, height: 150 }}>
      <CircularProgressbar
        value={percentage}
      />
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -20%)',
          textAlign: 'center',
          color: 'white',
          fontSize: '12px',
        }}
      >
        <span className='percentage'>70%</span>

        <br />
        <span className='goalText'>Goal Completed</span>
      </div>
    </div>
  );
}

export default CircularProgress;
