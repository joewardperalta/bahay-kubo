import Image from "next/image";
import Paragraph from "./typography/Paragraph";

export default function ProgramCard({ image, title, description }) {
  return (
    <div>
      {/* Card image */}
      <div>
        <Image
          src={image.src}
          width={443}
          height={320}
          alt={image.alt}
          className="w-full h-full"
        />
      </div>

      {/* Card body */}
      <div className="mt-4">
        <h3 className="text-primary text-[1.5rem] mb-2 font-semibold">
          {title}
        </h3>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
}
