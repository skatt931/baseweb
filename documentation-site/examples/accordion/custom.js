// @flow
import * as React from 'react';
import {Accordion, Panel} from 'baseui/accordion';

export default () => {
  return (
    <Accordion onChange={({expanded}) => console.log(expanded)}>
      <Panel title="Panel 1">Panel 1 opens correctly</Panel>
      <CustomPanel title="Custom Panel">
        This is a custom panel component
      </CustomPanel>
    </Accordion>
  );
};

function CustomPanel(props) {
  return <Panel {...props} />;
}
