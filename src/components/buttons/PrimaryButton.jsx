import clsx from "clsx";
import Button from "./button";

export default function PrimaryButton({ children, className }) {
  return (
    <div className="w-fit relative">
      <Button
        className={clsx(
          "bg-accent relative -top-1 hover:top-0 transition-all duration-[400ms]",
          className
        )}
      >
        {children}
      </Button>
      <div className="bg-primary w-full h-full -z-10 rounded-full absolute top-0"></div>
    </div>
  );
}
