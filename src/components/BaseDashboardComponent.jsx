import React from 'react';
import './BaseDashboardComponent.css';

const BaseDashboardComponent = ({ title, description, children }) => {
  return (
    <div className="dashboard-component">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="data-diagram">{children}</div>
    </div>
  );
};

export default BaseDashboardComponent;