import { ChevronRight } from 'lucide-react';

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
  bgColor = '#012F6B',
  textColor = 'white',
  borderColor = 'white',
  showChevron = true,
}) => {
  return (
    <div
      className={`flex justify-between items-center h-10 border-2 border-white px-4 md:px-6 lg:px-8 w-full max-w-full mx-auto`}
      style={{ backgroundColor: bgColor, color: textColor, borderColor: borderColor }}
    >
      <h6 className="text-sm md:text-base lg:text-lg">{title}</h6>
      {showAllText && (
        <h6 className="flex flex-row space-x-2 items-center text-sm md:text-base lg:text-lg">
          {showAllText}
          {showChevron && <ChevronRight size={16} className="stroke-foreground" />}
        </h6>
      )}
    </div>
  );
};

export default Banner;