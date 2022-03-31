import React from 'react';
import ReactDOM from 'react-dom';
import './example.less';
// import SuperMario from './components/examples/SuperMario';
// import MattGroening from './components/examples/MattGroening';
// import Avengers from './components/examples/Avengers';
// import RightToLeft from './components/examples/RightToLeft';
import TestTabPane from './components/examples/TestTabPane';

ReactDOM.render(
  <div>
    {/* <SuperMario />
    <MattGroening />
    <Avengers />
    <RightToLeft /> */}
    <TestTabPane />
  </div>,
  document.getElementById('example'),
);
