export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>contact 전용 헤더</div>
      <div>contact 전용 레이아웃</div>
      {children}
    </>
  );
}
