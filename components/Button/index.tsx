import { joinClassNames } from '../../utils';

export enum Variant {
  BLACK,
  BLACK_OUTLINE,
  GREY_OUTLINE,
  RED_OUTLINE,
  ORANGE,
  GREEN,
  TRANSPARENT_DARK,
  PLAIN,
  PLAIN_DISABLED,
  DISABLED,
  DATE,
  DELIVERY_TIME,
  MAP_HIDE,
}

export enum Size {
  TEXT,
  ROUND,
  CLOSE,
  SQUARE,
  SMALL,
  NORMAL,
  LARGE,
  DATE,
  RECTANGLE,
}

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.BLACK]: 'bg-black-light hover:bg-black-lightest text-white',
  [Variant.BLACK_OUTLINE]:
    'bg-transparent hover:bg-hoverShadow text-black border-2 border-black disabled:bg-button-plain-outline disabled:text-text-disabled disabled:border-button-plain-outline',
  [Variant.GREY_OUTLINE]:
    'bg-transparent text-black-lighter border border-white-darkest hover:bg-black hover:text-white hover:border-black disabled:bg-button-plain-outline disabled:text-text-disabled disabled:border-button-plain-outline',
  [Variant.RED_OUTLINE]:
    'bg-transparent text-error border border-error hover:bg-error hover:text-white hover:border-error',
  [Variant.ORANGE]: 'bg-orange text-black-lighter hover:bg-orange-dark',
  [Variant.GREEN]: 'bg-green text-black-lighter hover:bg-green-dark',
  [Variant.TRANSPARENT_DARK]:
    'bg-transparent hover:bg-black-lightest text-white',
  [Variant.PLAIN]: '',
  [Variant.DISABLED]:
    'bg-button-disabled text-button-disabled-text cursor-not-allowed',
  [Variant.DATE]: 'hover:bg-black-lightest hover:text-white',
  [Variant.PLAIN_DISABLED]:
    'disabled:text-button-disabled-text disabled:cursor-not-allowed',
  [Variant.DELIVERY_TIME]:
    'bg-white md:border border-grey-lightestx3 hover:bg-black hover:text-white hover:border-black',
  [Variant.MAP_HIDE]: 'bg-white bg-opacity-25 text-white hover:bg-opacity-50',
};

const SIZE_MAPS: Record<Size, string> = {
  [Size.TEXT]: '',
  [Size.ROUND]: 'w-full h-full rounded-full',
  [Size.CLOSE]: 'w-full rounded-lg py-2.5 px-3.5',
  [Size.SQUARE]: 'w-full rounded-xl py-5 md:py-9 px-5',
  [Size.SMALL]: 'w-full max-h-button rounded-button py-2.5 px-5',
  [Size.NORMAL]: 'w-full max-h-button rounded-button py-2.5 px-8/50',
  [Size.LARGE]: '',
  [Size.DATE]: 'w-10 h-10 rounded-full',
  [Size.RECTANGLE]: 'w-full rounded-xl py-5 px-5 md:px-6',
};

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: Variant;
  children?: React.ReactNode;
  size?: Size;
}

const Button = ({
  variant = Variant.BLACK,
  size = Size.NORMAL,
  children,
  ...rest
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={joinClassNames(
        'text-4xl h-full group flex justify-between align-middle items-center transition ease-in-out duration-300 focus:outline-none focus-visible:shadow-outline',
        VARIANT_MAPS[variant],
        SIZE_MAPS[size]
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
