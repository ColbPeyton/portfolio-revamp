import React from 'react';

interface PathDetailsProps {
  title: string;
  details: string;
  color: string;
}

export const PathDetails = ({
  title,
  details,
  color,
}: PathDetailsProps): JSX.Element => {
  return (
    <>
      <div className="path-item">
        <h6>{title}</h6>
        <p>{details}</p>
      </div>
      <div className="path-line" style={{ backgroundColor: color }}></div>
    </>
  );
};
