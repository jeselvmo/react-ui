import PropTypes from 'prop-types';
import React from 'react';
import cx from 'clsx';

const DEFAULT_CLASS = 'ljmui2__tab-panel';
const defaultProps = {
  className: DEFAULT_CLASS,
  selectedClassName: `${DEFAULT_CLASS}--selected`,
};
const propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  selected: PropTypes.bool,
  selectedClassName: PropTypes.string,
};
const TabPanel = (props) => {
  const { children, className, selected, selectedClassName, ...attributes } =
    props;

  return (
    <div
      className={cx(className, {
        [selectedClassName]: selected,
      })}
      {...attributes}
    >
      {children}
    </div>
  );
};

TabPanel.tabsRole = 'TabPanel';
TabPanel.propTypes = propTypes;
TabPanel.defaultProps = defaultProps;
export default TabPanel;
