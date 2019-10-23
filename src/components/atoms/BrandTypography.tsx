/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from 'react';
import { Typography } from '@material-ui/core';

type PropsBase = { size?: number };
const defaultValue = { size: 24 };
const PropsDefault: Required<
  Pick<PropsBase, { [Key in keyof PropsBase]-?: Key }[keyof PropsBase]>
> = defaultValue;
type Props = PropsBase & typeof PropsDefault;

export { defaultValue as brandTypographyDefaultValue };
export type BrandTypographyProps = Props;

const BrandTypography = (_props: PropsBase) => {
  const props = _props as Props;
  return (
    <React.Fragment>
      <defs>
        <style>
          {`.a{fill:#211806;font-size:${props.size}px;font-family:TrajanSansPro-Regular, Trajan Sans Pro; white-space:nowrap}.b{letter-spacing:-0.02em;}.c{letter-spacing:-0.07em;}.d{letter-spacing:-0.03em;}.e{letter-spacing:-0.05em;}.f{letter-spacing:-0.04em;}.g{letter-spacing:0.02em;}.h{letter-spacing:0.01em;}.i{letter-spacing:-0.01em;}.j{letter-spacing:0.03em;}`}
        </style>
      </defs>
      <Typography
        className="a"
        style={{
          paddingTop: 0.375 * props.size,
          paddingLeft: 2.1 * props.size,
          fontSize: props.size,
          transition: '0.25s'
        }}
      >
        <tspan className="b" x={0} y={0}>
          {'C'}
        </tspan>
        <tspan className="c" y={0}>
          {'h'}
        </tspan>
        <tspan className="d" y={0}>
          {'r'}
        </tspan>
        <tspan className="e" y={0}>
          {'on'}
        </tspan>
        <tspan className="f" y={0}>
          {'o'}
        </tspan>
        <tspan y={0}>{'l'}</tspan>
        <tspan className="d" y={0}>
          {'a'}
        </tspan>
        <tspan className="g" y={0}>
          {'p'}
        </tspan>
        <tspan className="h" y={0}>
          {'s'}
        </tspan>
        <tspan y={0}>{'e '}</tspan>
        <tspan className="i" y={0}>
          {'L'}
        </tspan>
        <tspan className="e" y={0}>
          {'i'}
        </tspan>
        <tspan y={0}>{'b'}</tspan>
        <tspan className="g" y={0}>
          {'r'}
        </tspan>
        <tspan className="d" y={0}>
          {'a'}
        </tspan>
        <tspan className="j" y={0}>
          {'r'}
        </tspan>
        <tspan y={0}>{'y'}</tspan>
      </Typography>
    </React.Fragment>
  );
};

BrandTypography.defaultProps = defaultValue;

export default BrandTypography;
