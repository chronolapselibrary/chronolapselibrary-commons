import React from 'react';
import { useWindowManager } from '@components/utils/WindowManager';
import BrandBar from '@components/molecules/BrandBar';
import Signin from '@components/molecules/Signin';

const Header: React.FC = () => {
  const window = useWindowManager();
  return (
    <React.Fragment>
      <div
        style={{ position: 'fixed', top: '16px', left: '16px', zIndex: 100 }}
      >
        <BrandBar
          size={20}
          showTypography={window.scrollTop > window.clientHeight * 0.2}
        />
      </div>
      <div
        style={{ position: 'fixed', top: '18px', right: '18px', zIndex: 100 }}
      >
        <Signin
          size={16}
          showTypography={window.scrollTop > window.clientHeight * 0.2}
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
