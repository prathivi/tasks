export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex w-full h-full items-center justify-center overflow-hidden bg-muted">
      {children}
    </div>
  );
}
