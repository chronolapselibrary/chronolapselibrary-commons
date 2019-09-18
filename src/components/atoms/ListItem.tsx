import { ListItem as ListItemMui, ListItemText, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

type PropsBase = {
  icon?: string;
  link?: string;
  text?: string;
};
const defaultValue = {
  text: 'text',
  link: '/',
  icon: 'hourglass_empty'
};
const PropsDefault: Required<
  Pick<PropsBase, { [Key in keyof PropsBase]-?: Key }[keyof PropsBase]>
> = defaultValue;
type Props = PropsBase & typeof PropsDefault;
export { defaultValue as listItemDefaultValue };
export type ListItemProps = PropsBase;

const ListItem = (_props: PropsBase) => {
  const props = _props as Props;

  return (
    <ListItemMui component={props.link ? Link : 'li'} to={props.link}>
      {<Icon>props.icon</Icon>}
      <ListItemText>{props.text}</ListItemText>
    </ListItemMui>
  );
};

export default ListItem;
