import clsx from "clsx";

export default function Button({ children, className, size = "md" }) {
  const sizeClasses = {
    sm: "px-4 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={clsx(
        "font-medium text-base leading-[1.7] rounded-[1000px]",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </button>
  );
}
