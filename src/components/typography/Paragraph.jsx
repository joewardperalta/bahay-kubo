import clsx from "clsx";

export default function Paragraph({ children, className }) {
  return (
    <p
      className={clsx(
        "text-[1.125rem] leading-[1.7] text-secondary mb-4 max-w-[35.625rem]",
        className
      )}
    >
      {children}
    </p>
  );
}
