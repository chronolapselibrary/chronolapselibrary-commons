import React from 'react';
import { Fade } from '@material-ui/core';
import { Link } from 'react-router-dom';
import BrandLogo from '@components/atoms/BrandLogo';
import BrandTypography from '@components/atoms/BrandTypography';

type PropsBase = {
  size?: number;
  showTypography?: boolean;
};
const defaultValue = {
  size: 24,
  showTypography: true
};
const PropsDefault: Required<
  Pick<PropsBase, { [Key in keyof PropsBase]-?: Key }[keyof PropsBase]>
> = defaultValue;
type Props = PropsBase & typeof PropsDefault;

export { defaultValue as brandBarDefaultValue };
export type BrandBarProps = PropsBase;

const BrandBar: React.FC<PropsBase> = (_props: PropsBase) => {
  const props = _props as Props;
  return (
    <Link to={'/'}>
      <BrandLogo size={2 * props.size} />
      <Fade in={props.showTypography}>
        <BrandTypography size={props.size} />
      </Fade>
    </Link>
  );
};

BrandBar.defaultProps = defaultValue;

export default BrandBar;
