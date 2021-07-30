import React from 'react';
import { PathDetails } from './PathDetails';

const temp = [
  { title: 'one', details: 'temp1' },
  { title: 'two', details: 'temp2' },
  { title: 'three', details: 'temp3' },
];

const colors = ['#6C60FA', '#0390F8', '#03BFF8', '#FA60EE', '#BF60FA'];

export const TechPath = (): JSX.Element => {
  return (
    <div className="container-path">
      {temp.map((item, i) => (
        <PathDetails
          title={item.title}
          details={item.details}
          color={colors[i]}
        />
      ))}
    </div>
  );
};
