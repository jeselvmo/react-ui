import React from 'react';
import ExampleItem from '../ExampleItem';

const code = `const Component = (
  <TabPanel>
    <h2>Mario</h2>
  </TabPanel>
);

render(Component);`;

const hint =
  'This is a simple usecase where the Luigi tab is disable by default. You can also use [tab] to focus the tabs and use arrow left/right or up/down to switch tabs.';

export default () => (
  <ExampleItem code={code} hint={hint} label="Super Mario Example" />
);
