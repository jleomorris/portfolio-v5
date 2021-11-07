// Components
import PageContainer, { Variant as pageVariant } from '../PageContainer';
import Button, { Variant as buttonVariant, Size } from '../Button';
import Link from 'next/link';

const Contact = () => {
  return (
    <PageContainer variant={pageVariant.NORMAL} noFlex={false}>
      <div className='contact'>
        <h1 className='font-vesterbroPoster text-8xl'>Let's work together</h1>
        <div className='w-80 h-20 mt-10 mx-auto'>
          <Button
            type='button'
            variant={buttonVariant.BLACK_OUTLINE}
            size={Size.ROUND}
          >
            <Link href='/contact'>
              <a className='block mx-auto'>
                <span className='uppercase font-sans tracking-wider'>
                  Say hello
                </span>
              </a>
            </Link>
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact;
