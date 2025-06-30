import clsx from "clsx";

export default function SectionBody({ className, children }) {
  return <div className={clsx("mb-10", className)}>{children}</div>;
}
