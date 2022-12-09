import React, { useState } from 'react';
import './tooltip.scss';

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 300);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}>
      <div className="icon">{props.children}</div>
      {active && (
        <div className={`Tooltip-Tip ${props.direction || 'top'}`}>
          <p>{props.content}</p>
          <p>{props.content2}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
