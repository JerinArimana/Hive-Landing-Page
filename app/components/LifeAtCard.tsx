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
  id,
}: LifeAtHiveItem) => {
  return (
    <>
      <div className="flex min-h-[218px] flex-col items-center border-l border-[#ad7f27] px-6 text-center last:border-r">
        <div className="mb-[17px] flex h-[77px] items-center justify-center">
          {icon}
        </div>
        <h3 className="mb-[5px] whitespace-pre-line text-[22px] font-semibold leading-[18px] text-[#AF894A]">
          {title}
        </h3>
        <p className="mt-[5px] mb-[26px] whitespace-pre-line text-[14px] italic leading-[18px] text-[#d0b795]">
          {description}
        </p>
        <p className="whitespace-pre-line text-[11px] font-medium leading-[15px] text-[#e0d0bd]">
          {bottomText}
        </p>
      </div>
    </>
  );
};

export default LifeAtCard;
