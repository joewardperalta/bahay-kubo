import Button from "./button";

export default function SecondaryButton({ children, onClick }) {
  return (
    <Button
      onClick={onClick}
      className="border-[2px] border-primary hover:bg-primary 
      hover:text-white duration-[400ms] cursor-pointer text-primary"
      size="md"
    >
      {children}
    </Button>
  );
}
