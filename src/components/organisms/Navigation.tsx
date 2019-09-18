import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Drawer,
  Divider,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core';
import List, { ListProps, listDefaultValue } from '@components/molecules/List';

type PropsBase = {
  list?: ListProps;
};
const defaultValue = { list: listDefaultValue };
const PropsDefault: Required<
  Pick<PropsBase, { [Key in keyof PropsBase]-?: Key }[keyof PropsBase]>
> = defaultValue;
type Props = PropsBase & typeof PropsDefault;

export { defaultValue as navigationDefaultValue };
export type NavigationProps = PropsBase;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      position: 'fixed',
      zIndex: 50,
      backgroundColor: theme.palette.primary.main,
      width: '298px'
    },
    toolBar: {
      paddingTop: '4.5rem'
    }
  })
);

const Navigation: React.FC<PropsBase> = (_props: PropsBase) => {
  const props = _props as Props;
  const classes = useStyles();

  return (
    <Drawer
      variant="persistent"
      open={true}
      anchor="left"
      classes={{ paper: classes.drawer }}
    >
      <Divider />
      <Toolbar className={classes.toolBar}>
        <List items={props.list.items} />
      </Toolbar>
    </Drawer>
  );
};

export default Navigation;
