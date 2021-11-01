import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  bgColor?: string;
}

const PageContainer: React.FC<IProps> = ({ children, bgColor }) => {
  return (
    <div className={`page-container min-h-screen p-10 md:p-40 ${bgColor}`}>
      {children}
    </div>
  );
};

export default PageContainer;
