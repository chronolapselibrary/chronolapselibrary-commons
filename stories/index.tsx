import React from 'react';
import { storiesOf } from '@storybook/react';

import { muiTheme } from 'storybook-addon-material-ui';
import { defaultTheme } from '@themes/defaultTheme';
import * as index from '@src/index';
import { MemoryRouter } from 'react-router';

storiesOf('atoms', module)
  .addDecorator(muiTheme([defaultTheme]))
  .add('Brand Logo', () => {
    return <index.BrandLogo />;
  })
  .add('Brand Typography', () => {
    return <index.BrandTypography />;
  })
  .add('List Item', () => {
    return <index.ListItem />;
  });

storiesOf('molecules', module)
  .addDecorator(muiTheme([defaultTheme]))
  .addDecorator((item: () => React.ReactNode) => (
    <MemoryRouter>{item()}</MemoryRouter>
  ))
  .add('Brand Bar', () => {
    return <index.BrandBar />;
  })
  .add('List', () => {
    return <index.List />;
  })
  .add('Signin', () => {
    return <index.Signin />;
  });

storiesOf('organisms', module)
  .addDecorator(muiTheme([defaultTheme]))
  .add('Header', () => {
    return <index.Header />;
  })
  .add('Navigation', () => {
    return <index.Navigation />;
  });
