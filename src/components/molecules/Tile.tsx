import React from 'react';
import { Terrain } from '@consts/ingame/terrain';
import { FeatureType } from '@consts/ingame/feature';
import IngameImage from '@components/atoms/IngameImage';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

type PropsBase = {
  terrain?: Terrain;
  feature?: FeatureType;
  size?: number;
};
export const defaultValue = {
  terrain: 1,
  feature: 1,
  size: 96
};
const PropsDefault: Required<
  Pick<PropsBase, { [Key in keyof PropsBase]-?: Key }[keyof PropsBase]>
> = defaultValue;
type Props = PropsBase & typeof PropsDefault;

export { defaultValue as tileDefaultValue };
export type TileProps = typeof PropsDefault;

const useStyles = makeStyles({
  layer: (props: Props) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: props.size
  })
});

const Tile: React.FC<PropsBase> = (_props: PropsBase) => {
  const props = _props as Props;
  const classes = useStyles(props);

  return (
    <>
      <IngameImage type={'terrain'} key={'grassland'} />
      <IngameImage type={'feature'} key={'grassland'} />
    </>
  );
};
Tile.defaultProps = defaultValue;

export default Tile;
