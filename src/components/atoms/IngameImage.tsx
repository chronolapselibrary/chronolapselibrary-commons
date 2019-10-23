import React, { lazy, Suspense } from 'react';

type PropsBase = { type: string; key: string };
export const defaultValue = { type: 'civic', key: 'codeOfLaw' };
const PropsDefault: Required<
  Pick<PropsBase, { [Key in keyof PropsBase]-?: Key }[keyof PropsBase]>
> = defaultValue;
type Props = PropsBase & typeof PropsDefault;

export { defaultValue as ingameImageDefaultValue };
export type IngameImageProps = Props;

const IngameImage: React.FC<Props> = (_props: PropsBase) => {
  const props = _props as Props;
  const Image = lazy(() =>
    import(`@bit/chronolapselibrary.assets.images.ingame/civic/codeOfLaw.svg`)
  );
  return (
    <>
      <Suspense fallback={<></>}>
        <Image />
      </Suspense>
    </>
  );
};

export default IngameImage;
