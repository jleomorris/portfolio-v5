// Components
import Image from 'next/image';

interface IProps {
  src: string;
  fallback: string;
  type?: string;
  alt: string;
}

const CustomImage: React.FC<IProps> = ({
  src,
  fallback,
  type = 'image/webp',
  alt,
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <Image src={fallback} layout='fill' objectFit='contain' alt={alt} />
    </picture>
  );
};

export default CustomImage;
