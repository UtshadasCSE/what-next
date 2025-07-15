export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <nav>Dash Nav</nav>
      <body>{children}</body>
    </html>
  );
}
