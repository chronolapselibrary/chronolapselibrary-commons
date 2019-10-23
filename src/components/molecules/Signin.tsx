import React from 'react';
import {
  Typography,
  ButtonBase,
  createStyles,
  makeStyles,
  Fade
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';

type PropsBase = { size?: number; showTypography?: boolean };
const defaultValue = { size: 24, showTypography: true };
const PropsDefault: Required<
  Pick<PropsBase, { [Key in keyof PropsBase]-?: Key }[keyof PropsBase]>
> = defaultValue;
type Props = PropsBase & typeof PropsDefault;

export { defaultValue as signinDefaultValue };
export type SigninProps = Props;

const useStyles = makeStyles((size: number) =>
  createStyles({
    root: {
      width: 2.25 * size,
      height: 2.25 * size,
      minWidth: 0,
      padding: 0,
      marginLeft: 0.375 * size,
      '& svg': {
        marginTop: -0.225 * size
      },
      '& span': {
        borderRadius: 2 * size
      }
    }
  })
);

const Signin: React.FC<PropsBase> = (_props: PropsBase) => {
  const props = _props as Props;
  const size = props.size ? props.size : 16;
  const classes = useStyles(size);
  return (
    <React.Fragment>
      <Fade in={props.showTypography}>
        <Typography
          variant={'body1'}
          style={{
            paddingTop: 0.3125 * size,
            paddingRight: 0.125 * size,
            float: 'left'
          }}
        >
          Sign-in / Sign-up
        </Typography>
      </Fade>
      <ButtonBase className={classes.root} component={Link} to={'/Login'}>
        <AccountCircle style={{ width: 2.7 * size, height: 2.7 * size }} />
      </ButtonBase>
    </React.Fragment>
  );
};

export default Signin;
