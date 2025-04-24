import { ChevronRight,ArrowLeft } from 'lucide-react'
import Link from 'next/link';

interface BannerProps {
  title: string;
  showAllText?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  showChevron?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  title,
  showAllText = 'Show All',
  bgColor = '#78BE20',
  textColor = 'white',
  borderColor = 'white',
  showChevron = true,
}) => {
  return (
    <div
      className={`flex justify-start items-center h-[40px] border-2 border-white px-10 w-full space-x-60 `}
      style={{ backgroundColor: bgColor, color: textColor, borderColor: borderColor }}
    >
        <Link href='/'>
            <ArrowLeft />
        </Link>
        
      <h6 className='mr-10 pr-10'>{title}</h6>
      {showAllText && (
        <h6 className='flex flex-row space-x-2 items-center'>
            
          {showAllText}
          {showChevron && <ChevronRight size={16} className='stroke-foreground' />}
        </h6>
      )}
    </div>
  );
};

export default Banner;
