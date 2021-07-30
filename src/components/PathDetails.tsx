import React from 'react';

interface PathDetailsProps {
  title: string;
  details: string;
}

export const PathDetails = ({
  title,
  details,
}: PathDetailsProps): JSX.Element => {
  return (
    <>
      {title}
      {details}
    </>
  );
};
