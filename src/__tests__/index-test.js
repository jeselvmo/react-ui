import { TabPanel } from '../index';
import TabPanelComponent from '../TabPanel';

describe('index.js', () => {
  it('should correctly export all component as named export', () => {
    expect(TabPanel).toEqual(TabPanelComponent);
  });
});
