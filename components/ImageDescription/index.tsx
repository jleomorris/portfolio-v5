// Utils
import { joinClassNames } from '../../utils';

export enum Variant {
  BLACK,
}

export enum Size {
  NORMAL,
}

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.BLACK]: 'bg-black',
};

const SIZE_MAPS: Record<Size, string> = {
  [Size.NORMAL]: 'rounded-full w-48 sm:w-72 h-48 sm:h-72',
};

interface IProps {
  content: string;
  variant?: Variant;
  size?: Size;
}

const ImageDescription: React.FC<IProps> = ({
  content,
  variant = Variant.BLACK,
  size = Size.NORMAL,
}) => {
  return (
    <div className='w-full h-full image-description'>
      <h2
        className={joinClassNames(
          'flex items-center justify-center p-12 text-xl italic font-bold text-center text-white sm:text-2xl font-vesterbro bg-opacity-90',
          VARIANT_MAPS[variant],
          SIZE_MAPS[size]
        )}
      >
        {content}
      </h2>
    </div>
  );
};

export default ImageDescription;
