import React from 'react';

const createBannerItem = (tech: string, key: number): JSX.Element => {
  return (
    <div className="banner-item" key={key}>
      <h3>{tech}</h3>
    </div>
  );
};

const techNames = ['Axios', 'Material-Ui', 'Mapbox', 'React Router', 'Redux'];

export const TechBanner = (): JSX.Element => {
  return (
    <div className="container-tech">
      <div className="container-banner">
        {techNames.map((tech, i) => createBannerItem(tech, i))}
      </div>
    </div>
  );
};
