import Image from "next/image";

export default function Wrapper({ children }) {
  return <div className="px-8 mx-auto max-w-[1440px]">{children}</div>;
}
