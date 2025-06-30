import Button from "./button";

export default function SecondaryButton({ children }) {
  return (
    <Button
      className="border-[2px] border-primary hover:bg-primary hover:text-white"
      size="md"
    >
      {children}
    </Button>
  );
}
