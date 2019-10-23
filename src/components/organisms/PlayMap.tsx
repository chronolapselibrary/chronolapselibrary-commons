import React from 'react';
import Tile, { TileProps } from '../molecules/Tile';
import { Box } from '@material-ui/core';

type PropsBase = { width?: number; height?: number; tiles?: TileProps[] };
export const defaultValue = {
  width: 44,
  height: 26,
  tiles: Array(44 * 26)
    .fill({})
    .map(item => ({
      size: 96,
      terrain: Math.floor(Math.random() * 13)
    }))
    .map((item: any) => ({
      ...item,
      feature: new Set([0, 5, 6]).has(item.terrain)
        ? 0
        : Math.floor(Math.random() * 8)
    }))
};
const PropsDefault: Required<
  Pick<PropsBase, { [Key in keyof PropsBase]-?: Key }[keyof PropsBase]>
> = defaultValue;
type Props = PropsBase & typeof PropsDefault;

export { defaultValue as playMapDefaultValue };
export type PlayMapProps = Props;

const PlayMap: React.FC<PropsBase> = (_props: PropsBase) => {
  const props = _props as Props;
  console.log(props.tiles);
  return (
    <>
      {props.tiles.map((item: TileProps, index: number) => {
        const row = Math.floor(index / 44);
        const column = index % 44;
        return (
          <Box
            style={{
              position: 'absolute',
              top: (row * item.size * 3) / 4,
              left:
                (column * item.size * Math.sqrt(3)) / 2 +
                ((row % 2) * item.size * Math.sqrt(3)) / 4
            }}
          >
            <Tile terrain={item.terrain} feature={item.feature} />
          </Box>
        );
      })}
    </>
  );
};
PlayMap.defaultProps = defaultValue;

export default PlayMap;
