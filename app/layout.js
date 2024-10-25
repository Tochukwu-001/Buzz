import { Open_Sans } from "next/font/google";
import "./globals.css";

const opensans = Open_Sans({ subsets: ["latin"], weight: ['300',"400", "500", "600", "700", "800"] });

export const metadata = {
  title: "Buzz",
  description: "Artisan Connections at its best",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={opensans.className}>{children}</body>
    </html>
  );
}
