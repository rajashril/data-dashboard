import React from 'react';
import './App.css';
import BaseDashboardComponent from './components/BaseDashboardComponent';
import PieChart from './components/charts/PieChart';
import BarChart from './components/charts/BarChart';
import BarAreaChart from './components/charts/BarAreaChart';

const App = () => {
  return (
    <div className="app-container">
      <BaseDashboardComponent
        title="Sub-Category"
        description="The assets are distributed between equity and cash &amp; equivalents."
      >
        <PieChart data={'data'} />
      </BaseDashboardComponent>

      <BaseDashboardComponent
        title="Fund Distribution"
        description="A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund."
      >
        <BarChart data={'data'} />
      </BaseDashboardComponent>

      <BaseDashboardComponent
        title="Top Sectors"
        description="The assets are distributed between equity and cash &amp; equivalents."
      >
        <BarAreaChart data={'data'} />
      </BaseDashboardComponent>
    </div>
  );
};

export default App;
