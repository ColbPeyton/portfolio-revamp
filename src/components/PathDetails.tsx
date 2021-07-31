import React from 'react';
import '../styles/PathDetails.scss';

interface PathDetailsProps {
  title: string;
  details: string;
  color: string;
  notFinal: boolean;
}

export const PathDetails = ({
  title,
  details,
  color,
  notFinal,
}: PathDetailsProps): JSX.Element => {
  return (
    <div className="path-container">
      <div className="path-item">
        <div className="item-title">
          <h6>{title}</h6>
        </div>
        <div className="item-details">
          <p>{details}</p>
        </div>
      </div>
      {notFinal && (
        <div className="path-line" style={{ backgroundColor: color }}></div>
      )}
    </div>
  );
};
