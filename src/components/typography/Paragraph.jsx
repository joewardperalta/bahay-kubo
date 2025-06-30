export default function Paragraph({ children }) {
  return (
    <p className="text-[1.125rem] leading-[1.7] text-secondary mb-4 max-w-[35.625rem]">
      {children}
    </p>
  );
}
