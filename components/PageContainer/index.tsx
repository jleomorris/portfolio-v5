import { ReactNode } from 'react';
import { joinClassNames } from '../../utils';
// Components
import Image from 'next/image';

interface IProps {
  children: ReactNode;
  bgColor?: string;
  variant: Variant;
  noFlex: boolean;
  backgroundImgURL?: string;
}

export enum Variant {
  NORMAL,
  TIGHT,
}

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.NORMAL]: 'p-10 md:p-40',
  [Variant.TIGHT]: 'md:p-40 px-20 xl:px-160 py-72',
};

const PageContainer: React.FC<IProps> = ({
  children,
  bgColor,
  variant,
  noFlex,
  backgroundImgURL,
}) => {
  return (
    <div
      className={joinClassNames(
        `page-container relative min-h-screen border border-purple-900 ${
          noFlex ? '' : 'flex flex-col justify-center items-center'
        }`,
        VARIANT_MAPS[variant],
        bgColor
      )}
    >
      {backgroundImgURL && (
        <div className='absolute top-0 left-0 w-full h-full'>
          <div className='absolute top-0 left-0 z-10 w-full h-full background-cover bg-gradient-to-r from-black'></div>
          <Image src={backgroundImgURL} layout='fill' objectFit='cover' />
        </div>
      )}
      {children}
    </div>
  );
};

export default PageContainer;
