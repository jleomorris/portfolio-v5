import { ReactNode } from 'react';
import { joinClassNames } from '../../utils';

interface IProps {
  children: ReactNode;
  bgColor?: string;
  variant: Variant;
}

export enum Variant {
  NORMAL,
  TIGHT,
}

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.NORMAL]: 'p-10 md:p-40',
  [Variant.TIGHT]: 'md:p-40 xl:px-112 py-72',
};

const PageContainer: React.FC<IProps> = ({ children, bgColor, variant }) => {
  return (
    <div
      className={joinClassNames(
        'page-container min-h-screen',
        VARIANT_MAPS[variant],
        bgColor
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
