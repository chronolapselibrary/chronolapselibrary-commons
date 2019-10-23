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
  })
  .add('IngameImage', () => {
    return <index.IngameImage type={'civic'} key={'codeOfLaw'} />;
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
  })
  .add('Tile', () => {
    return <index.Tile />;
  });

storiesOf('organisms', module)
  .addDecorator(muiTheme([defaultTheme]))
  .add('Header', () => {
    return <index.Header />;
  })
  .add('Navigation', () => {
    return <index.Navigation />;
  })
  .add('PlayMap', () => {
    return <index.PlayMap />;
  });
