import Image, { StaticImageData } from "next/image";

interface InstaCardProps {
  eventImage: StaticImageData;
}

const InstaCard = ({ eventImage }: InstaCardProps) => {
  return (
    <>
      <div className="relative rounded-[20px] overflow-hidden bg-white p-[15px] pb-[60px]">
        <Image
          src={eventImage}
          alt="Event"
          style={{
            width: "246px",
            height: "240px",
            objectFit: "cover",
          }}
          className="rounded-[20px]"
        />
      </div>
    </>
  );
};

export default InstaCard;
