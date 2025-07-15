import { Poppins } from "next/font/google";

export const metadata = {
  title: "What Next",
  description: "Let's learn about NextJS",
};

// 1️⃣ Load your font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Pick what you need!
  variable: "--font-poppins", // Optional: custom CSS variable
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
