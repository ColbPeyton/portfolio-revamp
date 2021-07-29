import React from 'react';

const generatePathDetails = (
  title: string,
  details: string,
  color: string
): JSX.Element => {
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

const temp = [
  { title: 'one', details: 'temp1' },
  { title: 'two', details: 'temp2' },
  { title: 'three', details: 'temp3' },
];

const colors = ['#6C60FA', '#0390F8', '#03BFF8', '#FA60EE', '#BF60FA'];

export const TechPath = (): JSX.Element => {
  return (
    <div className="container-path">
      {temp.map((item, i) =>
        generatePathDetails(item.title, item.details, colors[i])
      )}
    </div>
  );
};
