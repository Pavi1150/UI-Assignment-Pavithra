import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./style.css"

function CircularProgress({ text }) {
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
        // text={`${percentage}%`}
        styles={buildStyles({
          textSize: '28px',
          pathColor: '#7294fe',
          textColor: '#fff',
          trailColor: '#d6d6d6',
          fontWeight: 'bold'
        })}
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
