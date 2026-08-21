import { ReactNode } from "react";

interface LifeAtHiveItem {
  id: number;
  title: string;
  description: ReactNode;
  bottomText: ReactNode;
  icon: ReactNode;
}

const LifeAtCard = ({
  icon,
  title,
  description,
  bottomText,
}: LifeAtHiveItem) => {
  return (
    <div
      className="
        pb-[10px] flex flex-row md:flex-col
        items-center
        justify-between md:justify-start
        text-left md:text-center
        gap-4 md:gap-0
        px-4 sm:px-5 md:px-6
        py-6 md:py-5
        border-[#ad7f27]
        border-t first:border-t-0
        md:border-t-0 md:border-l md:border-r-0 md:min-h-[218px]
        md:max-lg:[&:nth-child(even)]:border-r
        md:max-lg:[&:nth-child(-n+2)]:border-b
        lg:last:border-r
      "
    >
      {/* Icon + Title */}
      <div className="flex flex-col items-start md:items-center shrink-0 md:mb-[17px]">
        <div className="mb-[8px]  flex h-[48px] w-[48px] sm:h-[60px] sm:w-[60px] md:h-[77px] md:w-[77px] items-center justify-center">
          {icon}
        </div>
        <h3 className="whitespace-pre-line text-[15px] sm:text-[18px] md:text-[22px] font-semibold leading-[18px] text-[#AF894A] md:mb-[5px]">
          {title}
        </h3>
      </div>

      {/* Description + Bottom text */}
      <div className="flex flex-col items-end md:items-center max-w-[60%] md:max-w-none">
        <p className="whitespace-pre-line text-[12px] sm:text-[13px] md:text-[14px] italic leading-[16px] md:leading-[18px] text-[#d0b795] mb-[10px] md:mt-[5px] md:mb-[26px] text-right md:text-center">
          {description}
        </p>
        <p className="whitespace-pre-line text-[10px] sm:text-[10.5px] md:text-[11px] font-medium leading-[14px] md:leading-[15px] text-[#e0d0bd] text-right md:text-center">
          {bottomText}
        </p>
      </div>
    </div>
  );
};

export default LifeAtCard;