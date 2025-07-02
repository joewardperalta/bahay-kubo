import Image from "next/image";
import Paragraph from "./typography/Paragraph";

export default function ProcessCard({
  image = { src: "" },
  title,
  description,
}) {
  return (
    <div className="px-12">
      <div className="mb-4">
        <Image
          src={image.src}
          width={80}
          height={80}
          alt="number step"
          className="mx-auto"
        />
      </div>

      <div className="text-center">
        <h3 className="text-primary text-[1.5rem] mb-2 font-semibold">
          {title}
        </h3>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
}
