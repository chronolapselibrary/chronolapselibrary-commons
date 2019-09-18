import React, { ReactNode, useContext, useState, useMemo } from 'react';
import ReactScrollbarsCustom, {
  ScrollbarContext,
  Scrollbar
} from 'react-scrollbars-custom';
import { ScrollState } from 'react-scrollbars-custom/dist/types/types';

interface WindowManagerProps {
  children?: ReactNode;
}

const WindowManager: React.FC = (props: WindowManagerProps) => {
  return (
    <ReactScrollbarsCustom
      createContext={true}
      noScrollX={true}
      wrapperProps={{
        renderer: props => {
          const { elementRef, style, ...restProps } = props;
          return (
            <span
              {...restProps}
              ref={elementRef}
              style={{ ...style, right: 0, bottom: 0 }}
            />
          );
        }
      }}
      trackYProps={{
        renderer: props => {
          const { elementRef, style, ...restProps } = props;
          return (
            <span
              {...restProps}
              ref={elementRef}
              style={{
                ...style,
                width: '6px',
                right: '4px'
              }}
            />
          );
        }
      }}
      style={{ width: '100vw', height: '100vh' }}
    >
      {props.children}
    </ReactScrollbarsCustom>
  );
};

export const useWindowManager = () => {
  const scroll = useContext(ScrollbarContext).parentScrollbar as Scrollbar;
  const [state, setState] = useState(scroll.getScrollState());
  const callback = (currentState: ScrollState) => setState(currentState);
  scroll.eventEmitter.on('scroll', callback);
  const memo = useMemo(() => {
    callback(scroll.getScrollState());
    return scroll;
  }, [scroll]);
  return memo;
};

export default WindowManager;
