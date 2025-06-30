export default function Section({ className, children }) {
  return <section className={"py-[100px] " + className}>{children}</section>;
}
