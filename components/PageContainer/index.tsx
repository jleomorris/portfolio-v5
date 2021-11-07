import { ReactNode } from 'react';
import { joinClassNames } from '../../utils';

interface IProps {
  children: ReactNode;
  bgColor?: string;
  variant: Variant;
  noFlex: boolean;
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
}) => {
  return (
    <div
      className={joinClassNames(
        `page-container min-h-screen border border-purple-900 ${
          noFlex ? '' : 'flex flex-col justify-center items-center'
        }`,
        VARIANT_MAPS[variant],
        bgColor
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
