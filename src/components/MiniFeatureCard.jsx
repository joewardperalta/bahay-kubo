import Image from "next/image";
import Paragraph from "./typography/Paragraph";

export default function MiniFeatureCard({ image, description }) {
  return (
    <div className="flex items-center gap-4 px-4 max-w-[412px]">
      <div className="min-w-[40px] max-w-[40px]">
        <Image
          src={image.src}
          width={48}
          height={48}
          alt={image.alt}
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-[1rem] leading-[1.2] text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
