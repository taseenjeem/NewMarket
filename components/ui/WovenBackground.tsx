export default function WovenBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const style: React.CSSProperties = {
    backgroundColor: "#0A0A0A",
    backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="relative min-h-screen w-full" style={style}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
