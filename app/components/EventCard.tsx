import Image, { StaticImageData } from "next/image";

import LocationIcon from "../img/location_icon.png";

interface EventCardProps {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  date: string;
  eventImage: StaticImageData;
}

const EventCard = ({
  id,
  title,
  subTitle,
  description,
  date,
  eventImage,
}: EventCardProps) => {
  return (
    <>
      <div className="relative rounded-[20px] overflow-hidden">
        <Image
          src={eventImage}
          alt="Event"
          style={{
            width: "100%",
            height: "393px",
            objectFit: "cover",
          }}
        />
        <div className="absolute top-0 h-full w-full flex flex-col justify-between">
          <h3 className="text-[26px] text-center font-bold text-[#B08A4C] pt-[30px]">
            {title}
          </h3>

          <div className="bg-[#5E260B] p-4  w-[100px] rounded-[20px] m-[13px] text-center">
            <p className="text-xl font-semibold text-[#E0D8CF]">{date}</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Image
          src={LocationIcon}
          width={30}
          height={40}
          alt="LocationIcon"
          className="m-auto mt-[14px] mb-[14px]"
        />
        <div className="flex items-center justify-center h-[80px] py-[8px] border-t-2 border-[#B08A4C] border-b-2 ">
          <h4 className="text-[20px] font-semibold text-[#AF894A] ">
            {subTitle}
          </h4>
        </div>

        <p className="text-[#3D522D] text-[20px] font-medium mt-[5px]">
          {description}
        </p>
      </div>
    </>
  );
};

export default EventCard;
