import React from 'react';

const generatePathDetails = (title: string, details: string): JSX.Element => {
  return (
    <div className="path-item">
      <h6>{title}</h6>
      <p>{details}</p>
    </div>
  );
};

const temp = [
  { title: 'one', details: 'temp1' },
  { title: 'two', details: 'temp2' },
  { title: 'three', details: 'temp3' },
];

export const TechPath = (): JSX.Element => {
  return (
    <div className="container-path">
      {temp.map((item) => generatePathDetails(item.title, item.details))}
    </div>
  );
};
