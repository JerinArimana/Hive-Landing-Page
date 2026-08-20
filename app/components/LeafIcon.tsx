import Image from "next/image";
import LeafImg1 from "../img/leaf-1.png";
const LeafIcon = () => {
  return (
    <>
      <Image src={LeafImg1} alt="Leaf Icon" width={38} height={38} />
    </>
  );
};

export default LeafIcon;
