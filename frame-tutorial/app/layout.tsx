export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function Rootlayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}