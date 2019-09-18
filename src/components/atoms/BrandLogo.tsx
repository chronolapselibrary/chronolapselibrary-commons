import React from 'react';
import { ButtonBase, createStyles, makeStyles } from '@material-ui/core';
import logo from '@assets/images/logo/index.svg';

type PropsBase = { size?: number };
const defaultValue = { size: 48 };
const PropsDefault: Required<
  Pick<PropsBase, { [Key in keyof PropsBase]-?: Key }[keyof PropsBase]>
> = defaultValue;
type Props = PropsBase & typeof PropsDefault;

export { defaultValue as brandLogoDefaultValue };
export type BrandLogoProps = PropsBase;

const useStyles = (props: PropsBase) => {
  return makeStyles(() =>
    createStyles({
      buttonBase: {
        width: props.size,
        height: props.size,
        '& span': {
          borderRadius: props.size
        }
      }
    })
  )(props);
};

const BrandLogo: React.FC<PropsBase> = (_props: PropsBase) => {
  const props = _props as Props;
  const classes = useStyles(_props);
  return (
    <ButtonBase className={classes.buttonBase}>
      <img src={logo} style={{ height: props.size }} />
    </ButtonBase>
  );
};

BrandLogo.defaultProps = defaultValue;

export default BrandLogo;
