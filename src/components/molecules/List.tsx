import { List as ListMui } from '@material-ui/core';
import ListItem, {
  ListItemProps,
  listItemDefaultValue
} from '@components/atoms/ListItem';
import React from 'react';

type PropsBase = { items?: ListItemProps[] };
const defaultValue = {
  items: [listItemDefaultValue]
};
const PropsDefault: Required<
  Pick<PropsBase, { [Key in keyof PropsBase]-?: Key }[keyof PropsBase]>
> = defaultValue;
type Props = PropsBase & typeof PropsDefault;

export { defaultValue as listDefaultValue };
export type ListProps = Props;

const List: React.FC<PropsBase> = (_props: PropsBase) => {
  const props = _props as Props;
  return (
    <ListMui>
      {props.items.map(item => {
        return (
          <ListItem
            icon={item.icon ? item.icon : undefined}
            link={item.link ? item.link : undefined}
            text={item.text}
          />
        );
      })}
    </ListMui>
  );
};

export default List;
